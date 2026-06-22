import Link from "next/link";
import { FactStatusBadge, TermCategoryBadge } from "@/components/Badge";
import type { Term } from "@/types/content";

export function TermCard({ term }: { term: Term }) {
  return (
    <Link className="group flex h-full flex-col rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary hover:shadow-lift" href={'/terms/' + term.slug}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-black text-ink">{term.term}</h2>
          <p className="mt-1 text-sm font-bold text-primary">{term.koreanName}</p>
        </div>
        <FactStatusBadge status={term.factStatus} />
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted">{term.oneLine}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <TermCategoryBadge category={term.category} />
        <span className="rounded-md border border-line bg-white px-2 py-1 text-xs font-bold text-muted">출처 있음</span>
      </div>
      <p className="mt-4 text-sm font-black text-primary group-hover:text-deepPurple">자세히 보기 →</p>
    </Link>
  );
}
