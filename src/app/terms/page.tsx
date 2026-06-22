import { PageHeader } from "@/components/PageHeader";
import { TermsExplorer } from "@/components/TermsExplorer";
import { terms } from "@/data/terms";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="용어 사전" title="Slack 용어를 업무 예시와 함께 살펴보기" description="각 용어는 한 줄 설명, 실무 예시, 고객 미팅 설명, 주의사항, 출처와 factStatus를 함께 제공합니다." />
      <section className="mx-auto max-w-7xl px-5 py-10"><TermsExplorer terms={terms} /></section>
    </>
  );
}
