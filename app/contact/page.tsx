import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Copyright, ExternalLink, Github, MessageSquare } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Vidspry",
  description: "Contact information and project links for Vidspry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact Vidspry"
      introduction="Questions, feedback, or a problem with a supported link? Choose the contact route that best matches what you need."
      path="/contact"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ContactCard
          icon={<Github size={20} aria-hidden="true" />}
          title="Project support"
          description="Report a technical problem, request a feature, or review the public project activity on GitHub."
          href={siteConfig.githubUrl}
          label="Open GitHub"
          external
        />
        <ContactCard
          icon={<MessageSquare size={20} aria-hidden="true" />}
          title="General inquiries"
          description="Use the developer website for available professional and general contact options."
          href={siteConfig.authorUrl}
          label="Visit developer website"
          external
        />
        <ContactCard
          icon={<Copyright size={20} aria-hidden="true" />}
          title="Copyright questions"
          description="Review the copyright guidance and the information required for a rights-related request."
          href="/copyright"
          label="Read copyright guidance"
        />
      </div>

      <section>
        <h2>Before You Contact Us</h2>
        <p>For faster help, include the source platform, the type of URL you used, the error message you saw, and your browser or device. Do not send passwords, login cookies, private media links, payment information, or other sensitive data.</p>
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
