import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

interface InfoPageProps {
  title: string;
  introduction: string;
  children: ReactNode;
}

export function InfoPage({ title, introduction, children }: InfoPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:py-16">
      <Breadcrumbs current={title} />
      <article>
        <header className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-[-0.025em] text-[#F2F0EA] sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-7 text-[#8B90A0]">{introduction}</p>
        </header>
        <div className="prose-shell space-y-10">{children}</div>
      </article>
    </main>
  );
}
