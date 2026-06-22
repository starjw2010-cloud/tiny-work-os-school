import { LessonGrid } from "@/components/LessonGrid";
import { PageHeader } from "@/components/PageHeader";
import { tutorialLessons } from "@/data/tutorialLessons";

export default function TutorialsPage() {
  return (
    <>
      <PageHeader eyebrow="튜토리얼 및 비디오" title="고객 교육에서 바로 따라 할 수 있는 실습 카드" description="영상 자체를 가져오거나 임베드하지 않고, 공식 튜토리얼 구조를 참고해 우리 사이트용 실습 과제로 재구성했습니다." />
      <section className="mx-auto max-w-7xl px-5 py-10"><LessonGrid items={tutorialLessons} /></section>
    </>
  );
}
