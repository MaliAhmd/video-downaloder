"use client";

import React from "react";

export function Hero() {
  return (
    <section className="pt-16 pb-8 px-6 text-center max-w-3xl mx-auto flex flex-col items-center animate-in fade-in duration-500">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#F2F0EA] leading-[1.08] mb-4">
        Download video and audio from any link.
      </h1>
      
      <p className="text-base sm:text-lg text-[#8B90A0] max-w-xl leading-relaxed">
        Paste a URL from YouTube, Instagram, TikTok, or Facebook for direct high-resolution files.
      </p>
    </section>
  );
}
