import Link from "next/link";
import { platforms } from "@/lib/platforms";
import { PlatformIcon } from "./PlatformIcon";

export function SupportedPlatforms() {
  return (
    <section id="platforms" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14">
      <div className="border-t border-[#2A2E3A] pt-12">
        <h2 className="text-xl font-semibold tracking-tight text-[#F2F0EA] mb-6">
          Supported platforms
        </h2>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {platforms.map((p) => (
            <Link
              key={p.key}
              href={`/${p.slug}`}
              className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-4 transition-colors hover:border-[#C99A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
            >
              <div className="w-8 h-8 rounded border border-[#2A2E3A] bg-[#161821] flex items-center justify-center text-[#8B90A0] mb-3">
                <PlatformIcon platform={p.key} size={16} />
              </div>
              <h3 className="text-sm font-medium text-[#F2F0EA] mb-1">{p.name}</h3>
              <p className="text-xs text-[#8B90A0] leading-relaxed">{p.cardDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
