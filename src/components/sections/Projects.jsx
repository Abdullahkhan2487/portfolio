import React from 'react';
import { ArrowRight, Star, GitFork, ExternalLink, AlertCircle, RefreshCw } from 'lucide-react';
import { GitHubIcon } from '../ui/SocialIcons.jsx';
import { useGitHubRepos } from '../../hooks/useGitHubRepos.js';
import { featuredProjects } from '../../config/featuredProjects.js';
import { site } from '../../config/site.js';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import MagneticButton from '../ui/MagneticButton.jsx';
import SanamProject from '../projects/SanamProject.jsx';
import ShowcaseProject from '../projects/ShowcaseProject.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });
}

function ProjectPlaceholder({ name, languageColor }) {
    const initial = name.charAt(0).toUpperCase();
    return (
        <div
            className="w-full h-48 flex items-center justify-center relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${languageColor}22 0%, #0a0a12 100%)`,
            }}
        >
            <span
                className="text-6xl font-display font-bold opacity-30"
                style={{ color: languageColor }}
            >
                {initial}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
        </div>
    );
}

function GitHubProjectCard({ repo }) {
    return (
        <GlassCard className="reveal-item flex-shrink-0 w-[340px] md:w-[380px] overflow-hidden group hover:border-primary-500/30 transition-all duration-500">
            {repo.image ? (
                <div className="relative overflow-hidden h-48">
                    <img
                        src={repo.image}
                        alt={repo.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent" />
                </div>
            ) : (
                <ProjectPlaceholder name={repo.name} languageColor={repo.languageColor} />
            )}

            <div className="p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                    {repo.language && (
                        <span className="flex items-center gap-1.5 text-xs font-mono text-white/60">
                            <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: repo.languageColor }}
                            />
                            {repo.language}
                        </span>
                    )}
                    <span className="flex items-center gap-1 text-xs font-mono text-white/40">
                        <Star className="w-3 h-3" />
                        {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-white/40">
                        <GitFork className="w-3 h-3" />
                        {repo.forks}
                    </span>
                    <span className="text-xs font-mono text-white/30 ml-auto">
                        {formatDate(repo.updatedAt)}
                    </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {repo.name}
                </h3>
                <p className="text-sm text-white/60 mb-4 line-clamp-3 leading-relaxed">{repo.description}</p>

                {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics.slice(0, 4).map((topic) => (
                            <span
                                key={topic}
                                className="px-2 py-0.5 rounded-md text-xs font-mono bg-white/5 text-white/50 border border-white/5"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <a
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-mono text-primary-400 hover:text-primary-300 transition-colors"
                    >
                        <GitHubIcon className="w-4 h-4" />
                        Code
                    </a>
                    {repo.demoUrl && (
                        <a
                            href={repo.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm font-mono text-secondary-400 hover:text-secondary-300 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </GlassCard>
    );
}

function SkeletonCard() {
    return (
        <div className="flex-shrink-0 w-[340px] md:w-[380px] glass rounded-2xl overflow-hidden">
            <div className="h-48 skeleton-shimmer" />
            <div className="p-6 space-y-3">
                <div className="h-4 w-1/3 skeleton-shimmer rounded" />
                <div className="h-6 w-2/3 skeleton-shimmer rounded" />
                <div className="h-4 w-full skeleton-shimmer rounded" />
                <div className="h-4 w-4/5 skeleton-shimmer rounded" />
            </div>
        </div>
    );
}

function FeaturedProject({ project }) {
    if (project.layout === 'sanam') {
        return <SanamProject project={project} />;
    }
    return <ShowcaseProject project={project} />;
}

export default function Projects() {
    const { repos, loading, error, refetch } = useGitHubRepos();
    const revealRef = useScrollReveal();

    return (
        <section id="projects" className="py-28 relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

            <div ref={revealRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="reveal-item">
                    <SectionHeading
                        title="Featured"
                        highlight="Work"
                        subtitle="Enterprise platforms and AI systems built for scale — from 600K-user gaming ecosystems to multi-tenant SaaS and autonomous agent orchestration."
                    />
                </div>

                <div className="mb-24">
                    {featuredProjects.map((project) => (
                        <FeaturedProject key={project.id} project={project} />
                    ))}
                </div>

                <div className="reveal-item mb-12">
                    <SectionHeading
                        title="Open"
                        highlight="Source"
                        subtitle="Additional projects synced live from GitHub."
                    />
                </div>

                {error && (
                    <div className="reveal-item flex items-center gap-3 mb-8 p-4 glass rounded-xl text-sm font-mono text-white/60 max-w-2xl">
                        <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>Couldn&apos;t reach GitHub API — showing cached/pinned projects.</span>
                        <button
                            onClick={refetch}
                            className="ml-auto flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
                        >
                            <RefreshCw className="w-3.5 h-3.5" />
                            Retry
                        </button>
                    </div>
                )}

                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
                    {loading
                        ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
                        : repos.map((repo) => <GitHubProjectCard key={repo.id} repo={repo} />)}
                </div>

                <div className="reveal-item text-center mt-12">
                    <MagneticButton href={site.social.github} variant="ghost">
                        View All on GitHub
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
