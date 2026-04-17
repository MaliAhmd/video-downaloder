"use client";

import React from "react";
import { Github, Briefcase, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto py-12 px-6 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent-primary flex items-center justify-center text-black">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight">SnapLoad</span>
        </div>

        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} SnapLoad. Built with Next.js & yt-dlp.
        </p>

        <div className="flex items-center gap-6 text-text-muted">
          <a 
            href="https://www.devaalley.me/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent-primary transition-colors"
          >
            <Briefcase size={20} />
          </a>
          <a 
            href="https://github.com/MaliAhmd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent-primary transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
