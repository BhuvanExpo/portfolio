import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-black text-white tracking-tighter uppercase">Bhuvan G M</span>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Building in public since 2024</p>
        </div>

        <p className="text-[10px] text-gray-700 font-mono">
          © {new Date().getFullYear()} — BHUVAN
        </p>
      </div>
    </footer>
  );
};

export default Footer;