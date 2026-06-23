import React from 'react';

export default function GlassCard({ children, className = '', strong = false, ...props }) {
    return (
        <div
            className={`${strong ? 'glass-strong' : 'glass'} rounded-2xl relative noise-overlay ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
