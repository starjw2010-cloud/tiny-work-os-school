import { getSource } from "@/data/sources";
import { getTermLabel } from "@/data/terms";
import type { LearningModule, LearningPath, MockupType, TrackId } from "@/types/content";

type ModuleSeed = {
  id: string;
  title: string;
  terms: string[];
  mockup: MockupType;
  meaning: string;
  talk: string;
  mistake?: string;
  caution?: string;
};

function module(seed: ModuleSeed): LearningModule {
  const labels = seed.terms.map(getTermLabel);
  return {
    id: seed.id,
    title: seed.title,
    whatYouLearn: [
      `${labels.join(", ")}의 쓰임을 구분합니다.`,
      "어디에서 확인하고 언제 쓰는지 화면 흐름과 연결합니다.",
      "고객 설명 전에 권한, 정책, 사용 범위를 함께 확인합니다."
    ],
    practicalMeaning: seed.meaning,
    relatedTerms: seed.terms,
    screenMockupType: seed.mockup,
    customerTalkTrack: seed.talk,
    commonMistake: seed.mistake || "기능 이름만 외우고 실제 운영 규칙과 권한을 함께 보지 않는 경우입니다.",
    caution: seed.caution || "기능 제공 범위는 플랜, 관리자 설정, 워크스페이스 정책에 따라 달라질 수 있습니다."
  };
}

function path(params: {
  id: TrackId;
  title: string;
  audience: LearningPath["audience"];
  summary: string;
  sourceId: string;
  modules: ModuleSeed[];
}): LearningPath {
  const source = getSource(params.sourceId);
  return {
    id: params.id,
    slug: params.id,
    title: params.title,
    category: params.id,
    audience: params.audience,
    summary: params.summary,
    sourceUrl: source.url,
    sourceName: source.name,
    lastVerifiedAt: source.lastVerifiedAt,
    modules: params.modules.map(module)
  };
}

