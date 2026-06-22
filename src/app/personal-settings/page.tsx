import { LessonGrid } from "@/components/LessonGrid";
import { PageHeader } from "@/components/PageHeader";
import { personalSettingsLessons } from "@/data/personalSettingsLessons";

export default function PersonalSettingsPage() {
  return (
    <>
      <PageHeader eyebrow="프로필 및 환경설정" title="알림을 줄이고 중요한 신호는 놓치지 않게 설정하기" description="프로필과 상태는 협업 맥락을 알려주는 정보이고, 시간대와 언어 설정은 글로벌 협업에서 중요합니다." />
      <section className="mx-auto max-w-7xl px-5 py-10"><LessonGrid items={personalSettingsLessons} /></section>
    </>
  );
}
