import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import TechStack from './components/sections/TechStack.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        const handleAnchorClick = (e) => {
            const href = e.target.closest('a')?.getAttribute('href');
            if (!href?.startsWith('#') || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, { offset: -80 });
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
