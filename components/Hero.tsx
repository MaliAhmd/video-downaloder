"use client";

import React from "react";
// @ts-ignore
import { Youtube, Instagram, Music2, Facebook } from "lucide-react";

export function Hero() {
  return (
    <div className="pt-24 md:pt-32 pb-16 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-[10px] md:text-xs font-medium text-accent-primary mb-6 md:mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
        </span>
        New: High Quality 4K Support Added
      </div>
      
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        Download Anything. <br />
        <span className="text-accent-primary italic text-glow">Instantly.</span>
      </h1>
      
      <p className="text-xl text-text-muted max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
        Paste a link from YouTube, Instagram, TikTok or Facebook — we handle the rest with premium speed and quality.
      </p>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-16 duration-700">
        {[
          { name: "YouTube", icon: Youtube },
          { name: "Instagram", icon: Instagram },
          { name: "TikTok", icon: Music2 },
          { name: "Facebook", icon: Facebook },
        ].map((p) => (
          <div key={p.name} className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-text-muted group-hover:text-accent-primary group-hover:border-accent-primary transition-all duration-300">
              <p.icon size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60 group-hover:text-text-primary transition-colors">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
