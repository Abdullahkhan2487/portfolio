import React, { useRef } from 'react';

export default function MagneticButton({ href, children, variant = 'primary', className = '' }) {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = '';
    };

    const base =
        'inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300';
    const variants = {
        primary:
            'glass-strong text-white hover:shadow-lg hover:shadow-primary-500/30 border border-primary-500/30 hover:border-primary-500/60',
        secondary:
            'glass text-primary-400 border border-primary-500/40 hover:bg-primary-500/10 hover:border-primary-500/60',
        ghost: 'text-white/70 hover:text-white border border-white/10 hover:border-white/20 glass',
    };

    return (
        <a
            ref={ref}
            href={href}
            className={`${base} ${variants[variant]} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </a>
    );
}
