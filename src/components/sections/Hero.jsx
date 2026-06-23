import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { site } from '../../config/site.js';
import MagneticButton from '../ui/MagneticButton.jsx';

const HeroScene = lazy(() => import('../three/HeroScene.jsx'));

export default function Hero() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const items = contentRef.current?.querySelectorAll('.reveal-item');
        if (!items?.length) return;

        gsap.fromTo(
            items,
            { opacity: 0, y: 30, filter: 'blur(6px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.3 },
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            const progress = Math.min(window.scrollY / heroHeight, 1);
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-primary opacity-40 pointer-events-none" />

            <Suspense
                fallback={
                    <div className="absolute inset-0">
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-violet-950/25 blur-[100px]" />
                    </div>
                }
            >
                <HeroScene scrollProgress={scrollProgress} />
            </Suspense>

            <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 pt-24">
                <div className="reveal-item hero-reveal text-secondary-500 mb-6 flex items-center font-mono text-sm tracking-widest flex-wrap gap-y-2">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500 mr-4" />
                    <span>{site.title}</span>
                    <span className="text-white/20 mx-2 hidden sm:inline">·</span>
                    <span className="text-white/40">{site.location}</span>
                </div>

                <h1 className="reveal-item hero-reveal text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-[0.95]">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-secondary-400 text-chromatic">
                        Abdullah
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-primary-400 to-white">
                        Khan
                    </span>
                </h1>

                <p className="reveal-item hero-reveal text-xl md:text-2xl max-w-2xl mb-12 text-white/70 font-sans leading-relaxed">
                    {site.tagline}
                </p>

                <div className="reveal-item hero-reveal flex flex-wrap gap-4">
                    <MagneticButton href="#projects" variant="primary">
                        View Work
                    </MagneticButton>
                    <MagneticButton href="#contact" variant="secondary">
                        Contact Me
                    </MagneticButton>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-xs font-mono text-white/30 tracking-widest uppercase">Scroll</span>
                <div className="scroll-indicator" />
            </div>
        </section>
    );
}
