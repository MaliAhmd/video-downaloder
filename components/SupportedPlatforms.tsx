"use client";

import React from "react";
import { Instagram, Music2, Facebook, Youtube } from "lucide-react";

const platforms = [
  {
    name: "YouTube",
    icon: Youtube,
    description: "Standard videos, Shorts, and audio tracks.",
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Reels, feed video posts, and stories.",
  },
  {
    name: "TikTok",
    icon: Music2,
    description: "Original resolution clips without watermarks.",
  },
  {
    name: "Facebook",
    icon: Facebook,
    description: "Public video posts and watch stream clips.",
  },
];

export function SupportedPlatforms() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto w-full">
      <div className="border-t border-[#2A2E3A] pt-12">
        <h2 className="text-xl font-semibold tracking-tight text-[#F2F0EA] mb-6">
          Supported platforms
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="bg-[#1B1E27] border border-[#2A2E3A] rounded-md p-4 transition-colors hover:border-[#373C4B]"
            >
              <div className="w-8 h-8 rounded border border-[#2A2E3A] bg-[#161821] flex items-center justify-center text-[#8B90A0] mb-3">
                <p.icon size={16} />
              </div>
              <h3 className="text-sm font-medium text-[#F2F0EA] mb-1">{p.name}</h3>
              <p className="text-xs text-[#8B90A0] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
