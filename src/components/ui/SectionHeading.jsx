import React from 'react';

export default function SectionHeading({ prefix = '//', title, highlight, subtitle, align = 'center' }) {
    const alignClass =
        align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

    return (
        <div className={`mb-12 ${alignClass}`}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                <span className="text-primary-500 font-mono text-2xl md:text-3xl">{prefix}</span>{' '}
                {title}{' '}
                {highlight && <span className="text-secondary-500">{highlight}</span>}
            </h2>
            {subtitle && (
                <p className={`max-w-2xl text-lg text-white/70 ${align === 'center' ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
