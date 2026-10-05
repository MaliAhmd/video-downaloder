import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { absoluteUrl } from "@/lib/site";

interface InfoPageProps {
  title: string;
  introduction: string;
  path?: string;
  children: ReactNode;
}

export function InfoPage({ title, introduction, path, children }: InfoPageProps) {
  const breadcrumbJsonLd = path
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: title, item: absoluteUrl(path) },
        ],
      }
    : null;

  const webpageJsonLd = path
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: title,
        description: introduction,
        inLanguage: "en",
        isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      }
    : null;

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:py-16">
      {breadcrumbJsonLd && <JsonLd data={breadcrumbJsonLd} />}
      {webpageJsonLd && <JsonLd data={webpageJsonLd} />}
      <Breadcrumbs current={title} />
      <article>
        <header className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-[-0.025em] text-[#F2F0EA] sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-7 text-[#8B90A0]">{introduction}</p>
        </header>
        <div className="prose-shell space-y-10">{children}</div>
      </article>
    </main>
  );
}
