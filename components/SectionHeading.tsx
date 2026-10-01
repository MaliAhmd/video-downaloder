interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-7 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#C99A3D]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-[#F2F0EA] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-6 text-[#8B90A0] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
