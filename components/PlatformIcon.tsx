import { Facebook, Instagram, Link2, Music2, Youtube } from "lucide-react";

interface PlatformIconProps {
  platform: string;
  size?: number;
  className?: string;
}

export function PlatformIcon({ platform, size = 16, className }: PlatformIconProps) {
  const iconProps = { size, className, "aria-hidden": true } as const;

  switch (platform.toLowerCase()) {
    case "youtube":
      return <Youtube {...iconProps} />;
    case "instagram":
      return <Instagram {...iconProps} />;
    case "tiktok":
      return <Music2 {...iconProps} />;
    case "facebook":
      return <Facebook {...iconProps} />;
    case "x":
    case "twitter":
      return <XMarkIcon size={size} className={className} />;
    default:
      return <Link2 {...iconProps} />;
  }
}

function XMarkIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
