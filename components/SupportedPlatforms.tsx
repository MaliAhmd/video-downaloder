import Link from "next/link";
import { Instagram, Music2, Facebook, Youtube } from "lucide-react";

const platforms = [
  {
    name: "YouTube",
    href: "/youtube-video-downloader",
    icon: Youtube,
    description: "Standard videos, Shorts, and audio tracks.",
  },
  {
    name: "Instagram",
    href: "/instagram-video-downloader",
    icon: Instagram,
    description: "Reels, feed video posts, and stories.",
  },
  {
    name: "TikTok",
    href: "/tiktok-video-downloader",
    icon: Music2,
    description: "Original resolution clips without watermarks.",
  },
  {
    name: "Facebook",
    href: "/facebook-video-downloader",
    icon: Facebook,
    description: "Public video posts and watch stream clips.",
  },
];

export function SupportedPlatforms() {
  return (
    <section id="platforms" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14">
      <div className="border-t border-[#2A2E3A] pt-12">
        <h2 className="text-xl font-semibold tracking-tight text-[#F2F0EA] mb-6">
          Supported platforms
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-4 transition-colors hover:border-[#C99A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
            >
              <div className="w-8 h-8 rounded border border-[#2A2E3A] bg-[#161821] flex items-center justify-center text-[#8B90A0] mb-3">
                <p.icon size={16} />
              </div>
              <h3 className="text-sm font-medium text-[#F2F0EA] mb-1">{p.name}</h3>
              <p className="text-xs text-[#8B90A0] leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
