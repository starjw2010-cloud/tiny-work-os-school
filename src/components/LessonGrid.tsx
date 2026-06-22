import Link from "next/link";
import { TermMockup } from "@/components/mockups";
import type { LearningLesson, LearningModule } from "@/types/content";

type LessonLike = LearningLesson | LearningModule;

function getMockup(item: LessonLike) {
  return "mockupType" in item ? item.mockupType : item.screenMockupType;
}

export function LessonGrid({ items }: { items: LessonLike[] }) {
  return (
    <div className="grid gap-7 lg:grid-cols-2">
      {items.map((item) => (
        <article className="rounded-lg border border-line bg-white p-5 shadow-soft md:p-6" key={item.id}>
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_260px]">
            <div className="min-w-0">
              <h2 className="text-xl font-black text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted md:line-clamp-2">{item.practicalMeaning}</p>
              <div className="mt-4 rounded-lg bg-softPurple p-3">
                <p className="text-sm font-black text-primary">핵심 요약</p>
                <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-muted">
                  {item.whatYouLearn.slice(0, 3).map((text) => <li key={text}>• {text}</li>)}
                </ul>
              </div>
              <p className="mt-4 rounded-lg border border-lavender bg-white p-3 text-sm font-semibold leading-6 text-deepPurple">{item.customerTalkTrack}</p>
              <details className="mt-4 rounded-lg border border-line bg-white px-3 py-2 text-sm text-muted">
                <summary className="cursor-pointer font-black text-ink">운영 시 확인할 점</summary>
                <div className="mt-3 grid gap-2 leading-6">
                  <p><span className="font-bold text-ink">흔한 오해:</span> {item.commonMistake}</p>
                  <p><span className="font-bold text-ink">주의사항:</span> {item.caution}</p>
                </div>
              </details>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.relatedTerms.map((slug) => <Link className="rounded-md border border-line px-2 py-1 text-xs font-bold text-primary" href={'/terms/' + slug} key={slug}>{slug}</Link>)}
              </div>
            </div>
            <TermMockup type={getMockup(item)} />
          </div>
        </article>
      ))}
    </div>
  );
}
