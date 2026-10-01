import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "How SnapLoad processes URLs, temporary media files, logs, and third-party requests.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <InfoPage title="Privacy Policy" introduction="This policy describes the current SnapLoad implementation and the information involved when you use the service.">
      <section>
        <h2>Information You Submit</h2>
        <p>When you generate media options, the URL you enter is sent to the SnapLoad server for processing. When you choose a download, the server also receives the selected format and media title. Do not submit private URLs or links you are not authorized to process.</p>
      </section>
      <section>
        <h2>Server Processing and Logs</h2>
        <p>SnapLoad invokes a server-side media tool to inspect and prepare supported links. The current application logs download preparation details, including the normalized source URL, selected format, and generated file identifier. The hosting provider may also create routine access and error logs that can include IP address, request time, user agent, and requested path.</p>
      </section>
      <section>
        <h2>Temporary Files</h2>
        <p>Prepared media is written to temporary server storage before delivery. Deletion is scheduled shortly after a completed transfer. A file may remain longer when a job fails, a download is abandoned, or infrastructure cleanup is delayed.</p>
      </section>
      <section>
        <h2>Third-Party Requests</h2>
        <p>The server contacts the source platform and related media hosts to inspect and retrieve the URL you provide. Preview images can also be loaded from the source host in your browser. Those services may receive technical request information under their own privacy policies.</p>
      </section>
      <section>
        <h2>Cookies, Analytics, and Browser Storage</h2>
        <p>The current SnapLoad application does not implement analytics, advertising, application cookies, localStorage, or sessionStorage. The hosting platform or linked third-party websites may operate independently and are outside the direct control of SnapLoad.</p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>This policy should be updated if analytics, advertising, accounts, persistent storage, or additional third-party services are introduced.</p>
      </section>
    </InfoPage>
  );
}
