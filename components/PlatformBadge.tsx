"use client";

import { PlatformIcon } from "./PlatformIcon";

interface PlatformBadgeProps {
  platform: string;
  className?: string;
  animate?: boolean;
}

const PLATFORMS: Record<string, { name: string; iconKey: string }> = {
  youtube: { name: "YouTube", iconKey: "youtube" },
  instagram: { name: "Instagram", iconKey: "instagram" },
  tiktok: { name: "TikTok", iconKey: "tiktok" },
  facebook: { name: "Facebook", iconKey: "facebook" },
  twitter: { name: "X", iconKey: "x" },
  x: { name: "X", iconKey: "x" },
  unknown: { name: "URL", iconKey: "unknown" },
};

export function PlatformBadge({ platform, className }: PlatformBadgeProps) {
  const p = PLATFORMS[platform.toLowerCase()] || PLATFORMS.unknown;
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#2A2E3A] bg-[#161821] text-xs font-normal text-[#8B90A0] ${className || ""}`}
    >
      <PlatformIcon platform={p.iconKey} size={13} className="text-[#8B90A0]" />
      <span>{p.name}</span>
    </div>
  );
}
