import projectsConfig from '../config/projects.config.js';

const CACHE_KEY = 'github_repos_cache';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

const LANGUAGE_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    'C#': '#178600',
    Go: '#00ADD8',
    Rust: '#dea584',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Dart: '#00B4AB',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Shell: '#89e051',
    Vue: '#41b883',
    default: '#8b5cf6',
};

function getLanguageColor(language) {
    return LANGUAGE_COLORS[language] || LANGUAGE_COLORS.default;
}

function getCachedRepos() {
    try {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const { data, timestamp } = JSON.parse(raw);
        if (Date.now() - timestamp > CACHE_TTL) {
            sessionStorage.removeItem(CACHE_KEY);
            return null;
        }
        return data;
    } catch {
        return null;
    }
}

function setCachedRepos(data) {
    try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
    } catch {
        // ignore storage errors
    }
}

function normalizeRepo(raw, overrides = {}) {
    const demoUrl = overrides.demoUrl || raw.homepage || null;
    return {
        id: raw.id,
        name: raw.name,
        fullName: raw.full_name,
        description: overrides.description || raw.description || 'No description provided.',
        url: raw.html_url,
        demoUrl,
        language: raw.language,
        languageColor: getLanguageColor(raw.language),
        stars: raw.stargazers_count,
        forks: raw.forks_count,
        topics: raw.topics || [],
        updatedAt: raw.updated_at,
        image: overrides.image || null,
        featured: overrides.featured || false,
    };
}

function filterAndSortRepos(repos, config) {
    const { hidden, pinned, fetchOptions, overrides } = config;
    const { excludeForks, excludeArchived, maxRepos } = fetchOptions;

    let filtered = repos.filter((repo) => {
        if (hidden.includes(repo.name)) return false;
        if (excludeForks && repo.fork) return false;
        if (excludeArchived && repo.archived) return false;
        return true;
    });

    const pinnedSet = new Set(pinned);
    const pinnedRepos = pinned
        .map((name) => filtered.find((r) => r.name === name))
        .filter(Boolean);
    const rest = filtered
        .filter((r) => !pinnedSet.has(r.name))
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    filtered = [...pinnedRepos, ...rest].slice(0, maxRepos);

    return filtered.map((repo) => normalizeRepo(repo, overrides[repo.name] || {}));
}

export async function fetchGitHubRepos() {
    const cached = getCachedRepos();
    if (cached) return cached;

    const { username } = projectsConfig;
    const headers = { Accept: 'application/vnd.github.v3+json' };

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        { headers },
    );

    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
    }

    const raw = await response.json();
    const repos = filterAndSortRepos(raw, projectsConfig);
    setCachedRepos(repos);
    return repos;
}

export function getFallbackRepos() {
    const { pinned, overrides } = projectsConfig;
    return pinned.map((name) =>
        normalizeRepo(
            {
                id: name,
                name,
                full_name: `${projectsConfig.username}/${name}`,
                description: overrides[name]?.description || null,
                html_url: `https://github.com/${projectsConfig.username}/${name}`,
                homepage: overrides[name]?.demoUrl || null,
                language: null,
                stargazers_count: 0,
                forks_count: 0,
                topics: [],
                updated_at: new Date().toISOString(),
            },
            overrides[name] || {},
        ),
    );
}

export { getLanguageColor };
