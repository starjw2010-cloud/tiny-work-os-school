import Link from "next/link";
import { TermMockup } from "@/components/mockups";
import { getTermLabel } from "@/data/terms";
import type { LearningLesson, LearningModule } from "@/types/content";

type LessonLike = LearningLesson | LearningModule;

function getMockup(item: LessonLike) {
  return "mockupType" in item ? item.mockupType : item.screenMockupType;
}

export function LessonGrid({ items }: { items: LessonLike[] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {items.map((item, index) => (
        <article className="group overflow-hidden rounded-lg border border-line bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-lavender hover:shadow-lift" key={item.id}>
          <div className="grid h-full xl:grid-cols-[minmax(0,1fr)_232px]">
            <div className="min-w-0 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-xs font-black text-white shadow-soft">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-xs font-black tracking-[0.08em] text-primary">학습 카드</p>
              </div>
              <h2 className="mt-4 text-2xl font-black leading-tight text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.practicalMeaning}</p>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-muted">먼저 잡을 감각</p>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink">
                  {item.whatYouLearn.slice(0, 3).map((text) => (
                    <li className="flex gap-2" key={text}>
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-l-4 border-primary bg-softPurple px-4 py-3">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-primary">고객에게 이렇게 말하기</p>
                <p className="mt-2 text-sm font-bold leading-6 text-deepPurple">{item.customerTalkTrack}</p>
              </div>

              <details className="mt-4 rounded-lg border border-line bg-white px-4 py-3 text-sm text-muted">
                <summary className="cursor-pointer font-black text-ink">운영 체크</summary>
                <div className="mt-3 grid gap-2 leading-6">
                  <p><span className="font-bold text-ink">흔한 오해:</span> {item.commonMistake}</p>
                  <p><span className="font-bold text-ink">주의사항:</span> {item.caution}</p>
                </div>
              </details>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.relatedTerms.map((slug) => (
                  <Link className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-primary transition hover:border-primary hover:bg-softPurple" href={'/terms/' + slug} key={slug}>
                    {getTermLabel(slug)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-line bg-[#FBFAFC] p-4 xl:border-l xl:border-t-0">
              <TermMockup type={getMockup(item)} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
