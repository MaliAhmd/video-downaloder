import { Globe2, MonitorSmartphone, Music2, PanelsTopLeft, Smartphone, PackageX } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { title: "Multiple Platforms", text: "Use supported links from five popular media platforms.", icon: Globe2 },
  { title: "Video & Audio", text: "Choose from the video and audio options detected for a link.", icon: Music2 },
  { title: "Browser Based", text: "The workflow runs from a modern web browser.", icon: PanelsTopLeft },
  { title: "Mobile Friendly", text: "The interface adapts to phones, tablets, and larger screens.", icon: Smartphone },
  { title: "Simple Interface", text: "One input keeps the process focused and easy to follow.", icon: MonitorSmartphone },
  { title: "No App Install", text: "No separate desktop or mobile application is required.", icon: PackageX },
] as const;

export function Features() {
  return (
    <section className="border-y border-[#2A2E3A] bg-[#161821]">
      <div className="mx-auto w-full max-w-5xl px-6 py-14" aria-labelledby="features-heading">
        <SectionHeading title="Why Use SnapLoad?" description="A focused downloader built around a straightforward browser workflow." />
        <div className="grid gap-px overflow-hidden rounded-md border border-[#2A2E3A] bg-[#2A2E3A] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="bg-[#1B1E27] p-5">
              <feature.icon size={18} className="mb-3 text-[#C99A3D]" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-[#F2F0EA]">{feature.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-[#8B90A0]">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
