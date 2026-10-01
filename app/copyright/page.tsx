import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Copyright / DMCA",
  description: "Copyright responsibilities and rights-holder information for Vidspry users.",
  path: "/copyright",
});

export default function CopyrightPage() {
  return (
    <InfoPage title="Copyright / DMCA" introduction="Vidspry is a technical tool and does not grant ownership of, or permission to use, media provided by third-party platforms.">
      <section>
        <h2>User Responsibility</h2>
        <p>Only download content you created, content for which you have permission, or content you are otherwise legally authorized to use. You are responsible for understanding the copyright rules and platform terms that apply to your use.</p>
      </section>
      <section>
        <h2>Third-Party Content</h2>
        <p>Copyright and other rights in downloaded media remain with their respective owners. Vidspry does not host a public media catalog or claim ownership of source-platform content.</p>
      </section>
      <section>
        <h2>Rights-Holder Inquiries</h2>
        <p>A dedicated legal contact and formal DMCA notice procedure are not currently configured. Rights holders can review the available project contact information on the <Link className="text-link" href="/contact">Contact page</Link>. A formal procedure should be added when a dedicated address is available.</p>
      </section>
    </InfoPage>
  );
}
