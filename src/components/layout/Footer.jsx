import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../ui/SocialIcons.jsx';
import { site } from '../../config/site.js';

const socialLinks = [
    { href: site.social.github, icon: GitHubIcon, label: 'GitHub' },
    { href: site.social.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
    { href: site.social.email, icon: MailIcon, label: 'Email' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative mt-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col items-center text-center">
                <div className="font-display font-bold text-2xl bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-8">
                    {site.shortName}
                </div>
                <div className="flex gap-4 mb-8">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            className="w-11 h-11 flex items-center justify-center rounded-full glass hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group"
                            aria-label={label}
                        >
                            <Icon className="w-5 h-5 text-white/50 group-hover:text-primary-400 transition-colors" />
                        </a>
                    ))}
                </div>
                <p className="text-sm font-mono text-white/40">
                    © {year} {site.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
