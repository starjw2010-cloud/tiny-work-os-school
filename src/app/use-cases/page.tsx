import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { useCases } from "@/data/useCases";

export default function UseCasesPage() {
  return (
    <>
      <PageHeader eyebrow="업무 예시" title="Slack 용어를 실제 업무 상황으로 연결하기" description="프로젝트 운영, IT Helpdesk, 영업 고객 관리, 교육 운영처럼 고객 미팅에서 바로 설명할 수 있는 예시입니다." />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-2 xl:grid-cols-3">
        {useCases.map((item) => (
          <article className="rounded-lg border border-line bg-white p-5 shadow-soft" key={item.id}>
            <h2 className="text-xl font-black text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{item.situation}</p>
            <p className="mt-4 rounded-lg bg-softPurple p-3 text-sm font-bold text-deepPurple">추천 채널 예시: {item.channelExample}</p>
            <p className="mt-4 text-sm leading-7 text-muted">운영 팁: {item.operatingTip}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-ink">{item.customerTalkTrack}</p>
            <p className="mt-3 text-xs leading-5 text-muted">주의사항: {item.caution}</p>
            <div className="mt-4 flex flex-wrap gap-2">{item.relatedTerms.map((slug) => <Link className="rounded-md border border-line px-2 py-1 text-xs font-bold text-primary" href={'/terms/' + slug} key={slug}>{slug}</Link>)}</div>
          </article>
        ))}
      </section>
    </>
  );
}
