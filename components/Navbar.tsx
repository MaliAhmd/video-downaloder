"use client";

import React from "react";
import { Github } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="w-full border-b border-[#2A2E3A] bg-[#12141A] px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2.5 group">
          <Logo size={28} />
          <span className="font-semibold text-base tracking-tight text-[#F2F0EA]">
            SnapLoad
          </span>
        </a>

        <a 
          href="https://github.com/MaliAhmd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-8 px-3 rounded-md border border-[#2A2E3A] bg-[#1B1E27] hover:border-[#373C4B] hover:text-[#F2F0EA] text-[#8B90A0] transition-colors flex items-center gap-2 text-xs font-medium"
        >
          <Github size={15} />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
}
