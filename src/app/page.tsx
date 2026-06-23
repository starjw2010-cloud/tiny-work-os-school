import Link from "next/link";
import { SafetyNote } from "@/components/SafetyNote";
import { siteConfig } from "@/config/site";
import { TermCard } from "@/components/TermCard";
import { CanvasMock, ChannelMock, WorkflowBuilderMock } from "@/components/mockups";
import { learningCategories } from "@/data/categories";
import { recommendedTermSlugs, terms } from "@/data/terms";

const heroSteps = [
  "채널과 DM을 구분합니다.",
  "스레드와 멘션으로 대화를 정리합니다.",
  "Canvas와 Lists로 기준과 실행 항목을 남깁니다.",
  "Workflow와 앱은 권한을 확인하며 연결합니다."
];

export default function HomePage() {
  const proofPoints = [
    { label: "학습 과정", value: "6개", text: "입문, 사용, 개인 설정, 자동화, 관리, 실습" },
    { label: "용어 카드", value: `${terms.length}개`, text: "고객 설명에 바로 쓰기 좋은 한 줄 설명" },
    { label: "브랜드 안전", value: "비공식", text: "Slack 로고와 공식 제휴 표현 없이 구성" }
  ];
  const recommended = recommendedTermSlugs.slice(0, 8).map((slug) => terms.find((term) => term.slug === slug)).filter((term): term is (typeof terms)[number] => Boolean(term));

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <p className="inline-flex rounded-full bg-softPurple px-3 py-1 text-sm font-black text-primary">{siteConfig.siteName}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink md:text-6xl">
              Slack 설명은 여기서 시작하세요.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              {siteConfig.description}입니다. 새 사용자 온보딩, 관리자 교육, 고객 미팅에서 바로 말할 수 있도록 핵심 용어와 운영 주의점을 함께 정리했습니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring rounded-lg bg-primary px-5 py-3 text-center font-black text-white shadow-soft transition hover:bg-deepPurple" href="/terms">용어 사전 보기</Link>
              <Link className="focus-ring rounded-lg border border-primary px-5 py-3 text-center font-black text-primary transition hover:bg-softPurple" href="/start">Slack 시작하기</Link>
              <Link className="focus-ring rounded-lg border border-primary px-5 py-3 text-center font-black text-primary transition hover:bg-softPurple" href="/admin">관리자 과정 보기</Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div className="border-l-4 border-primary bg-softPurple px-4 py-3" key={item.label}>
                  <p className="text-2xl font-black text-deepPurple">{item.value}</p>
                  <p className="mt-1 text-sm font-black text-ink">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-lavender bg-softPurple p-4 shadow-lift md:p-6">
            <div className="flex items-center justify-between gap-3 border-b border-lavender pb-4">
              <div>
                <p className="text-sm font-black text-primary">첫 30분 학습 지도</p>
                <p className="mt-1 text-xs font-semibold text-muted">메신저가 아니라 업무 맥락이 쌓이는 공간으로 이해하기</p>
              </div>
              <span className="grid size-10 place-items-center rounded-lg bg-white text-xl shadow-soft">🧭</span>
            </div>
            <div className="mt-5 grid gap-3">
              {heroSteps.map((item, index) => (
                <div className="flex gap-3 rounded-lg bg-white p-4 shadow-soft" key={item}>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-white">{index + 1}</span>
                  <p className="text-sm font-bold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-lg border border-line bg-white px-4 py-3 text-sm font-bold leading-6 text-deepPurple">
              한 문장으로 말하면: Slack은 대화가 지나가는 곳이 아니라, 팀의 일하는 맥락이 채널 중심으로 쌓이는 협업 환경입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black tracking-[0.12em] text-primary">학습 경로</p>
            <h2 className="mt-2 text-3xl font-black text-ink">역할에 맞게 바로 들어가기</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted">처음 쓰는 사람, 관리자, 고객 교육 담당자가 서로 다른 입구에서 같은 용어 체계를 볼 수 있게 나눴습니다.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningCategories.map((category, index) => (
            <Link className="group rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary hover:shadow-lift" href={category.href} key={category.id}>
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-lg bg-softPurple text-2xl">{category.emoji}</span>
                <span className="text-xs font-black text-muted">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-xl font-black text-ink">{category.title}</h3>
              <p className="mt-1 text-xs font-bold text-primary">{category.audience}</p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{category.description}</p>
              <p className="mt-4 text-sm font-black text-primary group-hover:text-deepPurple">과정 보기 →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black tracking-[0.12em] text-primary">추천 용어</p>
            <h2 className="mt-2 text-3xl font-black text-ink">고객 미팅 전에 먼저 볼 8개</h2>
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
            <p className="text-sm font-black tracking-[0.12em] text-primary">고객 미팅 설명</p>
            <h2 className="mt-2 text-3xl font-black text-ink">바로 말할 수 있는 설명 문장</h2>
            <p className="mt-4 text-base leading-7 text-muted">“Slack은 단순 메신저라기보다 업무 맥락이 채널 중심으로 쌓이는 협업 환경입니다. 채널에 논의가 모이고, 스레드로 세부 대화를 정리하며, Canvas와 Lists로 기준과 실행 항목을 남깁니다.”</p>
          </div>
          <SafetyNote />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-5">
          <p className="text-sm font-black tracking-[0.12em] text-primary">화면 감각</p>
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
