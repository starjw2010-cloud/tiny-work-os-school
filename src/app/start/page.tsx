import { LessonGrid } from "@/components/LessonGrid";
import { PageHeader } from "@/components/PageHeader";
import { SafetyNote } from "@/components/SafetyNote";
import { getLearningPath } from "@/data/learningPaths";

export default function StartPage() {
  const path = getLearningPath("start");
  return (
    <>
      <PageHeader eyebrow="시작하기" title="Slack 입문 과정을 업무 흐름으로 배우기" description="새 사용자는 Workspace, Channel, DM, Thread, Mention을 먼저 이해하고, 관리자는 역할과 권한, 채널 구조, 초대 기준을 먼저 정합니다."><SafetyNote /></PageHeader>
      <section className="mx-auto max-w-7xl px-5 py-10">{path ? <LessonGrid items={path.modules} /> : null}</section>
    </>
  );
}
