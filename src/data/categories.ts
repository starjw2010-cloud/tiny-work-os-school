import type { TermCategory, TrackId } from "@/types/content";

export const learningCategories: Array<{
  id: TrackId;
  title: string;
  shortTitle: string;
  href: string;
  emoji: string;
  audience: string;
  description: string;
}> = [
  {
    id: "start",
    title: "Slack 시작하기",
    shortTitle: "시작하기",
    href: "/start",
    emoji: "🌱",
    audience: "새 사용자, 온보딩 담당자",
    description: "Workspace, Channel, DM, Thread처럼 처음 꼭 알아야 할 개념을 정리합니다."
  },
  {
    id: "using",
    title: "Slack 사용하기",
    shortTitle: "사용하기",
    href: "/using",
    emoji: "💬",
    audience: "팀원, 매니저",
    description: "메시지, 파일, 검색, 허들, 접근성을 업무 흐름으로 연결해 배웁니다."
  },
  {
    id: "personal-settings",
    title: "프로필과 개인 설정",
    shortTitle: "개인 설정",
    href: "/personal-settings",
    emoji: "✨",
    audience: "모든 사용자",
    description: "알림, 상태, 테마, 시간대, 계정 보안처럼 일하는 리듬을 만드는 설정입니다."
  },
  {
    id: "automation",
    title: "도구 연결과 자동화",
    shortTitle: "자동화",
    href: "/automation",
    emoji: "🧩",
    audience: "운영 담당자, 컨설턴트",
    description: "앱, Marketplace, Workflow Builder, Connector를 보안 관점과 함께 이해합니다."
  },
  {
    id: "admin",
    title: "워크스페이스 관리",
    shortTitle: "관리",
    href: "/admin",
    emoji: "🛡️",
    audience: "관리자, 보안 담당자",
    description: "역할, 권한, 외부 협업, 데이터, Enterprise 조직 관리 기준을 정리합니다."
  },
  {
    id: "tutorials",
    title: "튜토리얼과 실습",
    shortTitle: "실습",
    href: "/tutorials",
    emoji: "📝",
    audience: "교육 담당자, 고객 미팅 담당자",
    description: "공식 튜토리얼 흐름을 고객 교육에서 바로 쓰는 실습 카드로 재구성합니다."
  }
];

export const termCategories: Array<{
  id: TermCategory;
  title: string;
  emoji: string;
  description: string;
}> = [
  { id: "basic", title: "기본 개념", emoji: "🌱", description: "Slack을 처음 이해할 때 필요한 핵심 단어입니다." },
  { id: "using", title: "Slack 사용하기", emoji: "💬", description: "메시지, 채널, 파일, 검색처럼 매일 쓰는 기능입니다." },
  { id: "personal-settings", title: "프로필 및 환경설정", emoji: "✨", description: "알림과 개인 설정으로 일하는 리듬을 맞추는 영역입니다." },
  { id: "automation", title: "도구 연결 및 자동화", emoji: "🧩", description: "앱, 워크플로, 커넥터, 자동화 운영 관련 용어입니다." },
  { id: "collaboration", title: "외부 협업", emoji: "🤝", description: "외부 조직, 게스트, 파트너 협업을 다루는 용어입니다." },
  { id: "admin-security", title: "관리와 보안", emoji: "🛡️", description: "역할, 권한, 보안 설정, 데이터 관리 용어입니다." },
  { id: "governance", title: "거버넌스", emoji: "📏", description: "정책, 감사, 데이터 통제처럼 관리 기준을 세우는 용어입니다." },
  { id: "troubleshooting", title: "문제 해결", emoji: "🧭", description: "접근성, 로그, 오류 확인처럼 운영 중 확인하는 용어입니다." }
];

export function getLearningCategory(id: TrackId) {
  return learningCategories.find((category) => category.id === id) || learningCategories[0];
}

export function getTermCategory(id: TermCategory) {
  return termCategories.find((category) => category.id === id) || termCategories[0];
}
