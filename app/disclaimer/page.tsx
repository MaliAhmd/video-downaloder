import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer",
  description: "Independent-service and third-party platform disclaimer for SnapLoad.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <InfoPage title="Disclaimer" introduction="SnapLoad is an independent media-processing service and is not an official product of any supported third-party platform.">
      <section>
        <h2>No Platform Affiliation</h2>
        <p>SnapLoad is not affiliated with, sponsored by, owned by, or endorsed by YouTube or Google, Instagram or Meta, Facebook, TikTok, or ByteDance. Their names and trademarks are used only to identify supported third-party sources.</p>
      </section>
      <section>
        <h2>Source Availability</h2>
        <p>Support for a URL depends on the source platform, the visibility of the content, and the media formats available at the time of the request. SnapLoad does not guarantee that every URL, quality, or format will remain available.</p>
      </section>
      <section>
        <h2>Responsible Use</h2>
        <p>The ability to process a URL does not mean that downloading or reusing its content is legally permitted. Users must obtain any required authorization and comply with applicable laws and platform terms.</p>
      </section>
      <section>
        <h2>External Services</h2>
        <p>SnapLoad cannot control third-party content, links, policies, availability, or security. Use external platforms and downloaded files with appropriate care.</p>
      </section>
    </InfoPage>
  );
}
