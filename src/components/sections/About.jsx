import React from 'react';
import { site } from '../../config/site.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

export default function About() {
    const revealRef = useScrollReveal();

    return (
        <section id="about" className="py-28 relative">
            <div className="absolute -left-32 top-1/4 w-72 h-72 rounded-full bg-primary-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute -right-32 bottom-1/4 w-72 h-72 rounded-full bg-secondary-500/10 blur-[100px] pointer-events-none" />

            <div
                ref={revealRef}
                className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                <div className="reveal-item relative flex justify-center lg:justify-start">
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-3xl gradient-border opacity-60" />
                        <div className="relative glass-strong rounded-3xl p-1 overflow-hidden">
                            <img
                                src={site.profileImage}
                                alt="Abdullah Khan"
                                className="rounded-[20px] w-72 h-72 lg:w-80 lg:h-80 object-cover"
                                onError={(e) => {
                                    e.target.src =
                                        'data:image/svg+xml,' +
                                        encodeURIComponent(
                                            `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320"><rect fill="#12121c" width="320" height="320"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#8b5cf6" font-size="80" font-family="sans-serif">AK</text></svg>`,
                                        );
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="reveal-item">
                        <SectionHeading
                            prefix="//"
                            title="About"
                            highlight="Me"
                            align="left"
                        />
                    </div>
                    <div className="space-y-6 text-lg text-white/75 leading-relaxed">
                        {site.about.map((paragraph, i) => (
                            <p key={i} className="reveal-item">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
