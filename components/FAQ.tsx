import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: readonly FAQItem[];
  title?: string;
  description?: string;
  compact?: boolean;
}

export function FAQ({
  items,
  title = "Frequently Asked Questions",
  description = "Useful answers about supported links, available options, and downloads.",
  compact = false,
}: FAQProps) {
  const content = (
    <>
      <SectionHeading title={title} description={description} />
      <div className="divide-y divide-[#2A2E3A] overflow-hidden rounded-md border border-[#2A2E3A] bg-[#1B1E27]">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-[#F2F0EA] marker:content-none focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#C99A3D] sm:px-5">
              {item.question}
              <ChevronDown
                size={16}
                className="shrink-0 text-[#8B90A0] transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="px-4 pb-4 text-sm leading-6 text-[#8B90A0] sm:px-5">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );

  if (compact) return <section>{content}</section>;

  return <section className="mx-auto w-full max-w-3xl px-6 py-14">{content}</section>;
}
