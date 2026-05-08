import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const GridBackground = () => {
  const horizontalLines = useMemo(() => Array.from({ length: 20 }), []);
  const verticalLines = useMemo(() => Array.from({ length: 20 }), []);
  const particles = useMemo(() => Array.from({ length: 30 }), []);

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none perspective-1000">
      {/* Dark vignette gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_80%)] z-10"></div>

      {/* Grid container with 3D rotation */}
      <div className="absolute inset-[-50%] w-[200%] h-[200%] transform-gpu rotate-x-[60deg] translate-y-[20%] z-0">
        <motion.div
          animate={{ y: [0, 50] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {/* Horizontal Lines */}
          {horizontalLines.map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-blue-500/10"
              style={{ top: `${(i / horizontalLines.length) * 100}%` }}
            />
          ))}

          {/* Vertical Lines */}
          {verticalLines.map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-blue-500/10"
              style={{ left: `${(i / verticalLines.length) * 100}%` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {particles.map((_, i) => (
          <motion.div
            key={`p-${i}`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] transform-gpu"
          />
        ))}
      </div>

      {/* Top light source */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-500/10 blur-[100px] z-10 rounded-full"></div>
    </div>
  );
};

export default GridBackground;