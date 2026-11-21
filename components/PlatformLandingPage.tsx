import Link from "next/link";
import { Check, CircleHelp, Download, FileVideo, Monitor, Music, ShieldCheck, Smartphone, Wrench, Zap } from "lucide-react";
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
        "@type": "SoftwareApplication",
        "@id": `${absoluteUrl(path)}#application`,
        name: `Vidspry ${platform.name} Downloader`,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires modern web browser",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "HowTo",
        "@id": `${absoluteUrl(path)}#howto`,
        name: `How to Download Videos from ${platform.name}`,
        description: `Step-by-step instructions to download media from ${platform.name} using Vidspry.`,
        step: platform.instructions.map((stepText, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: `Step ${idx + 1}`,
          text: stepText,
        })),
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

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-4 pt-10 sm:pt-14">
        <Breadcrumbs current={platform.title} />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#F2F0EA] sm:text-5xl">{platform.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#8B90A0]">{platform.introduction}</p>
        </div>
      </section>

      {/* Downloader Input Box */}
      <Downloader ariaLabel={`${platform.name} downloader`} />

      {/* Features Grid */}
      {platform.features && platform.features.length > 0 && (
        <section className="border-b border-[#2A2E3A]">
          <div className="mx-auto w-full max-w-5xl px-6 py-14">
            <SectionHeading
              title={`Why Choose Vidspry for ${platform.name}`}
              description={`Designed for speed, visual fidelity, and hassle-free media extraction on any device.`}
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {platform.features.map((feature, idx) => {
                const icons = [
                  <Zap key="zap" size={20} className="text-[#C99A3D]" aria-hidden="true" />,
                  <ShieldCheck key="shield" size={20} className="text-[#C99A3D]" aria-hidden="true" />,
                  <FileVideo key="video" size={20} className="text-[#C99A3D]" aria-hidden="true" />,
                  <Download key="dl" size={20} className="text-[#C99A3D]" aria-hidden="true" />,
                ];
                return (
                  <div key={feature.title} className="rounded-lg border border-[#2A2E3A] bg-[#1B1E27] p-5 transition-colors hover:border-[#C99A3D]/40">
                    <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-md border border-[#373C4B] bg-[#12141A]">
                      {icons[idx % icons.length]}
                    </div>
                    <h3 className="text-base font-semibold text-[#F2F0EA]">{feature.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#8B90A0]">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Device-Specific How-To Guide */}
      <section className="border-b border-[#2A2E3A]">
        <div className="mx-auto w-full max-w-5xl px-6 py-14">
          <SectionHeading
            title={`How to Download ${platform.name} Videos on Any Device`}
            description="Simple step-by-step instructions whether you are using a mobile phone or computer."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mobile Guide */}
            <div className="rounded-lg border border-[#2A2E3A] bg-[#1B1E27] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#373C4B] bg-[#12141A] text-[#C99A3D]">
                  <Smartphone size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F2F0EA]">Mobile (Android & iPhone)</h3>
                  <p className="text-xs text-[#8B90A0]">No extra apps required</p>
                </div>
              </div>
              <ol className="space-y-3 pt-2">
                {platform.mobileInstructions.map((step, idx) => (
                  <li key={step} className="flex gap-3 text-xs leading-5 text-[#8B90A0]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#12141A] font-mono text-[11px] font-bold text-[#C99A3D]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Desktop Guide */}
            <div className="rounded-lg border border-[#2A2E3A] bg-[#1B1E27] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#373C4B] bg-[#12141A] text-[#C99A3D]">
                  <Monitor size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F2F0EA]">Desktop (PC, Mac & Linux)</h3>
                  <p className="text-xs text-[#8B90A0]">Works directly in your browser</p>
                </div>
              </div>
              <ol className="space-y-3 pt-2">
                {platform.desktopInstructions.map((step, idx) => (
                  <li key={step} className="flex gap-3 text-xs leading-5 text-[#8B90A0]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#12141A] font-mono text-[11px] font-bold text-[#C99A3D]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Formats & Quality Matrix Table */}
      {platform.formatSpecs && platform.formatSpecs.length > 0 && (
        <section className="border-b border-[#2A2E3A]">
          <div className="mx-auto w-full max-w-5xl px-6 py-14">
            <SectionHeading
              title="Supported Formats & Quality Specifications"
              description={`Vidspry detects and extracts the highest possible quality parameters provided by ${platform.name}.`}
            />
            <div className="overflow-x-auto rounded-lg border border-[#2A2E3A]">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-[#2A2E3A] bg-[#1B1E27] font-semibold text-[#F2F0EA]">
                  <tr>
                    <th scope="col" className="px-5 py-3.5">Format</th>
                    <th scope="col" className="px-5 py-3.5">Resolution / Bitrate</th>
                    <th scope="col" className="px-5 py-3.5">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2E3A] bg-[#161821] text-[#8B90A0]">
                  {platform.formatSpecs.map((spec) => (
                    <tr key={`${spec.format}-${spec.resolution}`} className="transition-colors hover:bg-[#1B1E27]/50">
                      <td className="px-5 py-3.5 font-medium text-[#F2F0EA]">{spec.format}</td>
                      <td className="px-5 py-3.5 font-mono text-[#C99A3D]">{spec.resolution} {spec.audioBitrate ? `(${spec.audioBitrate})` : ""}</td>
                      <td className="px-5 py-3.5">{spec.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Supported Content & Troubleshooting */}
      <section className="border-b border-[#2A2E3A]">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-14 lg:grid-cols-2">
          <div>
            <SectionHeading title="Supported Content Types" />
            <ul className="space-y-3 rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-5">
              {platform.supportedContent.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#8B90A0]">
                  <Check size={16} className="mt-1 shrink-0 text-[#C99A3D]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title={`${platform.name} Troubleshooting`} />
            <div className="space-y-3">
              {platform.troubleshooting.map((item) => (
                <article key={item.title} className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#F2F0EA]">
                    <Wrench size={15} className="text-[#C99A3D]" aria-hidden="true" />
                    <span>{item.title}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[#8B90A0]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In-depth FAQ */}
      <section className="border-b border-[#2A2E3A]">
        <div className="mx-auto w-full max-w-3xl px-6 py-14">
          <FAQ items={platform.faqs} title={`${platform.name} Downloader Frequently Asked Questions`} compact />
        </div>
      </section>

      {/* Other Supported Platforms */}
      <section className="border-b border-[#2A2E3A]">
        <div className="mx-auto w-full max-w-5xl px-6 py-14" aria-labelledby="other-platforms">
          <div className="mb-6 flex items-center gap-2">
            <CircleHelp size={18} className="text-[#C99A3D]" aria-hidden="true" />
            <h2 id="other-platforms" className="text-xl font-semibold text-[#F2F0EA]">Explore Other Video Downloaders</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.filter((item) => item.key !== platform.key).map((item) => (
              <Link
                key={item.key}
                href={`/${item.slug}`}
                className="group rounded-lg border border-[#2A2E3A] bg-[#1B1E27] p-4 text-sm font-medium text-[#F2F0EA] transition-all hover:border-[#C99A3D] hover:bg-[#1B1E27]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
              >
                <span className="block font-semibold text-[#F2F0EA] group-hover:text-[#C99A3D]">{item.name} Downloader</span>
                <span className="mt-1 block text-xs text-[#8B90A0] line-clamp-2">{item.cardDescription}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ResponsibleUse />
    </main>
  );
}
