import { LessonGrid } from "@/components/LessonGrid";
import { PageHeader } from "@/components/PageHeader";
import { usingLessons } from "@/data/usingLessons";

export default function UsingPage() {
  return (
    <>
      <PageHeader eyebrow="Slack 사용하기" title="채널, 메시지, 검색을 실제 업무 방식으로 익히기" description="채널은 업무 주제별 공간이고, DM은 짧고 제한적인 대화에 적합합니다. 스레드와 멘션, 검색, 허들을 상황에 맞게 사용합니다." />
      <section className="mx-auto max-w-7xl px-5 py-12"><LessonGrid items={usingLessons} /></section>
    </>
  );
}
