import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About SnapLoad",
  description: "Learn how SnapLoad provides a simple browser-based workflow for supported media links.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <InfoPage title="About SnapLoad" introduction="SnapLoad is a focused, browser-based interface for processing supported media links without requiring a separate application.">
      <section>
        <h2>What SnapLoad Does</h2>
        <p>SnapLoad accepts supported public URLs from YouTube, Instagram, TikTok, Facebook, and X. Its server-side media engine inspects the link and returns the video, audio, or photo options it can detect for that item.</p>
      </section>
      <section>
        <h2>A Simple Workflow</h2>
        <p>The service is deliberately straightforward: paste an individual media URL, generate the available choices, and select the file you are permitted to download. Available formats and qualities vary with the source.</p>
      </section>
      <section>
        <h2>Built for the Browser</h2>
        <p>The responsive interface works across modern desktop and mobile browsers. No separate desktop program or mobile app is required.</p>
      </section>
      <div className="callout">
        <p>Ready to process a supported link?</p>
        <Link href="/" className="text-link">Open the SnapLoad downloader</Link>
      </div>
    </InfoPage>
  );
}
