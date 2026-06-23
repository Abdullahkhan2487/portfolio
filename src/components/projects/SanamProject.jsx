import React from 'react';
import { ExternalLink, Smartphone, Globe, Server, LayoutDashboard } from 'lucide-react';
import GlassCard from '../ui/GlassCard.jsx';
import ProjectImage from './ProjectImage.jsx';

const surfaceIcons = {
    website: Globe,
    backend: Server,
    game: Smartphone,
    admin: LayoutDashboard,
};

function SurfaceLink({ surface }) {
    if (surface.id === 'game') {
        const { ios, android } = surface.links || {};
        if (!ios && !android) return null;
        return (
            <div className="flex flex-wrap gap-3 mt-4">
                {ios && (
                    <a
                        href={ios}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-mono text-secondary-400 hover:text-secondary-300 transition-colors"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        App Store
                    </a>
                )}
                {android && (
                    <a
                        href={android}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-mono text-secondary-400 hover:text-secondary-300 transition-colors"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Google Play
                    </a>
                )}
            </div>
        );
    }

    if (!surface.link) return null;

    return (
        <a
            href={surface.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-mono text-primary-400 hover:text-primary-300 transition-colors"
        >
            <ExternalLink className="w-3.5 h-3.5" />
            {surface.linkLabel}
        </a>
    );
}

function SystemHighlight({ system }) {
    const Icon = surfaceIcons[system.id] || Server;
    return (
        <div className="glass rounded-xl p-5 flex gap-4">
            <div className="p-2.5 rounded-lg bg-primary-500/10 h-fit">
                <Icon className="w-5 h-5 text-primary-400" />
            </div>
            <div>
                <h5 className="font-display font-semibold text-base mb-1.5">{system.title}</h5>
                <p className="text-sm text-white/55 leading-relaxed">{system.description}</p>
            </div>
        </div>
    );
}

export default function SanamProject({ project }) {
    return (
        <GlassCard strong className="reveal-item p-8 md:p-10 mb-16 overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                    <p className="text-secondary-500 font-mono text-sm tracking-widest mb-2">
                        {project.subtitle}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-chromatic">
                        {project.name}
                    </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-primary-500/10 text-primary-300 border border-primary-500/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-4xl">{project.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {project.stats.map((stat) => (
                    <div key={stat.label} className="glass rounded-xl p-4 text-center">
                        <div className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                            {stat.value}
                        </div>
                        <div className="text-xs font-mono text-white/40 mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>

            <ul className="space-y-3 mb-12">
                {project.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/65 text-sm md:text-base">
                        <span className="text-secondary-500 font-mono mt-0.5">▸</span>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="border-t border-white/5 pt-10 mb-10">
                <h4 className="text-xl font-display font-semibold mb-8">Platform Surfaces</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.surfaces.map((surface) => {
                        const Icon = surfaceIcons[surface.id] || Globe;
                        return (
                            <div key={surface.id} className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg glass">
                                        <Icon className="w-4 h-4 text-secondary-500" />
                                    </div>
                                    <h5 className="font-display font-semibold text-lg">{surface.title}</h5>
                                </div>
                                <ProjectImage
                                    src={surface.image}
                                    alt={surface.title}
                                    caption={surface.title}
                                    className="h-56 md:h-64"
                                />
                                <p className="text-sm text-white/55 leading-relaxed">{surface.description}</p>
                                <SurfaceLink surface={surface} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {project.systems?.length > 0 && (
                <div className="border-t border-white/5 pt-10">
                    <h4 className="text-xl font-display font-semibold mb-2">Behind the Scenes</h4>
                    <p className="text-sm text-white/40 font-mono mb-6">
                        Core infrastructure powering the platform
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.systems.map((system) => (
                            <SystemHighlight key={system.id} system={system} />
                        ))}
                    </div>
                </div>
            )}
        </GlassCard>
    );
}
