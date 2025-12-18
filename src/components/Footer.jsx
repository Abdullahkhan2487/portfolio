import React from 'react';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark-900 border-t border-white/5 mt-20">
            <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col items-center text-center">
                <div className="font-bold text-2xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-6">
                    Abdullah K.{' '}
                </div>
                <div className="flex gap-6 mb-8">
                    <a
                        href="https://github.com/Abdullahkhan2487"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary-500/20 transition"
                        aria-label="GitHub"
                    >
                        <i data-feather="github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mabdullahknuces/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary-500/20 transition"
                        aria-label="LinkedIn"
                    >
                        <i data-feather="linkedin" />
                    </a>
                    <a
                        href="mailto:m.abdullahknuces@gmail.com"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary-500/20 transition"
                        aria-label="Email"
                    >
                        <i data-feather="mail" />
                    </a>
                </div>
                <p className="text-sm text-white/60">© {year} Abdullah Khan. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
