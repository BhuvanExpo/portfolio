import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">

        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-white/5 rounded-[100%] blur-[100px] pointer-events-none transform-gpu z-0"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
          className="relative z-10 mb-12 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <Mail size={32} className="text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase"
        >
          Let's Collaborate.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          I'm currently open to new startup projects, partnerships, or just a coffee chat about the future of tech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="mailto:bhuvanexpo@gmail.com"
            className="inline-flex items-center gap-4 px-12 py-5 bg-white text-black text-sm font-black rounded-full uppercase tracking-tighter hover:bg-gray-200 transition-colors transform-gpu"
          >
            Drop an Email <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;