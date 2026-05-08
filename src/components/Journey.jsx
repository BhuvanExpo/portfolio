import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const milestones = useMemo(() => [
    { day: "Day 01", title: "The Spark", description: "Identified a gap in the market and started brainstorming the MVP.", status: "completed" },
    { day: "Day 15", title: "First Prototype", description: "Built a basic landing page and validated the idea with 100+ users.", status: "completed" },
    { day: "Day 30", title: "Beta Launch", description: "Released the beta version to early adopters and collected feedback.", status: "current" },
    { day: "Day 60", title: "Scaling Up", description: "Optimizing performance and preparing for a public launch.", status: "upcoming" }
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  return (
    <section id="journey" className="py-24 bg-transparent px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-black text-white mb-16 tracking-tighter uppercase text-center"
        >
          Startup Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"
          ></motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className={`absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.8)]
                    ${item.status === 'current' ? 'bg-blue-400 shadow-blue-500/50' : 'bg-white'}`}
                ></motion.div>

                {/* Content Block */}
                <div className={`ml-10 md:ml-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 text-right'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors backdrop-blur-md bg-black/40 shadow-xl transform-gpu"
                  >
                    <span className={`text-xs font-mono mb-2 block ${item.status === 'current' ? 'text-blue-400' : 'text-gray-500'}`}>
                      {item.day}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;