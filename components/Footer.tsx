"use client";

import React from "react";
import { Github } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2E3A] mt-auto py-8 px-6 bg-[#12141A]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8B90A0]">
        <div className="flex items-center gap-2">
          <Logo size={20} />
          <span className="font-semibold text-sm text-[#F2F0EA]">SnapLoad</span>
        </div>

        <p>
          &copy; {new Date().getFullYear()} SnapLoad. Built by <a href="https://www.devaalley.me/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2F0EA] transition-colors font-medium">Muhammad Ali Ahmad</a>.
        </p>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/MaliAhmd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#F2F0EA] transition-colors"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
