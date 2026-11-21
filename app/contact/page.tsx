import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Copyright, ExternalLink, Github, Mail, MessageSquare } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Vidspry Support & Inquiries",
  description: "Get in touch with the Vidspry team for technical support, feedback, DMCA inquiries, or business questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact Vidspry"
      introduction="Have a question, feedback, or need help with a supported link? Reach out to us through our direct contact channels."
      path="/contact"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ContactCard
          icon={<Mail size={20} aria-hidden="true" />}
          title="Direct Email Support"
          description="Send an email to our support team for general inquiries, bug reports, and assistance."
          href="mailto:support@vidspry.site"
          label="support@vidspry.site"
          external
        />
        <ContactCard
          icon={<Github size={20} aria-hidden="true" />}
          title="Project & Developer Support"
          description="Report technical issues, track fixes, or inspect public repository updates on GitHub."
          href={siteConfig.githubUrl}
          label="Open GitHub Repository"
          external
        />
        <ContactCard
          icon={<MessageSquare size={20} aria-hidden="true" />}
          title="Developer Portfolio"
          description="Visit the creator's portfolio website for direct networking and developer info."
          href={siteConfig.authorUrl}
          label="Visit devaalley.me"
          external
        />
        <ContactCard
          icon={<Copyright size={20} aria-hidden="true" />}
          title="DMCA & Copyright"
          description="Review our DMCA policy or email our copyright compliance agent directly at dmca@vidspry.site."
          href="/copyright"
          label="View DMCA Policy"
        />
      </div>

      <section>
        <h2>Technical Support Guidelines</h2>
        <p>
          To help us resolve link processing issues quickly, please include:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-[#8B90A0]">
          <li>The platform (YouTube, Instagram, TikTok, Facebook, or X) and the exact public URL you attempted to download.</li>
          <li>The error message or symptom displayed (e.g., &quot;Stream extraction failed&quot; or timeout).</li>
          <li>Your operating system (Android, iOS, Windows, macOS) and browser name (Chrome, Safari, Firefox).</li>
        </ul>
        <p className="mt-3 text-xs text-[#8B90A0]">
          <em>Note: Never send passwords, private account credentials, payment information, or confidential media.</em>
        </p>
      </section>
    </InfoPage>
  );
}

function ContactCard({
  icon,
  title,
  description,
  href,
  label,
  external = false,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[#373C4B] bg-[#161821] text-[#C99A3D]">
        {icon}
      </span>
      <span>
        <span className="block text-base font-semibold text-[#F2F0EA]">{title}</span>
        <span className="mt-2 block text-sm leading-6 text-[#8B90A0]">{description}</span>
      </span>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[#C99A3D]">
        {label}
        {external && <ExternalLink size={14} aria-hidden="true" />}
      </span>
    </>
  );

  const className = "flex min-h-56 flex-col gap-4 rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-5 no-underline transition-colors hover:border-[#C99A3D]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D] sm:p-6";

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>;
  }

  return <Link href={href} className={className}>{content}</Link>;
}
