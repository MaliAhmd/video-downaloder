import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { platforms } from "@/lib/platforms";
import { SectionHeading } from "./SectionHeading";

export function PlatformDownloaders() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-14" aria-labelledby="platform-downloaders">
      <SectionHeading
        title="Download From Your Favorite Platforms"
        description="Open a focused guide for the platform you are using, with relevant steps and troubleshooting."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {platforms.map((platform) => (
          <article key={platform.key} className="flex flex-col rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-5">
            <h3 className="text-base font-semibold text-[#F2F0EA]">{platform.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-[#8B90A0]">{platform.cardDescription}</p>
            <Link
              href={`/${platform.slug}`}
              className="mt-5 inline-flex w-fit items-center gap-2 rounded border border-[#2A2E3A] bg-[#161821] px-3 py-2 text-xs font-medium text-[#F2F0EA] transition-colors hover:border-[#C99A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
            >
              Open {platform.name} downloader
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
