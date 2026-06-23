import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import LiquidBlob from './LiquidBlob.jsx';

function StaticFallback() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-950/30 blur-[120px]" />
            <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-slate-900/40 blur-[100px]" />
        </div>
    );
}

function Scene({ scrollProgress }) {
    return (
        <>
            <ambientLight intensity={0.08} />
            <pointLight position={[8, 6, 8]} intensity={0.15} color="#1a1528" />
            <pointLight position={[-6, -4, 4]} intensity={0.1} color="#0f1219" />
            <LiquidBlob scrollProgress={scrollProgress} />
            <Environment preset="night" environmentIntensity={0.15} />
        </>
    );
}

export default function HeroScene({ scrollProgress = 0 }) {
    const [reducedMotion, setReducedMotion] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(motionQuery.matches);
        setIsMobile(window.innerWidth < 768);

        const onMotionChange = (e) => setReducedMotion(e.matches);
        motionQuery.addEventListener('change', onMotionChange);
        return () => motionQuery.removeEventListener('change', onMotionChange);
    }, []);

    if (reducedMotion) return <StaticFallback />;

    return (
        <div className="absolute inset-0 pointer-events-none">
            <Suspense fallback={<StaticFallback />}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    dpr={isMobile ? [1, 1.5] : [1, 2]}
                    gl={{ antialias: true, alpha: true }}
                    style={{ background: 'transparent' }}
                >
                    <Scene scrollProgress={scrollProgress} />
                </Canvas>
            </Suspense>
        </div>
    );
}
