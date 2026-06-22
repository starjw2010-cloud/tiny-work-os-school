import { PageHeader } from "@/components/PageHeader";
import { SafetyNote } from "@/components/SafetyNote";
import { siteConfig } from "@/config/site";
import { sources } from "@/data/sources";

export default function SourcesPage() {
  return (
    <>
      <PageHeader eyebrow="출처" title="Slack Help Center와 Developer Docs 기준으로 확인한 소스" description={siteConfig.description + "입니다. Slack 기능은 빠르게 변경될 수 있으므로 최신 확인이 필요합니다."}><SafetyNote /></PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-2">
        {sources.map((source) => (
          <article className="rounded-lg border border-line bg-white p-5 shadow-soft" key={source.id}>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-primary">{source.category}</p>
            <h2 className="mt-2 text-xl font-black text-ink">{source.name}</h2>
            <p className="mt-2 text-sm font-bold text-muted">영역: {source.area}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{source.notes}</p>
            <p className="mt-3 text-sm text-muted">마지막 확인일: {source.lastVerifiedAt}</p>
            <a className="mt-3 block break-all text-sm font-black text-primary" href={source.url} rel="noreferrer" target="_blank">{source.url}</a>
          </article>
        ))}
      </section>
    </>
  );
}
