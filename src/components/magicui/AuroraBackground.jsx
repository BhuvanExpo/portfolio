import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-60"></div>

      {/* Aurora glow 1 */}
      <motion.div
        animate={{
          transform: [
            "translate(-50%, -50%) scale(1) rotate(0deg)",
            "translate(-45%, -45%) scale(1.2) rotate(10deg)",
            "translate(-55%, -50%) scale(1) rotate(-5deg)",
            "translate(-50%, -50%) scale(1) rotate(0deg)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[80vw] h-[80vw] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen transform-gpu"
      />

      {/* Aurora glow 2 */}
      <motion.div
        animate={{
          transform: [
            "translate(-50%, -50%) scale(1.2) rotate(0deg)",
            "translate(-55%, -40%) scale(1) rotate(-10deg)",
            "translate(-45%, -55%) scale(1.1) rotate(5deg)",
            "translate(-50%, -50%) scale(1.2) rotate(0deg)"
          ]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-2/3 left-3/4 w-[60vw] h-[60vw] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen transform-gpu"
      />

      {/* Aurora glow 3 */}
      <motion.div
        animate={{
          transform: [
            "translate(-50%, -50%) scale(1) rotate(0deg)",
            "translate(-60%, -60%) scale(1.3) rotate(15deg)",
            "translate(-40%, -40%) scale(0.9) rotate(-15deg)",
            "translate(-50%, -50%) scale(1) rotate(0deg)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 w-[70vw] h-[70vw] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen transform-gpu"
      />

      {/* Subtle overlay noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};

export default AuroraBackground;