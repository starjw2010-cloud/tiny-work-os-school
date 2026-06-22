"use client";

import { useMemo, useState } from "react";
import { TermCard } from "@/components/TermCard";
import { termCategories } from "@/data/categories";
import type { Term } from "@/types/content";

export function TermsExplorer({ terms, initialCategory = "all" }: { terms: Term[]; initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const filteredTerms = useMemo(() => {
    const lowered = query.trim().toLowerCase();
    return terms.filter((term) => {
      const matchesCategory = category === "all" || term.category === category;
      const matchesQuery =
        !lowered ||
        term.term.toLowerCase().includes(lowered) ||
        term.koreanName.toLowerCase().includes(lowered) ||
        term.oneLine.toLowerCase().includes(lowered);
      return matchesCategory && matchesQuery;
    });
  }, [category, query, terms]);

  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <div className="grid gap-4 md:grid-cols-[1fr_280px]">
          <label className="grid gap-2 text-sm font-black text-ink">
            용어 검색
            <input className="focus-ring rounded-lg border border-line px-3 py-3 text-sm font-semibold text-ink" onChange={(event) => setQuery(event.target.value)} placeholder="예: 채널, Workflow, Enterprise+" value={query} />
          </label>
          <label className="grid gap-2 text-sm font-black text-ink">
            카테고리
            <select className="focus-ring rounded-lg border border-line px-3 py-3 text-sm font-semibold text-ink" onChange={(event) => setCategory(event.target.value)} value={category}>
              <option value="all">전체</option>
              {termCategories.map((item) => (
                <option key={item.id} value={item.id}>{item.emoji} {item.title}</option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-4 text-sm font-bold text-muted">{filteredTerms.length}개 용어 표시 중</p>
      </section>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredTerms.map((term) => <TermCard key={term.slug} term={term} />)}
      </section>
    </div>
  );
}
