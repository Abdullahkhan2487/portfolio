import React from 'react';

function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-900/80 border-b border-white/5">
            <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
                <a
                    href="#"
                    className="font-bold text-2xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
                >
                    Abdullah K.
                </a>
                <div className="hidden md:flex gap-8">
                    <a href="#about" className="relative text-white/80 hover:text-white font-medium">
                        About
                    </a>
                    <a href="#projects" className="relative text-white/80 hover:text-white font-medium">
                        Work
                    </a>
                    <a href="#contact" className="relative text-white/80 hover:text-white font-medium">
                        Contact
                    </a>
                </div>
                <button className="md:hidden text-white" aria-label="Open navigation">
                    <i data-feather="menu" />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
