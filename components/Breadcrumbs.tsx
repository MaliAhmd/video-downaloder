import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  current: string;
}

export function Breadcrumbs({ current }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-xs text-[#8B90A0]">
        <li>
          <Link className="rounded hover:text-[#F2F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]" href="/">
            Home
          </Link>
        </li>
        <li aria-hidden="true"><ChevronRight size={13} /></li>
        <li className="text-[#F2F0EA]" aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
