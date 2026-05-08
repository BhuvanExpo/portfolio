import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from './magicui/ShimmerButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  const words = useMemo(() => ["Startup Founder", "Web Developer", "BTech Student", "Innovator"], []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden px-4 md:px-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none transform-gpu"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 50, damping: 20 }}
        className="z-10 w-full flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-500 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 font-medium"
        >
          Building the future in public
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tightest text-white mb-10 leading-[0.8] w-full break-words transform-gpu"
        >
          BHUVAN G M
        </motion.h1>

        <div className="h-12 mb-20 flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-xl md:text-3xl text-gray-400 font-light tracking-wide italic transform-gpu"
            >
              {words[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* side-by-side equal distance buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-row gap-6 md:gap-12 items-center justify-center w-full px-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 max-w-[220px]">
            <Link to="/journey" className="block w-full">
              <ShimmerButton className="w-full shadow-2xl">
                Explore Journey
              </ShimmerButton>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 max-w-[220px]">
            <Link to="/websites" className="block w-full">
              <ShimmerButton className="w-full shadow-2xl">
                View Projects
              </ShimmerButton>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-gray-700 uppercase tracking-[0.3em]">Scroll to explore</span>
        <motion.div
          animate={{ height: ["0rem", "4rem", "0rem"], opacity: [0, 1, 0], y: [0, 20, 40] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-gray-500 to-transparent transform-gpu"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;