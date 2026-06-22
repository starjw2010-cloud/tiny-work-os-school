import { LessonGrid } from "@/components/LessonGrid";
import { PageHeader } from "@/components/PageHeader";
import { SafetyNote } from "@/components/SafetyNote";
import { adminLessons } from "@/data/adminLessons";

export default function AdminPage() {
  return (
    <>
      <PageHeader eyebrow="워크스페이스 관리" title="권한, 정책, 외부 협업, 데이터를 관리자의 관점에서 보기" description="Slack 관리는 기능 관리보다 누가 무엇을 볼 수 있고, 무엇을 만들고, 무엇을 공유할 수 있는지 정하는 일에 가깝습니다."><SafetyNote /></PageHeader>
      <section className="mx-auto max-w-7xl px-5 py-12"><LessonGrid items={adminLessons} /></section>
    </>
  );
}
