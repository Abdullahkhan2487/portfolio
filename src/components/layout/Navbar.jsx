import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '../../config/site.js';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#tech-stack', label: 'Stack' },
    { href: '#projects', label: 'Work' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
            }`}
        >
            <nav className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
                <a
                    href="#"
                    className="font-display font-bold text-xl md:text-2xl bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
                >
                    {site.shortName}
                </a>

                <div className="hidden md:flex gap-8">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="relative text-white/60 hover:text-white font-mono text-sm tracking-wide transition-colors group"
                        >
                            {label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden text-white/80 hover:text-white p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {menuOpen && (
                <div className="md:hidden glass-strong mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={handleLinkClick}
                            className="text-white/70 hover:text-white font-mono text-lg py-2 border-b border-white/5 last:border-0 transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
