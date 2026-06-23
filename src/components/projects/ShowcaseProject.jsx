import React from 'react';
import GlassCard from '../ui/GlassCard.jsx';
import ProjectImage from './ProjectImage.jsx';

export default function ShowcaseProject({ project }) {
    const hasScreenshots = project.screenshots?.length > 0;

    return (
        <GlassCard strong className="reveal-item p-8 md:p-10 mb-16 overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                    <p className="text-secondary-500 font-mono text-sm tracking-widest mb-2">
                        {project.subtitle}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-display font-bold">{project.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-secondary-500/10 text-secondary-300 border border-secondary-500/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-4xl">{project.description}</p>

            <ul className={`space-y-3 ${hasScreenshots ? 'mb-10' : ''}`}>
                {project.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/65 text-sm md:text-base">
                        <span className="text-primary-500 font-mono mt-0.5">▸</span>
                        {item}
                    </li>
                ))}
            </ul>

            {hasScreenshots && (
                <div className="border-t border-white/5 pt-10">
                    <h4 className="text-xl font-display font-semibold mb-8">Screenshots</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.screenshots.map((shot) => (
                            <ProjectImage
                                key={shot.src}
                                src={shot.src}
                                alt={shot.caption}
                                caption={shot.caption}
                                className="h-56 md:h-64"
                            />
                        ))}
                    </div>
                </div>
            )}
        </GlassCard>
    );
}
