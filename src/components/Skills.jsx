import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = useMemo(() => [
    { category: "Frontend", tools: ["React", "Next.js", "Tailwind", "Framer Motion", "TypeScript"] },
    { category: "Backend", tools: ["Node.js", "Express", "Firebase", "MongoDB", "PostgreSQL"] },
    { category: "Startup", tools: ["Product Strategy", "UI/UX Design", "Growth Hacking", "Public Speaking"] }
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-16 tracking-tighter uppercase">Technical Arsenal</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="space-y-8"
            >
              <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">{skill.category}</h3>

              <div className="flex flex-wrap gap-3">
                {skill.tools.map((tool, j) => (
                  <motion.div
                    key={j}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,1)",
                      color: "#000",
                      transition: { duration: 0.2 }
                    }}
                    className="px-4 py-2 border border-white/10 text-white rounded-lg text-sm font-medium transition-colors cursor-default transform-gpu"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;