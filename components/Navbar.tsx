"use client";

import React from "react";
import { Zap, Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-bg-primary/30 border border-white/5 rounded-2xl px-4 md:px-6 py-2 md:py-3">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-accent-primary flex items-center justify-center text-black group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(110,231,183,0.4)]">
            <Zap size={18} className="md:w-5 md:h-5" fill="currentColor" />
          </div>
          <span className="font-display font-extrabold text-xl md:text-2xl tracking-tighter">
            Snap<span className="text-accent-primary">Load</span>
          </span>
        </div>

        <a 
          href="https://github.com/MaliAhmd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-xl glass-card hover:bg-white/10 transition-colors text-text-muted hover:text-text-primary"
        >
          <Github size={22} />
        </a>
      </div>
    </nav>
  );
}
