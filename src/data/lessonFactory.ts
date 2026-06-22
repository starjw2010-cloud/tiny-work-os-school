import { getSource } from "@/data/sources";
import type { LearningLesson, MockupType, TrackId } from "@/types/content";

export function lesson(input: {
  id: string;
  slug: string;
  title: string;
  track: TrackId;
  sourceId: string;
  summary: string;
  whatYouLearn: string[];
  practicalMeaning: string;
  relatedTerms: string[];
  mockupType: MockupType;
  customerTalkTrack: string;
  commonMistake?: string;
  caution?: string;
}): LearningLesson {
  const source = getSource(input.sourceId);

  return {
    id: input.id,
    slug: input.slug,
    title: input.title,
    track: input.track,
    sourceUrl: source.url,
    sourceName: source.name,
    lastVerifiedAt: source.lastVerifiedAt,
    summary: input.summary,
    whatYouLearn: input.whatYouLearn,
    practicalMeaning: input.practicalMeaning,
    relatedTerms: input.relatedTerms,
    mockupType: input.mockupType,
    customerTalkTrack: input.customerTalkTrack,
    commonMistake: input.commonMistake || "기능 이름만 외우고 실제 업무 기준과 권한을 함께 보지 않는 경우입니다.",
    caution: input.caution || "Slack 기능과 사용 범위는 플랜, 관리자 설정, 워크스페이스 정책에 따라 달라질 수 있습니다."
  };
}
