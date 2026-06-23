import { useState, useEffect, useCallback } from 'react';
import { fetchGitHubRepos, getFallbackRepos } from '../lib/github.js';

export function useGitHubRepos() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchGitHubRepos();
            setRepos(data);
        } catch (err) {
            setError(err.message);
            setRepos(getFallbackRepos());
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return { repos, loading, error, refetch: load };
}