export const learningPaths: LearningPath[] = [
  path({
    id: "start",
    title: "Slack 시작하기",
    audience: "new-user",
    summary: "Slack을 업무 맥락이 쌓이는 공간으로 이해하고, 새 사용자와 관리자가 처음 정해야 할 기준을 배웁니다.",
    sourceId: "start-category",
    modules: [
      { id: "what-is-slack", title: "Slack이란?", terms: ["slack", "workspace", "channel"], mockup: "workspace", meaning: "채널 중심으로 업무 대화와 기록이 쌓인다는 큰 그림을 잡습니다.", talk: "Slack은 메신저보다 업무 맥락이 쌓이는 공간이라고 설명하면 이해가 빠릅니다." },
      { id: "screen-basics", title: "Slack 화면 이해하기", terms: ["sidebar", "home", "activity"], mockup: "sidebar", meaning: "홈, 사이드바, 활동 영역이 어떤 신호를 보여주는지 이해합니다.", talk: "처음 쓰는 사람은 화면 이름보다 어디서 무엇을 확인하는지부터 익히면 좋습니다." },
      { id: "work-style", title: "Slack에서 일하는 방식", terms: ["channel", "thread", "mention"], mockup: "channel", meaning: "업무 주제는 채널에, 세부 논의는 스레드에, 호출은 멘션으로 나눕니다.", talk: "채널과 스레드만 제대로 써도 대화가 훨씬 덜 흩어집니다." },
      { id: "terms-guide", title: "Slack 용어집", terms: ["dm", "reaction", "bookmark"], mockup: "thread", meaning: "자주 보이는 용어를 업무 상황과 연결해 이해합니다.", talk: "용어를 기능 이름이 아니라 업무 행동으로 설명하면 고객 교육에서 덜 막힙니다." },
      { id: "admin-start", title: "관리자를 위한 시작", terms: ["workspace-admin", "channel-naming-guidelines", "app-approval"], mockup: "admin", meaning: "관리자는 채널 구조와 앱 승인 기준을 먼저 정해야 합니다.", talk: "Slack 관리는 기능 관리보다 누가 무엇을 할 수 있는지 정하는 일에 가깝습니다." },
      { id: "new-user-start", title: "새 사용자를 위한 시작", terms: ["profile", "notification", "status"], mockup: "profile", meaning: "프로필, 알림, 상태를 먼저 맞추면 협업 신호가 깔끔해집니다.", talk: "새 사용자는 모든 기능보다 알림과 채널 사용 습관부터 잡는 것이 좋습니다." },
      { id: "roles", title: "역할 및 권한 검토", terms: ["role", "permission", "system-role"], mockup: "role-permission", meaning: "역할은 누가 무엇을 볼 수 있고 바꿀 수 있는지 결정합니다.", talk: "고객에게는 역할 이름보다 실제 권한 범위와 플랜 조건을 함께 확인하자고 안내합니다." }
    ]
  }),
  path({
    id: "using",
    title: "Slack 사용하기",
    audience: "all",
    summary: "채널, 메시지, 파일, 검색, 허들, 접근성을 실제 업무 흐름으로 익힙니다.",
    sourceId: "using-category",
    modules: [
      { id: "channels-dm", title: "채널과 DM 구분하기", terms: ["channel", "dm", "private-channel"], mockup: "channel", meaning: "팀이 함께 알아야 할 일은 채널에, 짧고 제한된 조율은 DM에 둡니다.", talk: "중요한 결정이 DM에만 남지 않도록 채널 운영 기준을 세우는 것이 핵심입니다." },
      { id: "good-messages", title: "메시지 잘 쓰기", terms: ["message-field", "message-formatting", "link-preview"], mockup: "message-composer", meaning: "메시지는 읽기 쉬운 구조와 필요한 맥락을 함께 담아야 합니다.", talk: "좋은 메시지는 짧은 문장보다 다음 사람이 바로 행동할 수 있는 문장입니다." },
      { id: "threads-mentions", title: "스레드와 멘션으로 대화 정리하기", terms: ["thread", "mention", "user-group"], mockup: "thread", meaning: "스레드는 세부 논의, 멘션은 정확한 호출에 사용합니다.", talk: "멘션은 알림을 만드는 도구라서 적게, 정확히 쓰는 편이 좋습니다." },
      { id: "files-knowledge", title: "파일, 캔버스, 리스트로 업무 맥락 정리하기", terms: ["file", "canvas", "lists"], mockup: "canvas", meaning: "대화에서 나온 기준과 실행 항목을 문서와 리스트로 남깁니다.", talk: "채널은 흐름, Canvas는 기준, Lists는 실행 항목으로 설명하면 명확합니다." },
      { id: "search", title: "검색으로 다시 찾기", terms: ["search", "search-modifier", "files"], mockup: "search", meaning: "검색 한정자로 대화와 파일을 빠르게 좁혀 찾습니다.", talk: "Slack의 가치는 대화가 끝난 뒤에도 다시 찾을 수 있다는 데 있습니다." },
      { id: "huddles-clips", title: "허들과 클립으로 빠르게 대화하기", terms: ["huddle", "clip", "caption"], mockup: "huddle", meaning: "짧은 실시간 논의와 비동기 설명을 상황에 맞게 선택합니다.", talk: "허들은 빠른 결정에 좋지만 결정 기록은 채널이나 Canvas에 남겨야 합니다." },
      { id: "shortcuts-accessibility", title: "키보드 바로 가기와 접근성", terms: ["keyboard-shortcut", "accessibility", "alt-text"], mockup: "tutorial", meaning: "빠른 조작과 접근성은 팀 전체의 사용 품질을 높입니다.", talk: "접근성은 일부 사용자를 위한 부가기능이 아니라 협업 품질의 기본입니다." },
      { id: "troubleshooting", title: "문제 해결 기본 팁", terms: ["notification", "access-log", "simple-layout-mode"], mockup: "notification", meaning: "알림, 접속, 화면 설정 문제를 기본 순서로 확인합니다.", talk: "문제가 생기면 기능 오류인지 개인 설정 문제인지 먼저 나눠서 봅니다." }
    ]
  }),
  path({
    id: "personal-settings",
    title: "프로필과 개인 설정",
    audience: "all",
    summary: "알림을 줄이고 중요한 신호를 놓치지 않도록 개인 설정을 업무 리듬에 맞춥니다.",
    sourceId: "personal-category",
    modules: [
      { id: "account", title: "계정 관리", terms: ["profile", "display-name", "sso-account"], mockup: "profile", meaning: "계정 정보와 표시 이름은 협업 상대가 나를 이해하는 기본 정보입니다.", talk: "프로필은 예쁘게 꾸미는 화면이 아니라 협업 맥락을 알려주는 정보입니다." },
      { id: "notifications", title: "알림 조정", terms: ["notification", "do-not-disturb", "mute"], mockup: "notification", meaning: "중요한 신호를 놓치지 않되 불필요한 알림은 줄입니다.", talk: "Slack을 잘 쓰려면 알림을 많이 받는 것이 아니라 필요한 알림만 받는 것이 중요합니다." },
      { id: "preferences", title: "설정 및 환경설정 변경", terms: ["theme", "sidebar-section", "simple-layout-mode"], mockup: "sidebar-settings", meaning: "화면과 사이드바를 자기 업무 흐름에 맞게 정리합니다.", talk: "개인 설정은 생산성을 위한 작은 운영 체계입니다." },
      { id: "profile-status", title: "프로필과 상태", terms: ["status", "availability", "time-zone"], mockup: "profile", meaning: "상태와 시간대는 글로벌 협업에서 응답 기대치를 맞춥니다.", talk: "상태 설정은 팀원에게 지금 어떻게 연락하면 좋은지 알려주는 신호입니다." },
      { id: "security", title: "액세스 로그와 계정 보안", terms: ["access-log", "two-factor-authentication", "sso-account"], mockup: "account-security", meaning: "내 계정의 접속 기록과 보안 설정을 확인합니다.", talk: "개인 보안 설정은 관리자 정책과 함께 움직입니다." }
    ]
  }),
  path({
    id: "automation",
    title: "도구 연결과 자동화",
    audience: "consultant",
    summary: "앱, Marketplace, Workflow Builder, Connector, AI 관련 개념을 보안 검토와 함께 이해합니다.",
    sourceId: "automation-category",
    modules: [
      { id: "apps-marketplace", title: "Slack 앱과 Marketplace 이해하기", terms: ["slack-app", "slack-marketplace", "custom-integration"], mockup: "marketplace", meaning: "앱은 외부 도구를 Slack의 업무 흐름과 연결합니다.", talk: "앱은 편리하지만 권한과 데이터 접근 범위가 먼저 검토되어야 합니다." },
      { id: "app-permissions", title: "앱 권한과 설치 승인", terms: ["app-permission", "app-approval", "app-management"], mockup: "marketplace", meaning: "앱 설치 전 어떤 데이터에 접근하는지 확인합니다.", talk: "앱 승인 절차는 보안을 느리게 하는 장치가 아니라 안전한 협업의 기준입니다." },
      { id: "workflow-basics", title: "Workflow Builder 기본 구조", terms: ["workflow-builder", "workflow", "trigger"], mockup: "workflow", meaning: "워크플로는 시작 조건과 실행 단계로 구성됩니다.", talk: "Workflow Builder는 반복 요청과 안내 업무를 표준화하는 데 특히 좋습니다." },
      { id: "steps-branch", title: "Trigger, Step, Branch 이해하기", terms: ["step", "form", "branch"], mockup: "workflow", meaning: "입력, 메시지, 조건 분기를 작게 나누어 설계합니다.", talk: "Form은 트리거가 아니라 필요한 정보를 받는 단계라고 설명하면 오해가 줄어듭니다." },
      { id: "connectors-auth", title: "Connector와 타사 계정 인증", terms: ["connector", "connector-step", "third-party-authentication"], mockup: "connector", meaning: "외부 서비스 액션은 인증과 승인 정책 안에서 실행됩니다.", talk: "연결은 기술 문제가 아니라 권한과 데이터 흐름 문제까지 포함합니다." },
      { id: "sheets", title: "Google Sheets와 Workflow 연결", terms: ["google-sheets-connector", "workflow-activity-log", "workflow-manager"], mockup: "connector", meaning: "신청 내역 저장은 유용하지만 테스트 시트 검증이 필요합니다.", talk: "운영 전에는 반드시 테스트 시트에서 행 추가 위치와 권한을 확인해야 합니다." },
      { id: "ai-agent", title: "AI Agent, Slackbot, MCP 개념", terms: ["ai-agent", "slackbot", "mcp"], mockup: "connector", meaning: "빠르게 변하는 기능은 최신 문서와 관리자 정책을 함께 확인합니다.", talk: "AI 관련 기능은 가능 여부를 단정하지 않고 최신 기준 확인 항목으로 다룹니다." },
      { id: "workflow-ops", title: "Workflow 활동 로그와 운영 관리", terms: ["workflow-activity-log", "workflow-manager", "webhook"], mockup: "admin", meaning: "자동화는 만든 뒤 실행 이력과 예외를 운영해야 합니다.", talk: "좋은 워크플로는 만드는 것보다 운영 중 실패를 확인할 수 있는 구조가 중요합니다." }
    ]
  }),
  path({
    id: "admin",
    title: "워크스페이스 관리",
    audience: "admin",
    summary: "권한, 정책, 외부 협업, 데이터, Enterprise 조직 관리를 고객에게 설명하기 좋은 표현으로 정리합니다.",
    sourceId: "admin-category",
    modules: [
      { id: "members", title: "멤버 초대와 계정 관리", terms: ["member-management", "member", "guest"], mockup: "member-admin", meaning: "입사, 이동, 퇴사에 맞춰 접근 권한을 관리합니다.", talk: "관리의 핵심은 누가 지금 들어와 있고 무엇을 볼 수 있는지입니다." },
      { id: "roles", title: "역할 변경과 권한 구조", terms: ["role", "system-role", "workspace-admin"], mockup: "role-permission", meaning: "역할은 워크스페이스, 조직, 시스템 역할의 층으로 나누어 설명해야 합니다.", talk: "역할 이름만으로 판단하지 말고 가능한 작업, 적용 범위, 플랜 조건을 함께 확인해야 합니다." },
      { id: "channels", title: "채널 관리와 채널명 규칙", terms: ["channel-management-tool", "channel-manager", "channel-naming-guidelines"], mockup: "channel-admin", meaning: "채널이 많아질수록 이름 규칙과 정리 기준이 필요합니다.", talk: "채널 구조는 Slack 운영의 정보 구조입니다." },
      { id: "connect", title: "Slack Connect 승인과 외부 공유 관리", terms: ["slack-connect", "slack-connect-approval", "public-file-sharing"], mockup: "connect-policy", meaning: "외부 협업은 승인, 파일, 데이터 정책과 함께 봐야 합니다.", talk: "외부 협업은 채널을 여는 일이 아니라 공유 범위를 설계하는 일입니다." },
      { id: "shared-assets", title: "파일·Canvas·Lists 공유 정책", terms: ["canvas-settings", "lists-settings", "public-file-sharing"], mockup: "data-policy", meaning: "업무 지식과 파일이 어디까지 공유되는지 통제합니다.", talk: "Canvas와 Lists는 편리하지만 외부 공유 정책을 같이 확인해야 합니다." },
      { id: "apps-workflows", title: "앱과 워크플로 관리", terms: ["app-management", "workflow-manager", "app-approval"], mockup: "marketplace", meaning: "앱과 워크플로는 권한과 운영 책임자를 정해야 합니다.", talk: "자동화는 누가 만들고 누가 고치는지도 함께 정해야 합니다." },
      { id: "security-ai", title: "Slack AI, DLP, 보안 설정", terms: ["slack-ai-access", "dlp", "two-factor-authentication"], mockup: "security", meaning: "민감정보, AI 접근, 계정 보안을 정책으로 관리합니다.", talk: "AI와 DLP는 고객 환경별 정책 차이가 크므로 확인 항목으로 다뤄야 합니다." },
      { id: "enterprise", title: "Enterprise+와 Enterprise 조직 단위 관리", terms: ["enterprise-plus", "enterprise-organization", "org-admin"], mockup: "enterprise-plus", meaning: "요금제에 따라 Workspace 위에 Enterprise 조직과 조직 역할이 등장할 수 있습니다.", talk: "Enterprise 조직은 여러 워크스페이스와 조직 수준 정책을 관리하는 상위 단위로 설명합니다." },
      { id: "data", title: "데이터, 감사 로그, 분석", terms: ["data-analytics", "audit-log", "data-retention"], mockup: "analytics", meaning: "운영 데이터와 감사 이벤트는 권한과 플랜 기준 안에서 확인합니다.", talk: "데이터 관리는 보고서가 아니라 보안과 운영 의사결정의 근거입니다." }
    ]
  }),
  path({
    id: "tutorials",
    title: "튜토리얼과 실습",
    audience: "manager",
    summary: "기능 설명을 고객 교육에서 바로 따라 할 수 있는 과제형 카드로 바꿉니다.",
    sourceId: "tutorial-category",
    modules: [
      { id: "find-start", title: "대화 찾고 시작하기", terms: ["search", "channel", "dm"], mockup: "tutorial", meaning: "대화를 시작하기 전 적절한 공간을 찾습니다.", talk: "먼저 어디에 남길 이야기인지 정하면 Slack 사용 품질이 올라갑니다." },
      { id: "collab-channel", title: "채널에서 효율적으로 협업하기", terms: ["channel-topic", "thread", "pin"], mockup: "channel", meaning: "채널 목적, 스레드, 고정 항목으로 협업 흐름을 만듭니다.", talk: "좋은 채널은 대화방이 아니라 작은 업무 공간처럼 운영됩니다." },
      { id: "find-info", title: "필요한 정보 빠르게 찾기", terms: ["search-modifier", "bookmark", "files"], mockup: "search", meaning: "검색과 북마크로 반복 질문을 줄입니다.", talk: "정보 찾기 훈련은 Slack 온보딩에서 가장 빠르게 체감되는 부분입니다." },
      { id: "standup", title: "일일 스탠드업 만들기", terms: ["workflow", "form", "channel"], mockup: "workflow", meaning: "반복 공유를 워크플로와 채널로 표준화합니다.", talk: "매일 묻는 질문은 자동화 후보입니다." }
    ]
  })
];

export function getLearningPath(id: TrackId) {
  return learningPaths.find((path) => path.id === id);
}
