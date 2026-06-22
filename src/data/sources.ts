import type { Source } from "@/types/content";

export const sources: Source[] = [
  {
    id: "start-category",
    name: "Slack Help Center: 시작하기",
    url: "https://slack.com/intl/ko-kr/help/categories/360000049043",
    category: "start",
    area: "시작하기",
    notes: "Slack 소개, 새 사용자 시작, 관리자 시작, 역할과 권한 검토의 상위 기준입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "using-category",
    name: "Slack Help Center: Slack 사용하기",
    url: "https://slack.com/intl/ko-kr/help/categories/200111606",
    category: "using",
    area: "채널, 메시지, 파일, 검색, 허들, 접근성",
    notes: "채널부터 검색까지 Slack의 기본 사용 흐름을 확인하는 상위 기준입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "personal-category",
    name: "Slack Help Center: 프로필 및 환경설정",
    url: "https://slack.com/intl/ko-kr/help/categories/360000047906",
    category: "personal-settings",
    area: "계정, 알림, 환경설정",
    notes: "개인 계정, 알림, 상태, 표시 방식과 보안 설정의 상위 기준입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "automation-category",
    name: "Slack Help Center: 도구 연결 및 작업 자동화",
    url: "https://slack.com/intl/ko-kr/help/categories/360000047926",
    category: "automation",
    area: "앱, Marketplace, Workflow Builder, Connector",
    notes: "앱 연결, 권한, 워크플로, 자동화 관련 학습의 상위 기준입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "admin-category",
    name: "Slack Help Center: 워크스페이스 관리",
    url: "https://slack.com/intl/ko-kr/help/categories/200122103",
    category: "admin",
    area: "멤버, 채널, 권한, 보안, 데이터",
    notes: "관리자, Enterprise 조직, 보안, 앱 관리, 데이터 분석 관련 상위 기준입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "tutorial-category",
    name: "Slack Help Center: 튜토리얼 및 비디오",
    url: "https://slack.com/intl/ko-kr/help/categories/360000049063",
    category: "tutorials",
    area: "실습형 학습 흐름",
    notes: "기능별 설명이 아니라 업무 상황별 학습 흐름을 재구성하기 위한 기준입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "workflow-builder",
    name: "Slack Help Center: Workflow Builder 가이드",
    url: "https://slack.com/help/articles/360035692513-Guide-to-Slack-Workflow-Builder",
    category: "automation",
    area: "Workflow Builder",
    notes: "Workflow, trigger, step, connector 관련 기본 구조 확인용입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "connectors",
    name: "Slack Help Center: Workflow Builder에서 도구 연결",
    url: "https://slack.com/help/articles/15306340911507-Connect-tools-to-automate-tasks-in-Workflow-Builder",
    category: "automation",
    area: "Connector",
    notes: "외부 도구 연결, 계정 인증, 승인 정책 관련 주의사항 확인용입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "lists",
    name: "Slack Help Center: Lists 사용",
    url: "https://slack.com/help/articles/27452748828179-Use-lists-in-Slack",
    category: "using",
    area: "Lists",
    notes: "업무 항목과 상태를 Slack 안에서 정리하는 개념 확인용입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "canvas",
    name: "Slack Help Center: Canvas 사용",
    url: "https://slack.com/help/articles/204145658-Use-canvas-in-Slack",
    category: "using",
    area: "Canvas",
    notes: "긴 정보와 운영 노트를 정리하는 문서형 공간 확인용입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "guest-roles",
    name: "Slack Help Center: 게스트 역할 이해",
    url: "https://slack.com/help/articles/202518103-Understand-guest-roles-in-Slack",
    category: "admin",
    area: "Guest roles",
    notes: "Single-channel Guest, Multi-channel Guest의 접근 범위 확인용입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "roles",
    name: "Slack Help Center: 역할 유형",
    url: "https://slack.com/help/articles/360018112273-Types-of-roles-in-Slack",
    category: "start",
    area: "역할과 권한",
    notes: "Owner, Admin, Member 등 역할 개념 확인용입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "audit-logs",
    name: "Slack Developer Docs: Audit Logs API",
    url: "https://api.slack.com/admins/audit-logs",
    category: "developer-docs",
    area: "Audit Logs",
    notes: "Enterprise 환경의 감사 이벤트 API 확인용입니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "scim",
    name: "Slack Developer Docs: SCIM API",
    url: "https://api.slack.com/admins/scim",
    category: "developer-docs",
    area: "SCIM",
    notes: "사용자 프로비저닝 API 개념 확인용입니다. 사용 조건은 최신 문서 확인이 필요합니다.",
    lastVerifiedAt: "2026-06-22"
  },
  {
    id: "pricing",
    name: "Slack Pricing",
    url: "https://slack.com/intl/ko-kr/pricing",
    category: "pricing",
    area: "플랜",
    notes: "Enterprise+와 플랜별 기능 범위는 변경 가능성이 높아 실제 도입 전 재확인이 필요합니다.",
    lastVerifiedAt: "2026-06-22"
  }
];

export function getSource(id: string) {
  return sources.find((source) => source.id === id) || sources[0];
}
