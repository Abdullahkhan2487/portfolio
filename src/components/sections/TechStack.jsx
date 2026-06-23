import React from 'react';
import { techCategories } from '../../config/techStack.js';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

function SkillTag({ skill, variant }) {
    const colors =
        variant === 'secondary'
            ? 'bg-secondary-500/10 text-secondary-400 border-secondary-500/30 hover:border-secondary-500/60 hover:shadow-secondary-500/20'
            : 'bg-primary-500/10 text-primary-300 border-primary-500/30 hover:border-primary-500/60 hover:shadow-primary-500/20';

    return (
        <span
            className={`px-3 py-1 rounded-full text-sm font-mono border transition-all duration-300 hover:shadow-lg ${colors}`}
        >
            {skill}
        </span>
    );
}

export default function TechStack() {
    const revealRef = useScrollReveal();

    return (
        <section id="tech-stack" className="py-28 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

            <div ref={revealRef} className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="reveal-item">
                    <SectionHeading
                        title="Tech"
                        highlight="Stack"
                        subtitle="A snapshot of the technologies and practices I use to design, build, and ship robust software."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {techCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <GlassCard
                                key={category.title}
                                className="reveal-item p-6 hover:border-primary-500/30 transition-all duration-500 group"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-primary-500/20 transition-colors">
                                        <Icon className="w-5 h-5 text-secondary-500 group-hover:text-secondary-400 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                                </div>

                                {category.skills && (
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <SkillTag
                                                key={skill}
                                                skill={skill}
                                                variant={category.variant}
                                            />
                                        ))}
                                    </div>
                                )}

                                {category.list && (
                                    <ul className="space-y-2 text-sm text-white/70 list-disc list-inside font-sans">
                                        {category.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
