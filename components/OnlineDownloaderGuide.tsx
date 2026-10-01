import Link from "next/link";
import { FileAudio, FileVideo2, Link2 } from "lucide-react";
import { platforms } from "@/lib/platforms";
import { SectionHeading } from "./SectionHeading";

const guideItems = [
  {
    title: "Online video downloads",
    text: "Submit one supported public media URL and Vidspry displays the compatible video choices detected for that specific post.",
    icon: FileVideo2,
  },
  {
    title: "Audio-only options",
    text: "When the source exposes a suitable audio stream, Vidspry can prepare an MP3 option for offline listening.",
    icon: FileAudio,
  },
  {
    title: "No separate application",
    text: "The downloader works in a modern browser on mobile and desktop, so there is no extension or standalone app to install.",
    icon: Link2,
  },
] as const;

export function OnlineDownloaderGuide() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-14" aria-labelledby="online-downloader-guide">
      <SectionHeading
        title="Online Video Downloader for Supported Platforms"
        description="Vidspry provides one straightforward place to inspect public media links and download the formats that are available from the source."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {guideItems.map((item) => (
          <article key={item.title} className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-5">
            <item.icon size={18} className="mb-3 text-[#C99A3D]" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-[#F2F0EA]">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#8B90A0]">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-md border border-[#2A2E3A] bg-[#161821] p-5 text-sm leading-7 text-[#8B90A0]">
        <p>
          Available formats and resolutions depend on the submitted post. For source-specific instructions, open the{" "}
          {platforms.map((platform, index) => (
            <span key={platform.key}>
              {index > 0 && (index === platforms.length - 1 ? ", or " : ", ")}
              <Link href={`/${platform.slug}`} className="text-link">
                {platform.name} video downloader
              </Link>
            </span>
          ))}
          . Only download media you own or are authorized to use.
        </p>
      </div>
    </section>
  );
}
