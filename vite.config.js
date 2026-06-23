import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    three: ['three', '@react-three/fiber', '@react-three/drei'],
                    gsap: ['gsap', '@gsap/react'],
                },
            },
        },
    },
});
