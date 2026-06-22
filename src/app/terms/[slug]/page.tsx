import Link from "next/link";
import { notFound } from "next/navigation";
import { FactStatusBadge, TermCategoryBadge } from "@/components/Badge";
import { TermMockup } from "@/components/mockups";
import { getTermBySlug, terms } from "@/data/terms";

type TermDetailPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return terms.map((term) => ({ slug: term.slug }));
}

export default async function TermDetailPage({ params }: TermDetailPageProps) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();
  const relatedTerms = term.relatedTerms.map(getTermBySlug).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_390px]">
      <article className="rounded-lg border border-line bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex flex-wrap gap-2"><TermCategoryBadge category={term.category} /><FactStatusBadge status={term.factStatus} /></div>
            <h1 className="mt-4 text-4xl font-black leading-tight text-ink">{term.term}</h1>
            <p className="mt-2 text-xl font-bold text-primary">{term.koreanName}</p>
            <p className="mt-4 text-lg leading-8 text-muted">{term.oneLine}</p>
          </div>
          <Link className="font-black text-primary" href="/terms">← 용어 사전</Link>
        </div>
        <div className="mt-6 grid gap-5">
          {[["쉽게 말하면", term.plainExplanation], ["쉬운 비유", term.easyAnalogy], ["실제 업무 예시", term.businessExample], ["고객 미팅에서 이렇게 설명하기", term.customerTalkTrack], ["흔한 오해", term.commonMistake], ["주의사항", term.caution]].map(([title, body]) => (
            <section className="rounded-lg border border-line bg-white p-5" key={title}>
              <h2 className="text-lg font-black text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{body}</p>
            </section>
          ))}
          <section className="rounded-lg border border-line bg-softPurple p-5">
            <h2 className="text-lg font-black text-ink">관련 용어</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {relatedTerms.map((related) => <Link className="rounded-md bg-white px-3 py-2 text-sm font-bold text-primary shadow-sm" href={'/terms/' + related.slug} key={related.slug}>{related.term} ({related.koreanName})</Link>)}
            </div>
          </section>
          <section className="rounded-lg border border-line bg-white p-5">
            <h2 className="text-lg font-black text-ink">Slack Help Center 기준 출처</h2>
            <p className="mt-2 text-sm font-semibold text-muted">{term.sourceName}</p>
            <a className="mt-2 block break-all text-sm font-bold text-primary" href={term.sourceUrl} rel="noreferrer" target="_blank">{term.sourceUrl}</a>
            <p className="mt-3 text-sm text-muted">마지막 확인일: {term.lastVerifiedAt}</p>
          </section>
        </div>
      </article>
      <div className="lg:sticky lg:top-28 lg:h-fit"><TermMockup type={term.screenMockupType} /></div>
    </section>
  );
}
