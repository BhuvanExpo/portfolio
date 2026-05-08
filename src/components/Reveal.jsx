import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Reveal = ({ children, width = "fit-content", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
          delay: delay,
          type: "spring",
          stiffness: 70,
          damping: 20
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;