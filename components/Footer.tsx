import Link from "next/link";
import { Github } from "lucide-react";
import { Logo } from "./Logo";
import { platforms } from "@/lib/platforms";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#2A2E3A] bg-[#12141A] px-6 py-10">
      <div className="mx-auto grid max-w-5xl gap-8 text-xs text-[#8B90A0] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]">
            <Logo size={22} />
            <span className="text-sm font-semibold text-[#F2F0EA]">Vidspry</span>
          </Link>
          <p className="mt-3 max-w-xs leading-5">An online video and audio downloader for supported public media links.</p>
        </div>
        <FooterLinks title="Platforms" links={platforms.map((platform) => ({ label: `${platform.name} Downloader`, href: `/${platform.slug}` }))} />
        <FooterLinks title="Information" links={[{ label: "About Us", href: "/about" }, { label: "Contact Us", href: "/contact" }]} />
        <FooterLinks title="Legal" links={[{ label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms of Service", href: "/terms" }, { label: "Copyright / DMCA", href: "/copyright" }, { label: "Disclaimer", href: "/disclaimer" }]} />
      </div>
      <div className="mx-auto mt-9 flex max-w-5xl flex-col gap-3 border-t border-[#2A2E3A] pt-6 text-xs text-[#8B90A0] sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Vidspry. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={siteConfig.authorUrl} target="_blank" rel="noopener noreferrer" className="rounded transition-colors hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]">Built by Muhammad Ali Ahmad</a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Vidspry on GitHub" className="rounded transition-colors hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]">
            <Github size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#F2F0EA]">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="rounded transition-colors hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]">{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
