import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CircleAlert } from "lucide-react";
import { platforms } from "@/lib/platforms";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mx-auto flex max-w-lg flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2A2E3A] bg-[#1B1E27] text-[#C99A3D]">
          <CircleAlert size={28} aria-hidden="true" />
        </div>

        <span className="mt-6 font-mono text-xs uppercase tracking-widest text-[#C99A3D]">
          404 Error
        </span>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#F2F0EA] sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm leading-6 text-[#8B90A0]">
          The link you followed may be broken or the page may have been moved. Return to the homepage to download videos or choose one of the supported platforms below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#C99A3D] px-5 py-2.5 text-sm font-semibold text-[#12141A] transition hover:bg-[#D9A74A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-[#2A2E3A] bg-[#1B1E27] px-5 py-2.5 text-sm font-medium text-[#F2F0EA] transition hover:border-[#C99A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
          >
            Report an Issue
          </Link>
        </div>

        <div className="mt-12 w-full border-t border-[#2A2E3A] pt-8 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8B90A0]">
            Supported Downloaders
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {platforms.map((platform) => (
              <Link
                key={platform.key}
                href={`/${platform.slug}`}
                className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-3 text-xs font-medium text-[#F2F0EA] transition hover:border-[#C99A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
              >
                {platform.name} Downloader
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
