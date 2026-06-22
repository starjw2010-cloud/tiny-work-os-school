import type { UseCase } from "@/types/content";

export const useCases: UseCase[] = [
  {
    id: "project-ops",
    title: "프로젝트 운영",
    situation: "신규 프로젝트가 시작되어 논의, 문서, 실행 항목이 여러 곳에 흩어지기 쉽습니다.",
    relatedTerms: ["channel", "canvas", "lists", "workflow"],
    channelExample: "#proj-renewal",
    operatingTip: "채널에는 논의, Canvas에는 기준, Lists에는 실행 항목, Workflow에는 반복 요청을 둡니다.",
    customerTalkTrack: "프로젝트 채널은 대화방이 아니라 프로젝트 운영실처럼 설계하면 좋습니다.",
    caution: "프로젝트 채널의 공개 범위와 외부 공유 가능 여부를 먼저 확인하세요."
  },
  {
    id: "it-helpdesk",
    title: "IT Helpdesk",
    situation: "IT 요청이 DM과 이메일로 흩어져 처리 상태를 추적하기 어렵습니다.",
    relatedTerms: ["workflow-builder", "form", "connector", "google-sheets-connector"],
    channelExample: "#help-it",
    operatingTip: "요청 접수는 Workflow Form으로 받고, 처리 상태는 채널과 기록 시트에서 확인합니다.",
    customerTalkTrack: "IT 요청은 접수 양식과 상태 공유만 표준화해도 담당자 부담이 크게 줄어듭니다.",
    caution: "자산 정보나 계정 정보 같은 민감정보는 최소한으로 수집하세요."
  },
  {
    id: "sales-customer",
    title: "영업 고객 관리",
    situation: "고객 업데이트와 후속 작업이 개인별 메모에 흩어져 팀 대응이 느려집니다.",
    relatedTerms: ["salesforce-channel", "slack-connect", "file", "thread"],
    channelExample: "#acct-acme-renewal",
    operatingTip: "고객별 채널에 업데이트, 파일, 액션 아이템을 모으고 CRM 권한은 별도로 확인합니다.",
    customerTalkTrack: "영업 채널은 고객 맥락을 팀이 함께 보는 공간입니다.",
    caution: "고객 데이터 보호 정책과 외부 공유 범위를 반드시 확인하세요."
  },
  {
    id: "training-ops",
    title: "교육 운영",
    situation: "교육 신청, 일정, 자료 배포, 피드백 수집이 반복됩니다.",
    relatedTerms: ["workflow", "lists", "canvas", "reminder"],
    channelExample: "#learn-slack-basics",
    operatingTip: "Canvas에 교육 안내를 두고 Lists로 신청 상태를 관리하며 Workflow로 신청 접수를 표준화합니다.",
    customerTalkTrack: "교육 운영은 설명 자료와 신청 흐름을 분리하면 훨씬 깔끔해집니다.",
    caution: "참석자 개인정보와 피드백 보관 위치를 확인하세요."
  },
  {
    id: "external-partners",
    title: "외부 파트너 협업",
    situation: "파트너와 자료를 주고받지만 이메일만으로는 최신 맥락을 맞추기 어렵습니다.",
    relatedTerms: ["slack-connect", "guest", "public-file-sharing", "slack-connect-approval"],
    channelExample: "#ext-partner-launch",
    operatingTip: "외부 협업 채널은 참여자, 파일 공유, 승인 기준을 먼저 정하고 시작합니다.",
    customerTalkTrack: "외부 협업은 채널을 여는 일이 아니라 공유 범위를 설계하는 일입니다.",
    caution: "Slack Connect와 게스트 초대 조건은 플랜과 관리자 정책에 따라 달라질 수 있습니다."
  },
  {
    id: "new-hire",
    title: "신규 입사자 온보딩",
    situation: "신규 입사자가 어디서 무엇을 봐야 하는지 몰라 반복 질문이 생깁니다.",
    relatedTerms: ["workspace", "channel", "profile", "canvas"],
    channelExample: "#onboarding-new-hires",
    operatingTip: "온보딩 Canvas에 첫 주 체크리스트, 필수 채널, 담당자 정보를 정리합니다.",
    customerTalkTrack: "온보딩은 기능 설명보다 첫 주에 어디를 봐야 하는지 알려주는 것이 핵심입니다.",
    caution: "신규 입사자의 기본 채널과 접근 권한은 관리자 정책과 맞춰야 합니다."
  },
  {
    id: "daily-standup",
    title: "일일 스탠드업",
    situation: "매일 같은 질문을 묻고 답하지만 정리와 추적이 어렵습니다.",
    relatedTerms: ["workflow", "form", "channel", "thread"],
    channelExample: "#team-daily",
    operatingTip: "Workflow Form으로 어제 한 일, 오늘 할 일, 막힌 점을 받고 채널에 공유합니다.",
    customerTalkTrack: "반복 질문은 Workflow로 만들면 팀 리듬이 안정됩니다.",
    caution: "너무 많은 질문을 넣으면 제출률이 떨어질 수 있습니다."
  },
  {
    id: "meeting-ops",
    title: "회의 운영",
    situation: "회의 전후 자료와 결정사항이 흩어져 후속 작업이 늦어집니다.",
    relatedTerms: ["huddle", "canvas", "thread", "reminder"],
    channelExample: "#mtg-weekly-planning",
    operatingTip: "Canvas에 안건과 결정사항을 정리하고, 스레드에 질문과 후속 작업을 모읍니다.",
    customerTalkTrack: "회의는 말하는 시간이 아니라 결정과 후속 작업이 남아야 가치가 있습니다.",
    caution: "허들에서 결정한 내용은 기록으로 다시 남기는 습관이 필요합니다."
  },
  {
    id: "automation-request",
    title: "업무 자동화 요청",
    situation: "현업에서 자동화 요청이 들어오지만 우선순위와 가능 범위를 판단하기 어렵습니다.",
    relatedTerms: ["workflow-manager", "app-approval", "connector", "workflow-activity-log"],
    channelExample: "#ops-automation-requests",
    operatingTip: "요청 목적, 필요한 입력값, 연결 시스템, 권한 검토 필요성을 표준 양식으로 받습니다.",
    customerTalkTrack: "자동화 요청은 만들기 전에 업무 규칙과 데이터 흐름을 먼저 정리해야 합니다.",
    caution: "외부 시스템 연결은 앱 승인, 인증, 데이터 정책 검토가 필요할 수 있습니다."
  }
];
