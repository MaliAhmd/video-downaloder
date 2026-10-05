import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms governing responsible use of the Vidspry media downloader.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms of Service"
      introduction="By using Vidspry, you agree to use the service responsibly and only for content you are authorized to download."
      path="/terms"
    >
      <PolicySection title="Acceptance of Terms">Your use of Vidspry indicates acceptance of these terms. If you do not agree, do not use the service.</PolicySection>
      <PolicySection title="Use of the Service">Vidspry provides a technical interface that processes supported third-party media URLs. Availability, formats, and quality depend on the source and may change without notice.</PolicySection>
      <PolicySection title="User Responsibilities">You are responsible for the URLs you submit, the files you download, and ensuring that your activity complies with applicable law, copyright permissions, and source-platform terms.</PolicySection>
      <PolicySection title="Acceptable Use and Prohibited Misuse">Do not use Vidspry to infringe rights, bypass access controls, process private material without permission, disrupt the service, automate abusive traffic, distribute malware, or attempt unauthorized access to systems or data.</PolicySection>
      <PolicySection title="Intellectual Property">Vidspry does not grant ownership or a license to third-party media. Platform names and trademarks remain the property of their respective owners.</PolicySection>
      <PolicySection title="Third-Party Platforms">Vidspry is independent of the supported platforms. Their services, availability, rules, and content are controlled by their respective operators.</PolicySection>
      <PolicySection title="Service Availability">The service may be changed, interrupted, rate-limited, or discontinued. A supported link can stop working when a source platform changes its systems or restricts the content.</PolicySection>
      <PolicySection title="Limitation of Service">Vidspry is provided on an as-available basis. You are responsible for verifying downloaded files and maintaining appropriate backups and device security.</PolicySection>
      <PolicySection title="Changes to the Service">Features and these terms may be revised as the project evolves. Continued use after an update means the revised terms apply.</PolicySection>
    </InfoPage>
  );
}

function PolicySection({ title, children }: { title: string; children: string }) {
  return <section><h2>{title}</h2><p>{children}</p></section>;
}
