import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Downloader } from "@/components/Downloader";
import { SupportedPlatforms } from "@/components/SupportedPlatforms";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { PlatformDownloaders } from "@/components/PlatformDownloaders";
import { SupportedMedia } from "@/components/SupportedMedia";
import { FAQ } from "@/components/FAQ";
import { ResponsibleUse } from "@/components/ResponsibleUse";
import { OnlineDownloaderGuide } from "@/components/OnlineDownloaderGuide";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Free Online Video & Audio Downloader | Vidspry" },
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    title: "Free Online Video & Audio Downloader | Vidspry",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    locale: "en_US",
    images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630, alt: "Vidspry online video and audio downloader" }],
  },
  twitter: { card: "summary_large_image", title: "Free Online Video & Audio Downloader | Vidspry", description: siteConfig.description, images: [absoluteUrl(siteConfig.ogImage)] },
};

const homeFaqs = [
  { question: "What is Vidspry?", answer: "Vidspry is a browser-based interface that uses a server-side media engine to inspect supported URLs and prepare available media files." },
  { question: "Which platforms does Vidspry support?", answer: "The current interface supports YouTube, Instagram, TikTok, Facebook, and X URLs that are publicly accessible to the server." },
  { question: "How do I download a video?", answer: "Copy an individual media URL, paste it into the downloader, select Generate, then choose one of the detected options." },
  { question: "Can I use Vidspry on mobile?", answer: "Yes. The website is responsive and can be used from a modern mobile browser." },
  { question: "Which video and audio formats are supported?", answer: "Video selections are prepared as MP4 and audio-only selections as MP3. A JPG option may appear for supported photo-oriented content." },
  { question: "Why is my video URL not working?", answer: "The URL may be private, removed, restricted, unsupported, or may point to a profile or feed instead of an individual media item." },
  { question: "Can Vidspry download private videos?", answer: "No. Vidspry does not sign in to third-party platforms or bypass access controls." },
  { question: "Does Vidspry store downloaded videos?", answer: "Prepared files are written temporarily on the server for delivery. Deletion is scheduled after a completed download, although failed or abandoned jobs may remain longer until server cleanup." },
  { question: "Do I need to install any software?", answer: "No separate app is required. You only need a compatible web browser." },
  { question: "Why are some qualities unavailable?", answer: "Each source exposes a different set of streams. Vidspry can only offer compatible options detected for the submitted URL." },
] as const;

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        name: siteConfig.name,
        alternateName: "Vidspry Downloader",
        url: absoluteUrl("/"),
        description: siteConfig.description,
        inLanguage: "en",
      },
      {
        "@type": "WebApplication",
        "@id": `${absoluteUrl("/")}#application`,
        name: siteConfig.name,
        url: absoluteUrl("/"),
        description: siteConfig.description,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires a modern web browser",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "Online video downloads from supported public links",
          "MP3 audio extraction when available",
          "YouTube, Instagram, TikTok, Facebook, and X support",
          "Responsive mobile and desktop interface",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/")}#faq`,
        mainEntity: homeFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main className="flex-1">
      <JsonLd data={websiteJsonLd} />
      <Hero />
      <Downloader />
      <SupportedPlatforms />
      <HowItWorks />
      <Features />
      <PlatformDownloaders />
      <SupportedMedia />
      <OnlineDownloaderGuide />
      <FAQ items={homeFaqs} />
      <ResponsibleUse />
    </main>
  );
}
