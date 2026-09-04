"use client";

import React from "react";
import { Youtube, Instagram, Music2, Facebook, Link2 } from "lucide-react";

interface PlatformBadgeProps {
  platform: string;
  className?: string;
  animate?: boolean;
}

const PLATFORMS: Record<string, { name: string; icon: any }> = {
  youtube: { name: "YouTube", icon: Youtube },
  instagram: { name: "Instagram", icon: Instagram },
  tiktok: { name: "TikTok", icon: Music2 },
  facebook: { name: "Facebook", icon: Facebook },
  unknown: { name: "URL", icon: Link2 },
};

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform, className }) => {
  const p = PLATFORMS[platform.toLowerCase()] || PLATFORMS.unknown;
  const Icon = p.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#2A2E3A] bg-[#161821] text-xs font-normal text-[#8B90A0] ${className || ""}`}
    >
      <Icon size={13} className="text-[#8B90A0]" />
      <span>{p.name}</span>
    </div>
  );
};
