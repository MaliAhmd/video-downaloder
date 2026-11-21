import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About Vidspry - Online Video Downloader",
  description: "Learn about Vidspry, our mission, high-speed media processing engine, and commitment to clean, ad-free downloads.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <InfoPage
      title="About Vidspry"
      introduction="Vidspry is a modern, high-speed online video and audio downloader engineered to provide a clean, ad-free, and secure alternative to traditional spam-heavy download sites."
      path="/about"
    >
      <section>
        <h2>Our Mission</h2>
        <p>
          The internet is saturated with video downloading websites packed with misleading popup ads, suspicious redirects, and intrusive tracking scripts. Vidspry was built from the ground up to challenge that status quo.
        </p>
        <p>
          Our mission is simple: provide a fast, elegant, and completely transparent browser-based tool where users can inspect and save public media from major platforms—including YouTube, Instagram, TikTok, Facebook, and X—in highest available quality without compromising their device security.
        </p>
      </section>

      <section>
        <h2>Next-Generation Media Engine</h2>
        <p>
          Traditional download tools often rely on slow, lossy server-side transcoding that takes minutes to process even a short clip. Vidspry uses a high-throughput stream inspection and remuxing engine hosted on high-bandwidth cloud infrastructure.
        </p>
        <p>
          When you paste a link, our server directly parses the native video and audio streams published by the source platform. If high-definition video (such as YouTube 1080p) has segregated audio, our engine losslessly multiplexes the streams on the fly, delivering a single, synchronized, crystal-clear MP4 file in seconds.
        </p>
      </section>

      <section>
        <h2>Privacy by Design</h2>
        <p>
          We believe user privacy should never be an afterthought. Vidspry operates under strict data minimization principles:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-[#8B90A0]">
          <li><strong>No User Accounts:</strong> You never need to sign up, log in, or disclose your identity.</li>
          <li><strong>No Tracking Cookies:</strong> We do not track your browsing history or sell your activity to advertisers.</li>
          <li><strong>Zero Persistent Storage:</strong> Prepared media files exist only temporarily in transit to fulfill your download request and are automatically purged.</li>
          <li><strong>No Access to Private Profiles:</strong> Vidspry only works with publicly accessible links and does not attempt to bypass platform privacy walls or credentials.</li>
        </ul>
      </section>

      <section>
        <h2>Cross-Platform Accessibility</h2>
        <p>
          Whether you are on an iPhone using Safari, an Android phone with Chrome, or a desktop computer running Windows, macOS, or Linux, Vidspry delivers a fully responsive, lightweight experience without requiring third-party software, extensions, or APK installations.
        </p>
      </section>

      <div className="callout">
        <p>Ready to try Vidspry?</p>
        <Link href="/" className="text-link">Launch the Vidspry Downloader</Link>
      </div>
    </InfoPage>
  );
}
