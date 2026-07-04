"use client";

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Scene from '@/components/Scene';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 3D Canvas Background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <section className="h-screen flex flex-col justify-center items-center px-4 pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          className="text-5xl md:text-8xl font-black text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
        >
          THE FUTURE OF WEB
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-xl text-gray-300 max-w-2xl text-center font-light"
        >
          Immersive 3D experiences integrated seamlessly with cutting-edge UI/UX design.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(112,0,255,0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 rounded-full bg-secondary text-white font-bold tracking-widest uppercase overflow-hidden relative group border border-purple-500"
        >
          <span className="relative z-10">Explore Universe</span>
          <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0"></div>
        </motion.button>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 bg-background/80 backdrop-blur-md">
        <AnimatedSection className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Limitless <span className="text-primary">Potential</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                By utilizing React Three Fiber and Framer Motion, we break the boundaries of traditional web design. Scroll to uncover physics-based animations, particle systems, and high-fidelity 3D assets rendering in real-time.
              </p>
            </div>
            <div className="h-[400px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center p-8">
               {/* Placeholder for secondary 3D element or diagram */}
               <div className="w-full h-full border border-dashed border-primary/30 rounded-xl flex items-center justify-center text-primary/50">
                 Interactive Module Area
               </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-10">
              Production <span className="text-secondary">Ready</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ y: -10, borderColor: 'rgba(0,240,255,0.5)' }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors"
                >
                  <h3 className="text-2xl font-bold mb-2 text-white">Feature 0{item}</h3>
                  <p className="text-gray-400 text-sm">Optimized rendering loop and bundle size for maximum performance.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
