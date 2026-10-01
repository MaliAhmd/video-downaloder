import { FileAudio, FileImage, FileVideo2, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    title: "MP4 video",
    text: "Video selections are prepared as MP4 files for broad playback compatibility.",
    icon: FileVideo2,
  },
  {
    title: "MP3 audio",
    text: "Audio-only selections are extracted and prepared as MP3 files.",
    icon: FileAudio,
  },
  {
    title: "Source-dependent quality",
    text: "Resolution choices are generated from the streams available for each URL and can vary by post.",
    icon: SlidersHorizontal,
  },
  {
    title: "Photo option",
    text: "A JPG photo option may appear when suitable image metadata is detected for a supported post.",
    icon: FileImage,
  },
] as const;

export function SupportedMedia() {
  return (
    <section className="border-y border-[#2A2E3A] bg-[#161821]">
      <div className="mx-auto w-full max-w-5xl px-6 py-14">
        <SectionHeading
          title="Supported Media and Formats"
          description="Vidspry shows only the options it can detect for the submitted URL; not every source offers every format or quality."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-4">
              <item.icon size={18} className="mb-3 text-[#C99A3D]" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-[#F2F0EA]">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#8B90A0]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
