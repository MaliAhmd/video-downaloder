import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 28, className = "" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      className={`shrink-0 ${className}`}
    >
      {/* Background Tile */}
      <rect
        width="64"
        height="64"
        rx="14"
        fill="#1B1E27"
        stroke="#2A2E3A"
        strokeWidth="2.5"
      />

      {/* Snap Reticle Corners (Capture) */}
      <path
        d="M18 26 V18 H26"
        stroke="#8B90A0"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 26 V18 H38"
        stroke="#8B90A0"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 38 V46 H26"
        stroke="#8B90A0"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 38 V46 H38"
        stroke="#8B90A0"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Download Arrow (Load) */}
      <path
        d="M32 19 V38"
        stroke="#F2F0EA"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M23 31 L32 40 L41 31"
        stroke="#C99A3D"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
