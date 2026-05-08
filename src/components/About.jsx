import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 20 }}
          className="w-full md:w-1/3 aspect-square glass-card rounded-[40px] border border-white/5 overflow-hidden relative group shadow-2xl transform-gpu"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

          {/* The Profile Image */}
          <img
            src="/profile.jpg"
            alt="Bhuvan G M"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            loading="lazy"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <p className="text-[10px] text-white uppercase tracking-widest font-bold">Innovation first</p>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50, damping: 20 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">The Vision</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6 font-medium">
            I am a <span className="text-white">BTech student</span> by education, but a <span className="text-white">Founder</span> by passion. My work lives at the intersection of complex engineering and clean design.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Currently building and shipping digital products while documenting the entire journey in public. I believe in the power of transparency and building tools that solve real problems for the next generation of founders.
          </p>

          <div className="flex gap-8">
            <motion.div whileHover={{ scale: 1.1, y: -5 }} className="transform-gpu transition-transform cursor-default">
              <p className="text-2xl font-black text-white">03+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Websites Shipped</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -5 }} className="transform-gpu transition-transform cursor-default">
              <p className="text-2xl font-black text-white">05+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Hackathon Wins</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -5 }} className="transform-gpu transition-transform cursor-default">
              <p className="text-2xl font-black text-white">60+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Days Publicly Building</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;