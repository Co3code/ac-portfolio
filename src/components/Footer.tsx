import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-2xl font-display font-bold text-gradient mb-2">ANTHONY.</p>
          <p className="text-sm text-zinc-500">© 2026 Anthony Countian. Student Portfolio.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="mailto:hello@aura.dev" className="hover:text-white transition-colors">hello@aura.dev</a>
        </div>
      </div>
    </footer>
  );
};
