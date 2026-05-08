import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = useMemo(() => [
    {
      title: "NeX Library — Learn, Explore, Grow",
      description: "Building the next generation digital library experience — fast, minimal, and designed for students who want knowledge without limits..",
      tags: ["React", "Node.js", "AI"],
      link: "https://nexlibrary.vercel.app"
    },
    {
      title: "PowerFit Gym — Train Hard. Stay Strong",
      description: "Redefining fitness with modern training, smart workouts, and a community driven by growth and discipline..",
      tags: ["Next.js", "Firebase", "Tailwind"],
      link: "https://gym-fawn-five.vercel.app"
    },
    {
      title: "NextGen AI SaaS — Automate. Scale. Innovate.",
      description: "Empower your business with cutting-edge artificial intelligence designed for speed, scalability, and performance.",
      tags: ["TypeScript ", "MongoDB", "Framer"],
      link: "https://ai-saas-website-delta.vercel.app"
    },
    {
      title: "Nexa Restaurant — Modern Taste, Timeless Experience",
      description: "Experience exceptional dining with carefully crafted dishes, elegant ambiance, and unforgettable flavors designed for true food lovers.",
      tags: ["TypeScript ", "MongoDB", "Framer"],
      link: "https://resto-eta-two.vercel.app"
    }
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="websites" className="py-24 bg-transparent px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-4xl font-black text-white mb-12 tracking-tighter uppercase text-center"
        >
          Websites & Products
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              variants={cardVariants}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-[32px] border border-white/5 flex flex-col h-full relative group cursor-pointer bg-black/40 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 transform-gpu"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 bg-white/5 text-gray-500 rounded-full border border-white/10 group-hover:border-white/20 group-hover:text-gray-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;