import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Copyright & DMCA Policy",
  description: "Copyright responsibilities, non-hosting notice, and DMCA takedown procedures for Vidspry.",
  path: "/copyright",
});

export default function CopyrightPage() {
  return (
    <InfoPage
      title="Copyright & DMCA Policy"
      introduction="Vidspry respects the intellectual property rights of creators and content owners. This policy sets forth our commitment to copyright compliance and provides guidelines for submitting notices of alleged infringement."
      path="/copyright"
    >
      <section>
        <h2>Technical Architecture & Non-Hosting Disclaimer</h2>
        <p>
          Vidspry is a client-side and cloud proxy interface that allows users to access publicly accessible media URLs directly from their respective source platforms (such as YouTube, Instagram, TikTok, Facebook, and X).
        </p>
        <p>
          <strong>Vidspry does not host, store, archive, or broadcast any video or audio files on its servers.</strong> All media processing is performed in transient memory solely to deliver the stream requested by the user. Once the requested stream transfer is complete, temporary operational caches are automatically purged.
        </p>
      </section>

      <section>
        <h2>User Responsibility & Fair Use</h2>
        <p>
          Users are solely responsible for the links they submit and the media they download using Vidspry. You agree to use this service exclusively for personal, non-commercial purposes, or for content that you own, have created, or for which you have secured explicit permission from the rightful copyright holder.
        </p>
        <p>
          Downloading copyrighted material without authorization from the copyright owner may violate federal law, state law, and the terms of service of the third-party platforms.
        </p>
      </section>

      <section>
        <h2>DMCA Takedown Notice Procedure</h2>
        <p>
          In accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512), if you believe that content accessible through or referenced by Vidspry infringes upon your copyright, you or your authorized agent may send a written notification to our designated copyright agent at:
        </p>
        <div className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-4 text-xs font-mono text-[#C99A3D]">
          Email: dmca@vidspry.site
        </div>
        <p className="mt-4">
          To be effective under 17 U.S.C. § 512(c)(3), your notification must include substantially the following:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-[#8B90A0]">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple works are covered by a single notification, a representative list of such works.</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity, including the exact URL(s) on Vidspry where the material or feature is located.</li>
          <li>Information reasonably sufficient to permit us to contact you, such as your full legal name, address, telephone number, and email address.</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        </ul>
      </section>

      <section>
        <h2>Counter-Notification Procedure</h2>
        <p>
          If you believe that access to your content was disabled or blocked as a result of mistake or misidentification, you may submit a written counter-notification pursuant to Sections 512(g)(2) and (3) of the DMCA containing your contact information, identification of the material, a statement under penalty of perjury, and consent to jurisdiction.
        </p>
      </section>

      <section>
        <h2>Repeat Infringer Policy</h2>
        <p>
          Vidspry maintains a strict policy to terminate access or block repeat infringers from accessing our service, including IP-level and domain-level blocking where appropriate.
        </p>
      </section>

      <div className="callout">
        <p>Have questions or need assistance?</p>
        <Link href="/contact" className="text-link">Contact our support team</Link>
      </div>
    </InfoPage>
  );
}
