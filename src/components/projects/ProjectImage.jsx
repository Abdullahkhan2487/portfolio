import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';

export default function ProjectImage({ src, alt, caption, className = 'h-52' }) {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
        return (
            <div
                className={`relative w-full ${className} flex flex-col items-center justify-center gap-3 glass rounded-xl overflow-hidden border border-dashed border-white/10`}
            >
                <ImageIcon className="w-8 h-8 text-white/20" />
                <span className="text-xs font-mono text-white/30 px-4 text-center">
                    {caption || alt}
                    <br />
                    <span className="text-white/20">Screenshot coming soon</span>
                </span>
            </div>
        );
    }

    return (
        <div className={`relative w-full ${className} rounded-xl overflow-hidden group`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={() => setFailed(true)}
            />
            {caption && (
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-dark-950/90 to-transparent">
                    <span className="text-xs font-mono text-white/60">{caption}</span>
                </div>
            )}
        </div>
    );
}
