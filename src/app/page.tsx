import Link from "next/link";
import { SafetyNote } from "@/components/SafetyNote";
import { siteConfig } from "@/config/site";
import { TermCard } from "@/components/TermCard";
import { CanvasMock, ChannelMock, WorkflowBuilderMock } from "@/components/mockups";
import { learningCategories } from "@/data/categories";
import { recommendedTermSlugs, terms } from "@/data/terms";

export default function HomePage() {
  const recommended = recommendedTermSlugs.map((slug) => terms.find((term) => term.slug === slug)).filter((term): term is (typeof terms)[number] => Boolean(term));

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-primary">{siteConfig.siteName}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-ink md:text-6xl">{siteConfig.subtitle}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{siteConfig.description}입니다. 새 사용자·관리자·고객 미팅 담당자가 Slack의 핵심 개념을 실무 언어로 설명할 수 있도록 정리했습니다.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring rounded-lg bg-primary px-5 py-3 text-center font-black text-white shadow-soft transition hover:bg-deepPurple" href="/terms">용어 사전 보기</Link>
              <Link className="focus-ring rounded-lg border border-primary px-5 py-3 text-center font-black text-primary transition hover:bg-softPurple" href="/start">Slack 시작하기</Link>
              <Link className="focus-ring rounded-lg border border-primary px-5 py-3 text-center font-black text-primary transition hover:bg-softPurple" href="/admin">관리자 과정 보기</Link>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-softPurple p-5 shadow-lift">
            <div className="rounded-lg bg-white p-5 shadow-soft">
              <p className="text-sm font-black text-primary">처음 배우는 순서</p>
              <div className="mt-4 grid gap-3">
                {["채널에 업무 맥락을 모읍니다.", "스레드로 세부 논의를 정리합니다.", "Canvas와 Lists로 기준과 실행 항목을 남깁니다.", "Workflow와 앱으로 반복 업무를 표준화합니다."].map((item, index) => (
                  <div className="flex gap-3 rounded-lg border border-line p-3" key={item}>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-white">{index + 1}</span>
                    <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningCategories.map((category) => (
            <Link className="rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary" href={category.href} key={category.id}>
              <p className="text-2xl">{category.emoji}</p>
              <h2 className="mt-3 text-xl font-black text-ink">{category.title}</h2>
              <p className="mt-1 text-xs font-bold text-primary">{category.audience}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-primary">추천 용어</p>
            <h2 className="mt-2 text-3xl font-black text-ink">고객 미팅 전에 보면 좋은 12개</h2>
          </div>
          <Link className="font-black text-primary" href="/terms">전체 용어 보기 →</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {recommended.map((term) => <TermCard key={term.slug} term={term} />)}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-primary">고객 미팅 설명</p>
            <h2 className="mt-2 text-3xl font-black text-ink">바로 말할 수 있는 설명 문장</h2>
            <p className="mt-4 text-base leading-7 text-muted">“Slack은 단순 메신저라기보다 업무 맥락이 채널 중심으로 쌓이는 협업 환경입니다. 채널에 논의가 모이고, 스레드로 세부 대화를 정리하며, Canvas와 Lists로 기준과 실행 항목을 남깁니다.”</p>
          </div>
          <SafetyNote />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-5">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-primary">Mock UI</p>
          <h2 className="mt-2 text-3xl font-black text-ink">교육용 Mock UI로 화면 감각까지 이해</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <ChannelMock />
          <CanvasMock />
          <WorkflowBuilderMock />
        </div>
      </section>
    </>
  );
}
