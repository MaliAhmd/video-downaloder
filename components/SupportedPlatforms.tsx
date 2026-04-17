"use client";

import React from "react";
// @ts-ignore
import { Instagram, Music2, Facebook, Youtube } from "lucide-react";

const platforms = [
  {
    name: "YouTube",
    icon: Youtube,
    description: "Videos, Shorts, and Playlists in high quality.",
    color: "border-red-500",
    iconColor: "text-red-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Reels, Posts, and IGTV content with one click.",
    color: "border-pink-500",
    iconColor: "text-pink-500",
  },
  {
    name: "TikTok",
    icon: Music2,
    description: "Fast downloads for TikTok videos (watermark-free).",
    color: "border-cyan-400",
    iconColor: "text-cyan-400",
  },
  {
    name: "Facebook",
    icon: Facebook,
    description: "HD video downloads from posts and watch feeds.",
    color: "border-blue-500",
    iconColor: "text-blue-500",
  },
];

export function SupportedPlatforms() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto w-full">
      <h2 className="text-3xl font-display font-extrabold text-center mb-12">
        Works with your <span className="text-accent-primary">Favorite Platforms</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((p) => (
          <div
            key={p.name}
            className={`glass-card p-6 rounded-3xl border-t-4 ${p.color} transition-transform hover:-translate-y-1`}
          >
            <div className={`mb-4 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${p.iconColor}`}>
              <p.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
