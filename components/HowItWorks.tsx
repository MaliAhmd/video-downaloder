import { ClipboardCopy, Link2, Download } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Copy the URL",
    text: "Copy the link of the video or media from a supported platform.",
    icon: ClipboardCopy,
  },
  {
    title: "Paste the URL",
    text: "Paste the copied URL into the Vidspry downloader.",
    icon: Link2,
  },
  {
    title: "Download",
    text: "Generate the available options and download the media file you need.",
    icon: Download,
  },
] as const;

export function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-14" aria-labelledby="how-it-works">
      <SectionHeading title="How It Works" description="Three simple steps from link to file." />
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded border border-[#2A2E3A] bg-[#161821] text-[#C99A3D]">
                <step.icon size={17} aria-hidden="true" />
              </div>
              <span className="font-mono text-xs text-[#8B90A0]">0{index + 1}</span>
            </div>
            <h3 className="text-sm font-semibold text-[#F2F0EA]">{step.title}</h3>
            <p className="mt-2 text-xs leading-5 text-[#8B90A0]">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
