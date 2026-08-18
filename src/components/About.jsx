
import { motion } from 'framer-motion';

const roles = [
  { label: "UI/UX Designer" },
  { label: "Web Developer" },
  { label: "Open Source" },
  { label: "Freelancer" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-black px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 20 }}
          className="w-full md:w-[280px] shrink-0"
        >
          {/* Photo card */}
          <div className="aspect-square glass-card rounded-[40px] border border-white/5 overflow-hidden relative group shadow-2xl transform-gpu mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src="/profile.jpg"
              alt="Bhuvan G M"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <p className="text-[10px] text-white uppercase tracking-widest font-bold">Product first. Always.</p>
            </div>
          </div>

          {/* Role tags */}
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role.label}
                className="text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 bg-white/5 text-gray-400 rounded-full border border-white/10"
              >
                {role.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50, damping: 20 }}
          className="flex-1 pt-2"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[10px] text-gray-600 uppercase tracking-[0.4em] mb-4 block"
          >
            About me
          </motion.span>

          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
            The Vision
          </h2>

          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p className="text-lg font-medium text-gray-300">
              I&apos;m <span className="text-white font-bold">Bhuvan G M</span> — a 3rd year{' '}
              <span className="text-white">BTech Internet of Things</span> student who thinks in
              products before code. I see the big picture first, then engineer the solution around it.
            </p>

            <p>
              My work spans <span className="text-white">UI/UX design</span>,{' '}
              <span className="text-white">full-stack web development</span>, and{' '}
              <span className="text-white">open source contribution</span> — with a focus on building
              things that feel fast, intentional, and polished. I&apos;m also an active freelancer,
              helping early-stage teams ship their digital products from idea to production.
            </p>

            <p>
              I&apos;m the founder of{' '}
              <span className="text-white font-semibold">Jeeviksha</span> — a SaaS product I&apos;m
              building to solve a real problem I encountered firsthand. Every decision is driven by
              one question: does this genuinely make someone&apos;s life easier?
            </p>

            <p>
              I believe the best builders are the ones who care as much about{' '}
              <span className="text-white">why</span> they&apos;re building as{' '}
              <span className="text-white">what</span> they&apos;re building. That&apos;s the lens
              through which I approach every project — whether it&apos;s a client site, an open
              source PR, or a late-night product experiment.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 pt-8 border-t border-white/5">
            <motion.div whileHover={{ scale: 1.1, y: -4 }} className="transform-gpu transition-transform cursor-default">
              <p className="text-2xl font-black text-white">06+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">Websites Shipped</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -4 }} className="transform-gpu transition-transform cursor-default">
              <p className="text-2xl font-black text-white">01</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">SaaS in Progress</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -4 }} className="transform-gpu transition-transform cursor-default">
              <p className="text-2xl font-black text-white">3rd</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">Year · BTech IoT</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
