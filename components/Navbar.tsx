"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2A2E3A] bg-[#12141A]/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" onClick={closeMenu} className="group flex items-center gap-2.5 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]">
          <Logo size={28} />
          <span className="font-semibold text-base tracking-tight text-[#F2F0EA]">
            SnapLoad
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <nav aria-label="Primary" className="flex items-center">
            <Link href="/" className="inline-flex rounded px-2.5 py-2 text-xs font-medium text-[#8B90A0] transition-colors hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-[#C99A3D]">Home</Link>
            <Link href="/#platforms" className="rounded px-2.5 py-2 text-xs font-medium text-[#8B90A0] transition-colors hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-[#C99A3D]">Platforms</Link>
            <Link href="/about" className="rounded px-2.5 py-2 text-xs font-medium text-[#8B90A0] transition-colors hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-[#C99A3D]">About</Link>
          </nav>
          <a
          href={siteConfig.githubUrl}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="SnapLoad on GitHub"
          className="flex h-8 items-center gap-2 rounded-md border border-[#2A2E3A] bg-[#1B1E27] px-2.5 text-xs font-medium text-[#8B90A0] transition-colors hover:border-[#373C4B] hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
        >
          <Github size={15} />
          <span className="hidden md:inline">GitHub</span>
        </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2A2E3A] bg-[#1B1E27] text-[#8B90A0] transition-colors hover:border-[#373C4B] hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D] md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-auto mt-4 max-w-5xl border-t border-[#2A2E3A] pt-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            <MobileLink href="/" onClick={closeMenu}>Home</MobileLink>
            <MobileLink href="/#platforms" onClick={closeMenu}>Platforms</MobileLink>
            <MobileLink href="/about" onClick={closeMenu}>About</MobileLink>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex min-h-11 items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-[#8B90A0] transition-colors hover:bg-[#1B1E27] hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-[#C99A3D]"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex min-h-11 items-center rounded-md px-3 py-2.5 text-sm font-medium text-[#8B90A0] transition-colors hover:bg-[#1B1E27] hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-[#C99A3D]"
    >
      {children}
    </Link>
  );
}
