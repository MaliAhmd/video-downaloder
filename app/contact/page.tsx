import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact SnapLoad",
  description: "Contact information and project links for SnapLoad.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <InfoPage title="Contact SnapLoad" introduction="A dedicated contact email or contact-form backend is not currently configured for this project.">
      <section>
        <h2>Project Inquiries</h2>
        <p>You can use the public GitHub profile linked by the project to find the maintainer and available contact channels. Please do not include passwords, private links, account details, or other sensitive information in a public message.</p>
        <a className="text-link" href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">Visit the GitHub profile</a>
      </section>
      <section>
        <h2>Copyright Questions</h2>
        <p>Before sending a copyright-related inquiry, review the <Link className="text-link" href="/copyright">Copyright / DMCA page</Link>. A formal notice procedure will be published if a dedicated legal contact method is configured.</p>
      </section>
    </InfoPage>
  );
}
