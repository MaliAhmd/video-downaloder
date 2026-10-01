import { ShieldCheck } from "lucide-react";

export function ResponsibleUse() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-14" aria-labelledby="responsible-use">
      <div className="flex flex-col gap-4 rounded-md border border-[#2A2E3A] bg-[#1B1E27] p-5 sm:flex-row sm:items-start">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#2A2E3A] bg-[#161821] text-[#C99A3D]">
          <ShieldCheck size={18} aria-hidden="true" />
        </div>
        <div>
          <h2 id="responsible-use" className="text-base font-semibold text-[#F2F0EA]">Responsible Use</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#8B90A0]">
            Vidspry is intended for content you own, have permission to download, or are otherwise legally authorized to use. You remain responsible for following copyright law and the terms of the source platform.
          </p>
        </div>
      </div>
    </section>
  );
}
