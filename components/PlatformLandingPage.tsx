import Link from "next/link";
import { Check, CircleHelp, Wrench } from "lucide-react";
import type { PlatformConfig } from "@/lib/platforms";
import { platforms } from "@/lib/platforms";
import { absoluteUrl } from "@/lib/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { Downloader } from "./Downloader";
import { FAQ } from "./FAQ";
import { JsonLd } from "./JsonLd";
import { ResponsibleUse } from "./ResponsibleUse";
import { SectionHeading } from "./SectionHeading";

interface PlatformLandingPageProps {
  platform: PlatformConfig;
}

export function PlatformLandingPage({ platform }: PlatformLandingPageProps) {
  const path = `/${platform.slug}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: platform.title, item: absoluteUrl(path) },
    ],
  };
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: `${platform.title} Online`,
        description: platform.description,
        inLanguage: "en",
        isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(path)}#faq`,
        mainEntity: platform.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main className="flex-1">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={pageJsonLd} />
      <section className="mx-auto w-full max-w-5xl px-6 pb-4 pt-10 sm:pt-14">
        <Breadcrumbs current={platform.title} />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#F2F0EA] sm:text-5xl">{platform.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#8B90A0]">{platform.introduction}</p>
        </div>
      </section>

      <Downloader ariaLabel={`${platform.name} downloader`} />

      <section className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-14 lg:grid-cols-2">
        <div>
          <SectionHeading title={`How to Download from ${platform.name}`} />
          <ol className="space-y-3">
            {platform.instructions.map((instruction, index) => (
              <li key={instruction} className="flex gap-3 rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-4 text-sm leading-6 text-[#8B90A0]">
                <span className="font-mono text-xs text-[#C99A3D]">0{index + 1}</span>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionHeading title="Supported Content" />
          <ul className="space-y-3 rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-5">
            {platform.supportedContent.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#8B90A0]">
                <Check size={15} className="mt-1 shrink-0 text-[#C99A3D]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[#2A2E3A] bg-[#161821]">
        <div className="mx-auto w-full max-w-5xl px-6 py-14">
          <SectionHeading title={`${platform.name} Troubleshooting`} description="If a link does not generate options, these checks resolve the most common source-specific issues." />
          <div className="grid gap-4 md:grid-cols-2">
            {platform.troubleshooting.map((item) => (
              <article key={item.title} className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-5">
                <Wrench size={17} className="mb-3 text-[#C99A3D]" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-[#F2F0EA]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#8B90A0]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-14">
        <FAQ items={platform.faqs} title={`${platform.name} Downloader FAQ`} compact />
      </div>

      <section className="mx-auto w-full max-w-5xl px-6 py-14" aria-labelledby="other-platforms">
        <div className="mb-6 flex items-center gap-2">
          <CircleHelp size={18} className="text-[#C99A3D]" aria-hidden="true" />
          <h2 id="other-platforms" className="text-xl font-semibold text-[#F2F0EA]">Other Supported Platforms</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {platforms.filter((item) => item.key !== platform.key).map((item) => (
            <Link key={item.key} href={`/${item.slug}`} className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-4 text-sm font-medium text-[#F2F0EA] transition-colors hover:border-[#C99A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]">
              {item.name} Downloader
            </Link>
          ))}
        </div>
      </section>
      <ResponsibleUse />
    </main>
  );
}
