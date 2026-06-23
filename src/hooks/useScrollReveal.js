import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(el, { opacity: 1, y: 0, filter: 'blur(0px)' });
            return;
        }

        const children = el.querySelectorAll('.reveal-item');
        const targets = children.length > 0 ? children : [el];

        gsap.set(targets, { opacity: 0, y: 40, filter: 'blur(8px)' });

        const ctx = gsap.context(() => {
            gsap.to(targets, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        }, el);

        return () => ctx.revert();
    }, []);

    return ref;
}
