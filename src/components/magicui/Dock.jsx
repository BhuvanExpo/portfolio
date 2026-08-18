
import { motion } from 'framer-motion';

export const Dock = ({ children }) => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div 
        layout
        initial={{ width: 180, height: 48, borderRadius: 24 }}
        whileHover={{ width: "auto", height: 60, padding: "0 20px" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-black/95 backdrop-blur-3xl border border-white/10 flex items-center justify-center gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="flex items-center gap-4 px-4 whitespace-nowrap">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const DockIcon = ({ children }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.2, y: -2 }}
      className="flex items-center justify-center text-gray-500 hover:text-white transition-all cursor-pointer"
    >
      {children}
    </motion.div>
  );
};