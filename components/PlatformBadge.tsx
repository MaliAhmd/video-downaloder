"use client";

import React from "react";
// @ts-ignore
// @ts-ignore
import { Youtube, Instagram, Music2, Facebook, Link2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PlatformBadgeProps {
  platform: string;
  className?: string;
  animate?: boolean;
}

const PLATFORMS: Record<string, { name: string; icon: any; color: string }> = {
  youtube: { name: "YouTube", icon: Youtube, color: "bg-red-600" },
  instagram: { name: "Instagram", icon: Instagram, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
  tiktok: { name: "TikTok", icon: Music2, color: "bg-black border border-cyan-400" },
  facebook: { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
  unknown: { name: "Link", icon: Link2, color: "bg-gray-600" },
};

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform, className, animate = true }) => {
  const p = PLATFORMS[platform.toLowerCase()] || PLATFORMS.unknown;
  const Icon = p.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg transition-all duration-500",
        p.color,
        animate && "animate-in fade-in zoom-in slide-in-from-left-2",
        className
      )}
    >
      <Icon size={14} strokeWidth={2.5} />
      <span className="tracking-tight uppercase">{p.name}</span>
    </div>
  );
};
