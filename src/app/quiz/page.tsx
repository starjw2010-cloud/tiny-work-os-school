import { PageHeader } from "@/components/PageHeader";
import { QuizClient } from "@/components/QuizClient";
import { quizzes } from "@/data/quizzes";

export default function QuizPage() {
  return (
    <>
      <PageHeader eyebrow="퀴즈" title="Slack 개념을 가볍게 점검하기" description="객관식 12문제로 채널, 워크플로, 외부 협업, 관리자/보안 개념을 확인합니다. 외부 API 없이 정적 데이터로 동작합니다." />
      <section className="mx-auto max-w-5xl px-5 py-10"><QuizClient quizzes={quizzes} /></section>
    </>
  );
}
