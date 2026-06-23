import { LessonGrid } from "@/components/LessonGrid";
import { PageHeader } from "@/components/PageHeader";
import { SafetyNote } from "@/components/SafetyNote";
import { automationLessons } from "@/data/automationLessons";

export default function AutomationPage() {
  return (
    <>
      <PageHeader eyebrow="도구 연결 및 작업 자동화" title="앱, Workflow Builder, Connector를 보안 관점과 함께 이해하기" description="Workflow Builder는 반복 업무를 자동화하는 도구이고, Connector는 외부 서비스 액션을 워크플로 단계(workflow step)로 연결하는 개념입니다. 설정 가능 범위는 워크스페이스 정책과 앱 승인 여부에 따라 달라질 수 있습니다."><SafetyNote /></PageHeader>
      <section className="mx-auto max-w-7xl px-5 py-12"><LessonGrid items={automationLessons} /></section>
    </>
  );
}
