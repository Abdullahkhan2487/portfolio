/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                },
                secondary: {
                    400: '#6ee7b7',
                    500: '#34d399',
                    600: '#10b981',
                },
                dark: {
                    950: '#050508',
                    900: '#0a0a12',
                    800: '#12121c',
                    700: '#1e1e2e',
                    600: '#2a2a3d',
                },
            },
            fontFamily: {
                display: ['Syne', 'sans-serif'],
                sans: ['Instrument Sans', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'grid-primary': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(139 92 246 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            },
            animation: {
                shimmer: 'shimmer 2s infinite',
                'border-spin': 'border-spin 4s linear infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                'border-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
};
