import { getSource } from "@/data/sources";
import type { FactStatus, MockupType, Term, TermCategory } from "@/types/content";

type TermSeed = {
  slug: string;
  term: string;
  koreanName: string;
  category: TermCategory;
  oneLine: string;
  businessExample: string;
  sourceId: string;
  factStatus?: FactStatus;
  screenMockupType: MockupType;
  plainExplanation?: string;
  easyAnalogy?: string;
  customerTalkTrack?: string;
  commonMistake?: string;
  caution?: string;
  relatedTerms?: string[];
};

const planCaution = "사용 가능 범위는 플랜, 관리자 설정, 워크스페이스 정책, Enterprise 조직 설정에 따라 달라질 수 있습니다. 실제 도입 전 고객 환경에서 확인하세요.";
const securityCaution = "권한, 데이터 접근, 외부 공유, 보존 정책은 조직의 보안 기준과 관리자 설정에 따라 달라질 수 있습니다.";
const workflowCaution = "Workflow Builder와 Connector 기능은 워크스페이스 정책, 앱 승인, 외부 계정 인증 여부에 따라 설정 방식이 달라질 수 있습니다.";
const enterpriseGridCaution = "일부 도움말 문서와 기존 자료에는 Enterprise Grid 표현이 남아 있을 수 있습니다. 이 사이트에서는 고객에게 설명할 때 Enterprise+와 Enterprise 조직 표현을 우선 사용합니다.";

const defaultRelated: Record<TermCategory, string[]> = {
  basic: ["workspace", "channel", "thread"],
  using: ["channel", "message-field", "search"],
  "personal-settings": ["profile", "notification", "status"],
  automation: ["workflow-builder", "trigger", "connector"],
  collaboration: ["slack-connect", "guest", "channel"],
  "admin-security": ["role", "permission", "member"],
  governance: ["enterprise-plus", "audit-log", "data-retention"],
  troubleshooting: ["access-log", "notification", "search"]
};

const directlyVerifiedSourceIds = new Set(["canvas", "lists", "guest-roles", "roles", "pricing", "slack-connect", "ekm", "slackbot"]);

function makeTerm(seed: TermSeed): Term {
  const source = getSource(seed.sourceId);
  const relatedTerms = seed.relatedTerms || defaultRelated[seed.category].filter((slug) => slug !== seed.slug).slice(0, 3);
  const defaultFactStatus: FactStatus = directlyVerifiedSourceIds.has(seed.sourceId) ? "verified" : "needs-review";

  return {
    id: seed.slug,
    slug: seed.slug,
    term: seed.term,
    koreanName: seed.koreanName,
    category: seed.category,
    oneLine: seed.oneLine,
    plainExplanation:
      seed.plainExplanation ||
      `${seed.koreanName}은 Slack 안에서 업무 맥락을 이해하거나 운영할 때 자주 만나는 개념입니다. 이름보다 “언제 쓰는가”를 함께 기억하면 훨씬 쉽습니다.`,
    easyAnalogy:
      seed.easyAnalogy ||
      `업무 흐름 안에서 이 개념이 어떤 문제를 줄여주는지 보면 이해하기 쉽습니다. 기능 이름보다 사용되는 상황을 함께 보는 편이 좋습니다.`,
    businessExample: seed.businessExample,
    customerTalkTrack:
      seed.customerTalkTrack ||
      `${seed.koreanName}은 Slack에서 대화, 기록, 실행이 어떻게 이어지는지 설명할 때 함께 짚어볼 만한 개념입니다.`,
    commonMistake:
      seed.commonMistake ||
      `${seed.koreanName}을 이름만 보고 모든 워크스페이스에서 같은 방식으로 동작한다고 이해하기 쉽습니다. 실제 사용 범위는 설정과 권한을 함께 확인해야 합니다.`,
    caution: seed.caution || planCaution,
    relatedTerms,
    sourceUrl: source.url,
    sourceName: source.name,
    lastVerifiedAt: source.lastVerifiedAt,
    factStatus: seed.factStatus || defaultFactStatus,
    screenMockupType: seed.screenMockupType
  };
}

const seeds: TermSeed[] = [
  {
    slug: "slack",
    term: "Slack",
    koreanName: "Slack",
    category: "basic",
    oneLine: "채널 중심으로 대화, 파일, 문서, 워크플로, 앱이 연결되는 업무 실행 환경입니다.",
    plainExplanation: "Slack은 단순 메신저라기보다 업무 주제별 맥락이 쌓이고 다시 찾을 수 있는 협업 공간입니다.",
    easyAnalogy: "회사 안의 회의실, 게시판, 자료실, 간단한 업무 자동화가 한곳에 연결된 작은 업무 캠퍼스에 가깝습니다.",
    businessExample: "프로젝트 채널에서 논의하고, Canvas에 기준을 정리하고, Workflow로 반복 요청을 처리합니다.",
    customerTalkTrack: "Slack은 대화가 흘러가고 끝나는 공간이 아니라, 채널 중심으로 업무 맥락과 실행 기록이 쌓이는 환경입니다.",
    commonMistake: "Slack을 이메일이나 메신저 대체재 하나로만 설명하는 것입니다.",
    sourceId: "start-category",
    screenMockupType: "workspace",
    relatedTerms: ["workspace", "channel", "workflow-builder"]
  },
  { slug: "workspace", term: "Workspace", koreanName: "워크스페이스", category: "basic", oneLine: "팀이나 조직이 Slack에서 함께 일하는 기본 공간입니다.", businessExample: "회사 전체가 하나의 워크스페이스를 쓰고 부서별 채널을 운영합니다.", sourceId: "start-category", screenMockupType: "workspace", relatedTerms: ["channel", "member", "enterprise-organization"] },
  { slug: "channel", term: "Channel", koreanName: "채널", category: "basic", oneLine: "업무 주제별로 대화, 파일, 결정사항이 모이는 공간입니다.", businessExample: "#proj-renewal 채널에 회의록, 파일, 액션 아이템을 모읍니다.", sourceId: "using-category", screenMockupType: "channel", relatedTerms: ["thread", "mention", "public-channel"] },
  { slug: "dm", term: "DM", koreanName: "다이렉트 메시지", category: "basic", oneLine: "특정 사람이나 소수에게 직접 보내는 대화입니다.", businessExample: "짧은 일정 확인이나 민감한 초안을 먼저 공유할 때 사용합니다.", sourceId: "using-category", screenMockupType: "channel", relatedTerms: ["channel", "thread", "member"] },
  { slug: "sidebar", term: "Sidebar", koreanName: "사이드바", category: "basic", oneLine: "채널, DM, 앱, 섹션을 빠르게 찾는 왼쪽 탐색 영역입니다.", businessExample: "자주 보는 프로젝트 채널을 섹션으로 묶어 빠르게 이동합니다.", sourceId: "using-category", screenMockupType: "sidebar", relatedTerms: ["sidebar-section", "channel", "favorite"] },
  { slug: "home", term: "Home", koreanName: "홈", category: "basic", oneLine: "대화와 업무 항목으로 이동하는 시작 화면입니다.", businessExample: "아침에 홈에서 읽지 않은 대화와 필요한 알림을 확인합니다.", sourceId: "start-category", screenMockupType: "workspace" },
  { slug: "activity", term: "Activity", koreanName: "활동", category: "basic", oneLine: "멘션, 반응, 스레드 답글처럼 나에게 온 주요 신호를 모아보는 영역입니다.", businessExample: "내 이름이 언급된 요청과 답글을 활동에서 빠르게 확인합니다.", sourceId: "using-category", screenMockupType: "notification", relatedTerms: ["mention", "thread", "notification"] },
  { slug: "files", term: "Files", koreanName: "파일 모음", category: "basic", oneLine: "Slack에서 공유된 문서, 이미지, 자료를 다시 찾는 자료 영역입니다.", businessExample: "지난 제안서 PDF를 프로젝트 채널의 파일 기록에서 찾습니다.", sourceId: "using-category", screenMockupType: "file-share", relatedTerms: ["file", "search", "channel"] },
  { slug: "message-field", term: "Message Field", koreanName: "메시지 입력창", category: "basic", oneLine: "대화, 파일, 링크, 멘션, 서식을 입력하는 작성 공간입니다.", businessExample: "업데이트 메시지에 담당자 멘션과 문서 링크를 함께 넣습니다.", sourceId: "using-category", screenMockupType: "message-composer", relatedTerms: ["message-formatting", "mention", "file"] },
  { slug: "mention", term: "Mention", koreanName: "멘션", category: "basic", oneLine: "@이름이나 @그룹으로 특정 사람의 주의를 부르는 방식입니다.", businessExample: "@manager 님에게 승인 기준 확인을 요청합니다.", sourceId: "using-category", screenMockupType: "mention", relatedTerms: ["user-group", "notification", "thread"] },
  { slug: "thread", term: "Thread", koreanName: "스레드", category: "basic", oneLine: "하나의 메시지에 대한 세부 답글을 모아두는 공간입니다.", businessExample: "공지 메시지 아래 스레드에 질문과 후속 작업을 모읍니다.", sourceId: "using-category", screenMockupType: "thread", relatedTerms: ["channel", "mention", "reaction"] },
  { slug: "reaction", term: "Reaction", koreanName: "반응", category: "basic", oneLine: "메시지에 이모지로 확인, 동의, 상태를 표시하는 방식입니다.", businessExample: "처리 완료된 요청에 체크 반응을 달아 상태를 표시합니다.", sourceId: "using-category", screenMockupType: "mention", relatedTerms: ["emoji-reaction", "workflow", "message-field"] },
  { slug: "saved-item", term: "Later", koreanName: "나중에 볼 항목", category: "basic", oneLine: "나중에 다시 확인할 메시지나 파일을 개인적으로 표시해두는 항목입니다.", businessExample: "다음 회의에서 확인할 정책 링크를 나중에 볼 항목으로 남겨둡니다.", sourceId: "using-category", screenMockupType: "sidebar", factStatus: "needs-review" },
  { slug: "pin", term: "Pin", koreanName: "고정", category: "basic", oneLine: "채널에서 중요한 메시지나 파일을 팀이 쉽게 찾도록 고정하는 방식입니다.", businessExample: "프로젝트 목표와 일정 안내 메시지를 채널에 고정합니다.", sourceId: "using-category", screenMockupType: "channel", relatedTerms: ["bookmark", "channel", "files"] },
  { slug: "bookmark", term: "Bookmark", koreanName: "북마크", category: "basic", oneLine: "자주 쓰는 링크와 자료를 채널에서 빠르게 찾도록 모아두는 방식입니다.", businessExample: "대시보드, 운영 문서, 회의록 링크를 채널 북마크로 정리합니다.", sourceId: "using-category", screenMockupType: "channel", relatedTerms: ["pin", "tab", "canvas"] },
  { slug: "tab", term: "Tab", koreanName: "탭", category: "basic", oneLine: "채널에서 관련 도구나 정보를 전환해 보는 상단 항목입니다.", businessExample: "채널 안에서 Canvas, Lists, 파일 정보를 탭으로 확인합니다.", sourceId: "using-category", screenMockupType: "channel", relatedTerms: ["canvas", "lists", "bookmark"] },
  { slug: "public-channel", term: "Public Channel", koreanName: "공개 채널", category: "basic", oneLine: "워크스페이스 멤버가 찾고 참여할 수 있는 공개 범위의 채널입니다.", businessExample: "전사 공지나 공개 프로젝트 논의를 공개 채널에서 운영합니다.", sourceId: "using-category", screenMockupType: "channel", caution: securityCaution, relatedTerms: ["private-channel", "general-channel", "channel"] },
  { slug: "private-channel", term: "Private Channel", koreanName: "비공개 채널", category: "basic", oneLine: "초대된 사람만 볼 수 있는 제한된 채널입니다.", businessExample: "민감한 계약 검토를 초대된 담당자만 있는 비공개 채널에서 진행합니다.", sourceId: "using-category", screenMockupType: "channel", caution: securityCaution, relatedTerms: ["public-channel", "permission", "channel"] },
  { slug: "general-channel", term: "General Channel", koreanName: "일반 채널", category: "basic", oneLine: "워크스페이스의 넓은 공지나 기본 안내에 쓰이는 대표 채널입니다.", businessExample: "전사 안내와 기본 온보딩 공지를 일반 채널에 게시합니다.", sourceId: "using-category", screenMockupType: "channel", caution: "게시 권한과 사용 규칙을 명확히 하지 않으면 모든 공지가 섞여 읽기 어려워질 수 있습니다.", relatedTerms: ["posting-permission", "public-channel", "channel"] },

  { slug: "channel-topic", term: "Channel Topic", koreanName: "채널 주제", category: "using", oneLine: "채널에서 지금 다루는 핵심 목적을 짧게 보여주는 설명입니다.", businessExample: "프로젝트 채널 주제에 이번 분기 출시 범위와 담당자를 적습니다.", sourceId: "using-category", screenMockupType: "channel" },
  { slug: "channel-description", term: "Channel Description", koreanName: "채널 설명", category: "using", oneLine: "채널의 용도, 참여 기준, 운영 규칙을 설명하는 문구입니다.", businessExample: "IT Helpdesk 채널 설명에 요청 양식과 운영 시간을 안내합니다.", sourceId: "using-category", screenMockupType: "channel" },
  { slug: "archive", term: "Archive", koreanName: "보관", category: "using", oneLine: "더 이상 활발히 쓰지 않는 채널을 기록으로 남기고 정리하는 방식입니다.", businessExample: "종료된 캠페인 채널을 보관해 검색 가능한 기록으로 남깁니다.", sourceId: "using-category", screenMockupType: "channel" },
  { slug: "channel-template", term: "Channel Template", koreanName: "채널 템플릿", category: "using", oneLine: "반복되는 업무 채널을 일정한 구조로 시작하게 돕는 틀입니다.", businessExample: "신규 프로젝트 채널을 만들 때 목표, 일정, 담당자 섹션을 템플릿으로 포함합니다.", sourceId: "using-category", screenMockupType: "channel", factStatus: "unstable" },
  { slug: "message-formatting", term: "Message Formatting", koreanName: "메시지 서식", category: "using", oneLine: "굵게, 목록, 코드, 인용 등 메시지를 읽기 쉽게 만드는 표현 방식입니다.", businessExample: "회의 요약을 제목, 목록, 체크 항목으로 정리해 게시합니다.", sourceId: "using-category", screenMockupType: "message-composer" },
  { slug: "emoji-reaction", term: "Emoji Reaction", koreanName: "이모지 반응", category: "using", oneLine: "이모지로 확인, 승인, 감정, 상태를 가볍게 표시하는 기능입니다.", businessExample: "공지 확인자는 눈 모양 반응을, 완료자는 체크 반응을 남기도록 팀 규칙을 정합니다.", sourceId: "using-category", screenMockupType: "mention", relatedTerms: ["reaction", "workflow", "trigger"] },
  { slug: "user-group", term: "User Group", koreanName: "사용자 그룹", category: "using", oneLine: "여러 사람을 하나의 그룹 멘션으로 부르는 설정입니다.", businessExample: "@sales-leads 그룹을 멘션해 영업 리더들에게 동시에 확인을 요청합니다.", sourceId: "admin-category", screenMockupType: "mention", caution: securityCaution },
  { slug: "reminder", term: "Reminder", koreanName: "리마인더", category: "using", oneLine: "나중에 해야 할 일을 Slack 안에서 다시 알려주는 알림입니다.", businessExample: "금요일 오후에 주간 보고 작성 알림을 받도록 설정합니다.", sourceId: "using-category", screenMockupType: "notification" },
  { slug: "favorite", term: "Favorite", koreanName: "즐겨찾기", category: "using", oneLine: "자주 보는 채널이나 대화를 빠르게 찾도록 표시하는 방식입니다.", businessExample: "운영 채널과 팀 채널을 즐겨찾기에 두고 매일 확인합니다.", sourceId: "using-category", screenMockupType: "sidebar" },
  { slug: "file", term: "File", koreanName: "파일", category: "using", oneLine: "대화 맥락 안에서 공유되는 문서, 이미지, 자료입니다.", businessExample: "계약서 초안과 수정 의견을 같은 채널에 함께 공유합니다.", sourceId: "using-category", screenMockupType: "file-share", relatedTerms: ["files", "search", "link-preview"] },
  { slug: "link-preview", term: "Link Preview", koreanName: "링크 미리보기", category: "using", oneLine: "공유한 링크의 제목과 요약 정보를 메시지 안에 보여주는 기능입니다.", businessExample: "문서 링크를 공유하면 어떤 자료인지 바로 확인할 수 있습니다.", sourceId: "using-category", screenMockupType: "file-share", caution: "링크 미리보기 노출과 외부 링크 정책은 워크스페이스 설정에 따라 달라질 수 있습니다." },
  { slug: "snippet", term: "Snippet", koreanName: "스니펫", category: "using", oneLine: "짧은 코드나 텍스트 조각을 대화에서 보기 좋게 공유하는 방식입니다.", businessExample: "장애 대응 중 로그 일부를 스니펫으로 공유해 가독성을 높입니다.", sourceId: "using-category", screenMockupType: "message-composer" },
  { slug: "alt-text", term: "Alt Text", koreanName: "대체 텍스트", category: "using", oneLine: "이미지 내용을 스크린 리더나 접근성 도구가 이해하도록 설명하는 텍스트입니다.", businessExample: "캠페인 이미지에 핵심 내용 설명을 넣어 모두가 정보를 이해하게 합니다.", sourceId: "using-category", screenMockupType: "file-share", relatedTerms: ["accessibility", "file", "caption"] },
  { slug: "search", term: "Search", koreanName: "검색", category: "using", oneLine: "Slack에 쌓인 대화, 파일, 사람, 업무 기록을 다시 찾는 기능입니다.", businessExample: "지난달 고객 이슈를 채널과 작성자로 좁혀 찾습니다.", sourceId: "using-category", screenMockupType: "search", relatedTerms: ["search-modifier", "files", "channel"] },
  { slug: "search-modifier", term: "Search Modifier", koreanName: "검색 한정자", category: "using", oneLine: "in:, from:, has:처럼 검색 결과를 좁히는 조건입니다.", businessExample: "in:proj-renewal from:@jiwon has:link로 특정 채널의 링크 공유를 찾습니다.", sourceId: "using-category", screenMockupType: "search", relatedTerms: ["search", "channel", "file"] },
  { slug: "huddle", term: "Huddle", koreanName: "허들", category: "using", oneLine: "채널이나 DM에서 빠르게 음성 또는 실시간 대화를 시작하는 기능입니다.", businessExample: "장애 대응 중 담당자들이 채널에서 바로 허들을 열어 상황을 맞춥니다.", sourceId: "using-category", screenMockupType: "huddle", factStatus: "unstable" },
  { slug: "huddle-link", term: "Huddle Link", koreanName: "허들 링크", category: "using", oneLine: "허들 참여를 쉽게 공유하기 위한 링크 개념입니다.", businessExample: "회의 채널에 허들 링크를 공유해 관련 담당자가 빠르게 들어오게 합니다.", sourceId: "using-category", screenMockupType: "huddle", factStatus: "needs-review" },
  { slug: "huddle-notes", term: "Huddle Notes", koreanName: "허들 노트", category: "using", oneLine: "허들에서 나온 논의나 결정사항을 정리하는 기록입니다.", businessExample: "짧은 음성 논의 후 결정사항을 허들 노트로 남깁니다.", sourceId: "using-category", screenMockupType: "huddle", factStatus: "unstable" },
  { slug: "clip", term: "Clip", koreanName: "클립", category: "using", oneLine: "짧은 영상이나 음성으로 비동기 설명을 남기는 방식입니다.", businessExample: "디자인 변경 사항을 짧은 화면 녹화 클립으로 공유합니다.", sourceId: "using-category", screenMockupType: "huddle", factStatus: "needs-review" },
  { slug: "caption", term: "Caption", koreanName: "캡션", category: "using", oneLine: "영상이나 음성 내용을 텍스트로 이해하도록 돕는 자막 정보입니다.", businessExample: "글로벌 팀원이 클립 내용을 텍스트로 확인할 수 있게 캡션을 활용합니다.", sourceId: "using-category", screenMockupType: "huddle", factStatus: "needs-review" },
  { slug: "keyboard-shortcut", term: "Keyboard Shortcut", koreanName: "키보드 바로 가기", category: "using", oneLine: "마우스 이동 없이 빠르게 Slack을 조작하는 키 입력입니다.", businessExample: "검색, 채널 전환, 메시지 작성에 단축키를 써서 시간을 줄입니다.", sourceId: "using-category", screenMockupType: "tutorial" },
  { slug: "accessibility", term: "Accessibility", koreanName: "접근성", category: "using", oneLine: "다양한 사용자가 Slack을 편하게 사용할 수 있도록 돕는 설정과 기능입니다.", businessExample: "스크린 리더, 키보드 탐색, 대체 텍스트를 함께 고려합니다.", sourceId: "using-category", screenMockupType: "tutorial" },
  { slug: "simple-layout-mode", term: "Simple Layout Mode", koreanName: "간단한 레이아웃 모드", category: "using", oneLine: "복잡한 화면 요소를 줄여 더 단순하게 볼 수 있도록 돕는 보기 방식입니다.", businessExample: "새 사용자가 화면 요소에 압도되지 않도록 단순한 보기 설정을 안내합니다.", sourceId: "using-category", screenMockupType: "sidebar", factStatus: "needs-review" },
  { slug: "canvas", term: "Canvas", koreanName: "캔버스", category: "using", oneLine: "프로젝트 설명, 운영 노트, 회의록처럼 긴 정보를 정리하는 문서형 공간입니다.", businessExample: "프로젝트 목표, 담당자, 일정, 참고 링크를 Canvas에 정리합니다.", sourceId: "canvas", screenMockupType: "canvas", relatedTerms: ["channel", "lists", "bookmark"] },
  { slug: "lists", term: "Lists", koreanName: "리스트", category: "using", oneLine: "업무 항목, 담당자, 상태, 마감일을 표처럼 정리하는 공간입니다.", businessExample: "교육 운영 업무를 담당자와 상태별로 관리합니다.", sourceId: "lists", screenMockupType: "list", relatedTerms: ["canvas", "workflow", "channel"] },

  { slug: "profile", term: "Profile", koreanName: "프로필", category: "personal-settings", oneLine: "이름, 역할, 연락 정보처럼 협업 상대가 나를 이해하는 기본 정보입니다.", businessExample: "고객 대응 담당자가 프로필에 역할과 시간대를 명확히 표시합니다.", sourceId: "personal-category", screenMockupType: "profile" },
  { slug: "status", term: "Status", koreanName: "상태", category: "personal-settings", oneLine: "회의 중, 휴가, 집중 시간처럼 현재 상황을 팀에 알려주는 표시입니다.", businessExample: "외근 중이라는 상태를 설정해 응답 지연을 팀이 이해하게 합니다.", sourceId: "personal-category", screenMockupType: "profile" },
  { slug: "availability", term: "Availability", koreanName: "사용 가능 상태", category: "personal-settings", oneLine: "지금 연락 가능한지 여부를 보여주는 상태 정보입니다.", businessExample: "온라인 상태와 시간대를 참고해 글로벌 팀 미팅 시간을 조율합니다.", sourceId: "personal-category", screenMockupType: "profile" },
  { slug: "notification", term: "Notification", koreanName: "알림", category: "personal-settings", oneLine: "멘션, DM, 키워드 등 중요한 신호를 알려주는 설정입니다.", businessExample: "긴급 채널은 알림을 켜고 참고 채널은 요약만 받도록 조정합니다.", sourceId: "personal-category", screenMockupType: "notification" },
  { slug: "do-not-disturb", term: "Do Not Disturb", koreanName: "방해 금지", category: "personal-settings", oneLine: "집중 시간이나 퇴근 시간에 알림을 잠시 멈추는 설정입니다.", businessExample: "야간에는 방해 금지를 설정해 업무 알림을 다음날 확인합니다.", sourceId: "personal-category", screenMockupType: "notification" },
  { slug: "mute", term: "Mute", koreanName: "음소거", category: "personal-settings", oneLine: "특정 채널이나 대화의 알림을 줄이는 설정입니다.", businessExample: "참고용 공지 채널은 음소거하고 필요한 때만 확인합니다.", sourceId: "personal-category", screenMockupType: "notification" },
  { slug: "time-zone", term: "Time Zone", koreanName: "시간대", category: "personal-settings", oneLine: "글로벌 협업에서 상대의 업무 시간을 이해하게 돕는 설정입니다.", businessExample: "뉴욕 팀원의 시간대를 보고 회의 요청 시간을 조정합니다.", sourceId: "personal-category", screenMockupType: "profile" },
  { slug: "display-name", term: "Display Name", koreanName: "표시 이름", category: "personal-settings", oneLine: "Slack 안에서 다른 사람에게 보이는 이름입니다.", businessExample: "동명이인이 많은 팀에서 부서나 역할을 반영한 표시 이름 규칙을 씁니다.", sourceId: "personal-category", screenMockupType: "profile" },
  { slug: "theme", term: "Theme", koreanName: "테마", category: "personal-settings", oneLine: "Slack 화면의 색과 보기 분위기를 개인 취향에 맞추는 설정입니다.", businessExample: "장시간 사용하는 사용자가 눈에 편한 테마를 선택합니다.", sourceId: "personal-category", screenMockupType: "profile" },
  { slug: "sidebar-section", term: "Sidebar Section", koreanName: "사이드바 섹션", category: "personal-settings", oneLine: "채널과 DM을 업무 흐름별로 묶어 정리하는 영역입니다.", businessExample: "고객사, 내부 운영, 개인 참고 채널을 섹션으로 나눕니다.", sourceId: "personal-category", screenMockupType: "sidebar" },
  { slug: "access-log", term: "Access Log", koreanName: "액세스 로그", category: "personal-settings", oneLine: "계정 접속 기록을 확인해 보안 상태를 점검하는 정보입니다.", businessExample: "낯선 위치의 로그인 기록이 있는지 확인합니다.", sourceId: "personal-category", screenMockupType: "security", factStatus: "unstable", caution: securityCaution },
  { slug: "two-factor-authentication", term: "Two-factor Authentication", koreanName: "2단계 인증", category: "personal-settings", oneLine: "비밀번호 외 추가 확인으로 계정 보안을 강화하는 방식입니다.", businessExample: "관리자와 주요 담당자에게 2단계 인증 사용을 안내합니다.", sourceId: "admin-category", screenMockupType: "security", caution: securityCaution },
  { slug: "sso-account", term: "SSO Account", koreanName: "SSO 계정", category: "personal-settings", oneLine: "조직의 ID 제공자와 연결해 로그인하는 계정 방식입니다.", businessExample: "회사 계정으로 Slack에 로그인하고 퇴사 시 접근을 중앙에서 정리합니다.", sourceId: "admin-category", screenMockupType: "security", factStatus: "unstable", caution: "SSO 사용 가능 여부와 설정 방식은 플랜, IdP, 관리자 정책에 따라 달라질 수 있습니다.", relatedTerms: ["scim", "two-factor-authentication", "member-management"] },

  { slug: "slack-app", term: "Slack App", koreanName: "Slack 앱", category: "automation", oneLine: "Slack 안에서 외부 도구나 추가 기능을 연결하는 단위입니다.", businessExample: "Google Drive 앱으로 문서 알림을 채널에 받습니다.", sourceId: "automation-category", screenMockupType: "marketplace", caution: securityCaution },
  { slug: "slack-marketplace", term: "Slack Marketplace", koreanName: "Slack Marketplace", category: "automation", oneLine: "Slack에서 사용할 수 있는 앱과 통합을 찾아보는 공간입니다.", businessExample: "운영팀이 승인된 앱을 찾아 워크스페이스에 요청합니다.", sourceId: "automation-category", screenMockupType: "marketplace", caution: securityCaution },
  { slug: "app-permission", term: "App Permission", koreanName: "앱 권한", category: "automation", oneLine: "앱이 읽거나 수행할 수 있는 데이터와 작업 범위입니다.", businessExample: "파일 접근 권한이 필요한 앱인지 보안팀이 검토합니다.", sourceId: "admin-category", screenMockupType: "marketplace", caution: securityCaution },
  { slug: "app-approval", term: "App Approval", koreanName: "앱 승인", category: "automation", oneLine: "워크스페이스에서 앱 설치를 관리자가 검토하고 허용하는 절차입니다.", businessExample: "새 앱 요청이 들어오면 보안 기준에 맞는지 승인 전에 확인합니다.", sourceId: "admin-category", screenMockupType: "marketplace", caution: securityCaution },
  { slug: "shortcut", term: "Shortcut", koreanName: "바로 가기", category: "automation", oneLine: "사용자가 특정 작업이나 워크플로를 빠르게 시작하는 진입점입니다.", businessExample: "채널에서 고객 문의 등록 바로 가기를 눌러 워크플로를 시작합니다.", sourceId: "automation-category", screenMockupType: "workflow", factStatus: "needs-review" },
  { slug: "slash-command", term: "Slash Command", koreanName: "슬래시 명령어", category: "automation", oneLine: "메시지 입력창에서 /명령어로 특정 앱 동작을 실행하는 방식입니다.", businessExample: "/helpdesk 명령어로 IT 요청 양식을 엽니다.", sourceId: "automation-category", screenMockupType: "message-composer", factStatus: "needs-review" },
  { slug: "workflow-builder", term: "Workflow Builder", koreanName: "워크플로 빌더", category: "automation", oneLine: "반복 업무를 시작 조건과 단계로 구성해 자동화하는 도구입니다.", businessExample: "휴가 신청을 받고 승인 요청과 기록 저장을 자동화합니다.", sourceId: "workflow-builder", screenMockupType: "workflow", factStatus: "unstable", caution: workflowCaution },
  { slug: "workflow", term: "Workflow", koreanName: "워크플로", category: "automation", oneLine: "업무가 시작되고 처리되는 절차를 Slack 안에서 단계로 만든 흐름입니다.", businessExample: "구매 요청 접수부터 승인, 알림, 기록까지 하나의 흐름으로 구성합니다.", sourceId: "workflow-builder", screenMockupType: "workflow", factStatus: "unstable", caution: workflowCaution },
  { slug: "trigger", term: "Trigger", koreanName: "트리거", category: "automation", oneLine: "워크플로를 시작하게 만드는 조건입니다.", businessExample: "링크 클릭, 정해진 시간, 외부 이벤트, 이모지 반응으로 업무가 시작됩니다.", sourceId: "workflow-builder", screenMockupType: "workflow", factStatus: "unstable", caution: workflowCaution },
  { slug: "step", term: "Step", koreanName: "단계", category: "automation", oneLine: "워크플로가 실행하면서 실제로 수행하는 하나의 작업입니다.", businessExample: "메시지를 보내거나 입력 양식을 보여주거나 외부 시스템에 기록합니다.", sourceId: "workflow-builder", screenMockupType: "workflow", caution: workflowCaution },
  { slug: "form", term: "Form", koreanName: "입력 양식", category: "automation", oneLine: "워크플로 중 필요한 정보를 사용자에게 입력받는 단계입니다.", businessExample: "교육 신청자의 이름, 부서, 희망 일정을 입력받습니다.", sourceId: "workflow-builder", screenMockupType: "workflow", caution: "Form은 트리거가 아니라 워크플로 구성 단계입니다. 민감정보 수집은 최소화하고 보관 위치를 확인하세요." },
  { slug: "button", term: "Button", koreanName: "버튼", category: "automation", oneLine: "사용자가 클릭해 다음 행동을 선택하는 요소입니다.", businessExample: "승인 요청 메시지에 승인과 반려 버튼을 둡니다.", sourceId: "workflow-builder", screenMockupType: "workflow", factStatus: "needs-review" },
  { slug: "branch", term: "Branch", koreanName: "분기", category: "automation", oneLine: "조건에 따라 워크플로의 다음 흐름을 나누는 구조입니다.", businessExample: "금액이 크면 재무 검토로, 작으면 팀장 승인으로 보냅니다.", sourceId: "workflow-builder", screenMockupType: "workflow", caution: workflowCaution },
  { slug: "connector", term: "Connector", koreanName: "커넥터", category: "automation", oneLine: "외부 서비스의 작업을 워크플로 단계로 연결하는 개념입니다.", businessExample: "폼 응답을 Google Sheets에 저장하거나 Jira 이슈를 만듭니다.", sourceId: "connectors", screenMockupType: "connector", factStatus: "unstable", caution: workflowCaution },
  { slug: "connector-step", term: "Connector Step", koreanName: "커넥터 단계", category: "automation", oneLine: "워크플로 안에서 외부 서비스 액션을 실행하는 단계입니다.", businessExample: "승인 후 Google Calendar에 일정을 등록합니다.", sourceId: "connectors", screenMockupType: "connector", factStatus: "unstable", caution: workflowCaution },
  { slug: "webhook", term: "Webhook", koreanName: "웹훅", category: "automation", oneLine: "외부 시스템 이벤트를 Slack 워크플로 시작점으로 연결하는 방식입니다.", businessExample: "모니터링 시스템 장애 이벤트가 발생하면 담당 채널에 알림을 보냅니다.", sourceId: "workflow-builder", screenMockupType: "connector", factStatus: "unstable", caution: "Webhook 설정은 관리자 권한, 보안 정책, 중복 이벤트 처리 규칙을 함께 확인해야 합니다." },
  { slug: "workflow-manager", term: "Workflow Manager", koreanName: "워크플로 관리자", category: "automation", oneLine: "워크플로 생성, 운영, 권한 관리를 맡는 역할 또는 관리 맥락입니다.", businessExample: "운영 담당자가 워크플로 변경 요청과 테스트를 관리합니다.", sourceId: "admin-category", screenMockupType: "admin", factStatus: "needs-review", caution: workflowCaution },
  { slug: "workflow-activity-log", term: "Workflow Activity Log", koreanName: "워크플로 활동 로그", category: "automation", oneLine: "워크플로 실행 이력과 문제를 확인하는 운영 로그입니다.", businessExample: "신청 알림이 누락됐을 때 활동 로그로 어느 단계에서 실패했는지 확인합니다.", sourceId: "automation-category", screenMockupType: "admin", factStatus: "unstable", caution: workflowCaution },
  { slug: "third-party-authentication", term: "Third-party Authentication", koreanName: "타사 계정 인증", category: "automation", oneLine: "외부 서비스와 연결하기 위해 해당 서비스 계정 권한을 확인하는 절차입니다.", businessExample: "Google Sheets에 행을 추가하려면 연결 계정 인증이 필요할 수 있습니다.", sourceId: "connectors", screenMockupType: "connector", factStatus: "unstable", caution: workflowCaution },
  { slug: "google-sheets-connector", term: "Google Sheets Connector", koreanName: "Google Sheets 커넥터", category: "automation", oneLine: "워크플로 응답이나 처리 결과를 Google Sheets에 기록하는 연결 단계입니다.", businessExample: "휴가 신청 내역과 승인 결과를 테스트 시트에 먼저 저장해 검증합니다.", sourceId: "connectors", screenMockupType: "connector", factStatus: "unstable", caution: "Google Sheets 연동은 신청 내역 저장에 유용하지만, 워크스페이스 정책에 따라 앱 승인과 계정 인증이 필요할 수 있습니다. 또한 시트 구조에 따라 행 추가 위치가 달라질 수 있으므로 운영 전 테스트 시트에서 먼저 검증하세요." },
  { slug: "mcp", term: "MCP", koreanName: "MCP", category: "automation", oneLine: "Slack의 기본 사용자 기능명이라기보다 AI와 도구 연동을 검토할 때 함께 등장할 수 있는 기술 표준입니다.", businessExample: "AI Agent와 내부 도구 연결 가능성을 검토할 때 MCP 지원 여부를 별도 확인 항목으로 둡니다.", sourceId: "automation-category", screenMockupType: "connector", factStatus: "needs-review", caution: "MCP는 Slack 일반 사용자를 위한 고정 메뉴명으로 단정하지 않습니다. 관련 지원 범위는 최신 공식 문서와 제품 발표를 따로 확인해야 합니다." },
  { slug: "ai-agent", term: "AI Agent", koreanName: "AI 에이전트", category: "automation", oneLine: "Slackbot, Agentforce처럼 업무를 보조하는 AI 기능을 검토할 때 쓰는 일반 개념입니다.", businessExample: "고객 문의 요약이나 내부 업무 안내 보조 기능을 검토할 때 관련 정책을 확인합니다.", sourceId: "pricing", screenMockupType: "connector", factStatus: "needs-review", caution: "AI Agent 관련 기능은 제품 변경과 관리자 정책 영향이 크므로 단정하지 않고 최신 문서를 확인해야 합니다." },
  { slug: "slackbot", term: "Slackbot", koreanName: "Slackbot", category: "automation", oneLine: "Slack 안에서 개인 업무를 돕는 AI 에이전트와 안내 기능 맥락으로 쓰이는 기능명입니다.", businessExample: "사용자가 대화와 파일 맥락을 바탕으로 필요한 정보를 찾거나 요약 기능을 검토합니다.", sourceId: "slackbot", screenMockupType: "workflow", factStatus: "unstable", caution: "Slackbot의 AI 기능과 제공 범위는 플랜, 지역, 관리자 정책에 따라 달라질 수 있습니다." },
  { slug: "slackbot-skill", term: "Slackbot Skill", koreanName: "Slackbot 스킬", category: "automation", oneLine: "Slackbot이 특정 작업을 더 잘 수행하도록 연결되는 스킬 또는 확장 기능 맥락입니다.", businessExample: "관리자가 Slackbot 관련 설정 가능 범위와 사용 정책을 검토합니다.", sourceId: "slackbot", screenMockupType: "admin", factStatus: "needs-review", caution: "Slackbot Skill은 기능 제공 범위와 명칭 변경 가능성이 있어 최신 제품 문서와 관리자 정책 확인이 필요합니다." },
  { slug: "custom-integration", term: "Custom Integration", koreanName: "사용자 지정 통합", category: "automation", oneLine: "조직 업무에 맞게 Slack과 외부 시스템을 연결하는 맞춤형 연동입니다.", businessExample: "내부 승인 시스템 이벤트를 Slack 채널에 알리는 연동을 만듭니다.", sourceId: "automation-category", screenMockupType: "connector", factStatus: "needs-review", caution: securityCaution },

  { slug: "workspace-primary-owner", term: "Workspace Primary Owner", koreanName: "워크스페이스 기본 소유자", category: "admin-security", oneLine: "워크스페이스의 최상위 소유 책임을 갖는 역할입니다.", businessExample: "소유권 이전이나 핵심 설정 변경 시 기본 소유자가 확인합니다.", sourceId: "roles", screenMockupType: "role-permission", factStatus: "unstable", caution: planCaution },
  { slug: "workspace-owner", term: "Workspace Owner", koreanName: "워크스페이스 소유자", category: "admin-security", oneLine: "워크스페이스의 중요한 설정과 권한을 관리하는 상위 역할입니다.", businessExample: "앱 승인 정책과 멤버 관리 권한을 검토합니다.", sourceId: "roles", screenMockupType: "role-permission", factStatus: "unstable" },
  { slug: "workspace-admin", term: "Workspace Admin", koreanName: "워크스페이스 관리자", category: "admin-security", oneLine: "일상적인 워크스페이스 운영과 설정 일부를 관리하는 역할입니다.", businessExample: "게스트 초대와 채널 설정 변경 요청을 처리합니다.", sourceId: "roles", screenMockupType: "role-permission", factStatus: "unstable" },
  { slug: "member", term: "Member", koreanName: "멤버", category: "admin-security", oneLine: "워크스페이스에서 일상적으로 Slack을 사용하는 일반 사용자 역할입니다.", businessExample: "팀원이 채널에서 업데이트를 공유하고 워크플로를 실행합니다.", sourceId: "roles", screenMockupType: "role-permission" },
  { slug: "guest", term: "Guest", koreanName: "게스트", category: "admin-security", oneLine: "제한된 채널 접근 권한으로 참여하는 외부 사용자 역할입니다.", businessExample: "외부 디자이너를 프로젝트 채널에만 초대합니다.", sourceId: "guest-roles", screenMockupType: "guest-access", caution: securityCaution },
  { slug: "single-channel-guest", term: "Single-channel Guest", koreanName: "싱글 채널 게스트", category: "admin-security", oneLine: "하나의 채널에만 접근할 수 있는 게스트 역할입니다.", businessExample: "외부 강사를 교육 채널 하나에만 초대합니다.", sourceId: "guest-roles", screenMockupType: "guest-access", caution: securityCaution },
  { slug: "multi-channel-guest", term: "Multi-channel Guest", koreanName: "멀티 채널 게스트", category: "admin-security", oneLine: "지정된 여러 채널에 접근할 수 있는 게스트 역할입니다.", businessExample: "외부 PM이 프로젝트 채널과 자료 공유 채널에만 접근합니다.", sourceId: "guest-roles", screenMockupType: "guest-access", caution: securityCaution },
  { slug: "role", term: "Role", koreanName: "역할", category: "admin-security", oneLine: "사용자가 무엇을 볼 수 있고 무엇을 할 수 있는지 결정하는 권한 묶음입니다.", businessExample: "Owner, Admin, Member, Guest 역할별로 가능한 작업을 구분합니다.", sourceId: "roles", screenMockupType: "role-permission", relatedTerms: ["permission", "workspace-admin", "member"] },
  { slug: "permission", term: "Permission", koreanName: "권한", category: "admin-security", oneLine: "특정 기능, 데이터, 설정에 접근하거나 변경할 수 있는 범위입니다.", businessExample: "누가 채널을 만들고 앱을 설치할 수 있는지 권한으로 제한합니다.", sourceId: "admin-category", screenMockupType: "role-permission", caution: securityCaution },
  { slug: "member-management", term: "Member Management", koreanName: "멤버 관리", category: "admin-security", oneLine: "초대, 비활성화, 역할 변경 등 사용자 생명주기를 관리하는 업무입니다.", businessExample: "입사자는 초대하고 퇴사자는 계정을 비활성화합니다.", sourceId: "admin-category", screenMockupType: "admin", caution: securityCaution },
  { slug: "channel-management-tool", term: "Channel Management Tool", koreanName: "채널 관리 도구", category: "admin-security", oneLine: "채널 목록과 설정을 운영 관점에서 관리하는 도구입니다.", businessExample: "오래된 채널을 정리하고 비공개 전환 기준을 검토합니다.", sourceId: "admin-category", screenMockupType: "channel-admin", factStatus: "unstable" },
  { slug: "channel-manager", term: "Channel Manager", koreanName: "채널 매니저", category: "admin-security", oneLine: "특정 채널의 운영과 멤버 관리를 맡는 역할 개념입니다.", businessExample: "프로젝트 채널 매니저가 주제, 멤버, 운영 규칙을 관리합니다.", sourceId: "admin-category", screenMockupType: "channel-admin", factStatus: "unstable" },
  { slug: "posting-permission", term: "Posting Permission", koreanName: "게시 권한", category: "admin-security", oneLine: "특정 채널에 누가 메시지를 게시할 수 있는지 정하는 설정입니다.", businessExample: "공지 채널은 관리자만 게시하고 팀원은 반응만 남기도록 설정합니다.", sourceId: "admin-category", screenMockupType: "channel-admin", caution: securityCaution },
  { slug: "channel-naming-guidelines", term: "Channel Naming Guidelines", koreanName: "채널명 규칙", category: "admin-security", oneLine: "채널 이름을 일관되게 만들기 위한 조직 규칙입니다.", businessExample: "proj-, team-, notice- 접두사를 정해 채널 목적을 쉽게 파악합니다.", sourceId: "admin-category", screenMockupType: "channel-admin" },
  { slug: "slack-connect", term: "Slack Connect", koreanName: "외부 조직 협업", category: "collaboration", oneLine: "회사 밖의 파트너, 공급업체, 고객과 채널이나 다이렉트 메시지로 협업하는 방식입니다.", businessExample: "고객사와 파트너사가 공동 채널에서 일정과 자료를 주고받습니다.", sourceId: "slack-connect", screenMockupType: "connect", factStatus: "verified", caution: "외부 협업은 접근 범위, 파일 공유, 승인 정책, 데이터 관리 기준을 함께 확인해야 합니다.", relatedTerms: ["slack-connect-approval", "guest", "public-file-sharing"] },
  { slug: "slack-connect-approval", term: "Slack Connect Approval", koreanName: "Slack Connect 승인", category: "collaboration", oneLine: "외부 조직 연결 요청을 관리자가 검토하고 허용하는 절차입니다.", businessExample: "고객사 채널 연결 요청을 보안팀 승인 후 진행합니다.", sourceId: "admin-category", screenMockupType: "connect-policy", factStatus: "unstable", caution: securityCaution },
  { slug: "public-file-sharing", term: "Public File Sharing", koreanName: "공개 파일 공유", category: "admin-security", oneLine: "파일이 외부에 공개적으로 공유될 수 있는 범위를 관리하는 설정입니다.", businessExample: "외부 공유 링크 사용을 제한해 고객 정보 유출을 줄입니다.", sourceId: "admin-category", screenMockupType: "data-policy", factStatus: "unstable", caution: securityCaution },
  { slug: "dlp", term: "DLP", koreanName: "데이터 손실 방지", category: "governance", oneLine: "민감정보나 기밀 데이터가 외부로 부적절하게 공유될 위험을 줄이기 위한 보안 통제 영역입니다.", businessExample: "고객 정보가 외부 채널에 공유되는지 보안 정책으로 점검합니다.", sourceId: "pricing", screenMockupType: "security", factStatus: "needs-review", caution: "Slack Connect DLP 등 세부 제공 범위는 플랜과 보안 정책에 따라 달라질 수 있습니다." },
  { slug: "slack-ai-access", term: "Slack AI Access", koreanName: "Slack AI 접근 권한", category: "governance", oneLine: "Slack AI 기능의 사용 가능 범위와 정책을 관리 관점에서 확인하는 항목입니다.", businessExample: "민감한 채널에서 AI 기능 사용 제한이 필요한지 검토합니다.", sourceId: "pricing", screenMockupType: "security", factStatus: "unstable", caution: "Slack AI 관련 기능과 접근 제한은 빠르게 바뀔 수 있어 최신 공식 문서와 관리자 정책 확인이 필요합니다." },
  { slug: "canvas-settings", term: "Canvas Settings", koreanName: "Canvas 설정", category: "admin-security", oneLine: "Canvas 생성, 공유, 템플릿 사용 범위를 관리하는 설정입니다.", businessExample: "외부 채널에서 Canvas 공유가 가능한지 관리자가 확인합니다.", sourceId: "admin-category", screenMockupType: "data-policy", factStatus: "unstable", caution: securityCaution },
  { slug: "lists-settings", term: "Lists Settings", koreanName: "Lists 설정", category: "admin-security", oneLine: "Lists 사용, 공유, 템플릿 권한 범위를 관리하는 설정입니다.", businessExample: "팀별 Lists 생성 권한과 외부 공유 가능 여부를 검토합니다.", sourceId: "admin-category", screenMockupType: "data-policy", factStatus: "unstable", caution: securityCaution },
  { slug: "salesforce-channel", term: "Salesforce Channel", koreanName: "Salesforce 채널", category: "collaboration", oneLine: "Salesforce 업무와 Slack 채널 협업을 연결하는 채널 개념입니다.", businessExample: "중요 계정의 업데이트를 영업 채널에서 함께 확인합니다.", sourceId: "admin-category", screenMockupType: "connect", factStatus: "needs-review", caution: "Salesforce 권한, Slack 앱 승인, 고객 데이터 보호 정책을 반드시 함께 검토하세요." },
  { slug: "enterprise-plus", term: "Enterprise+", koreanName: "Enterprise+", category: "governance", oneLine: "대규모 조직을 위한 Slack의 엔터프라이즈 플랜으로, 고급 보안·관리·AI 기능 범위를 함께 검토하는 맥락입니다.", businessExample: "보안팀이 감사 로그, 데이터 정책, 조직 단위 관리를 검토합니다.", sourceId: "pricing", screenMockupType: "enterprise-plus", factStatus: "verified", caution: "Enterprise+ 기능과 포함 범위는 계약, 지역, 최신 플랜 정보에 따라 달라질 수 있습니다.", relatedTerms: ["enterprise-organization", "audit-log", "ekm"] },
  { slug: "enterprise-organization", term: "Enterprise Organization", koreanName: "Enterprise 조직", category: "governance", oneLine: "Enterprise+ 맥락에서 여러 워크스페이스와 조직 단위 정책을 중앙에서 관리하는 구조입니다.", businessExample: "본사, 지역, 사업부 워크스페이스를 조직 정책 아래에서 운영합니다.", sourceId: "admin-category", screenMockupType: "enterprise-plus", factStatus: "unstable", caution: planCaution, relatedTerms: ["enterprise-plus", "org-admin", "workspace"] },
  { slug: "enterprise-grid", term: "Enterprise Grid", koreanName: "Enterprise Grid(기존 표현)", category: "governance", oneLine: "일부 도움말 문서와 과거 자료에 남아 있는 엔터프라이즈 조직 구조 관련 기존 표현입니다.", businessExample: "과거 자료를 읽을 때 Enterprise Grid 표현이 나오면 현재 설명에서는 Enterprise 조직 맥락으로 확인합니다.", sourceId: "admin-category", screenMockupType: "enterprise-plus", factStatus: "unstable", caution: enterpriseGridCaution, relatedTerms: ["enterprise-plus", "enterprise-organization", "audit-log"] },
  { slug: "org-primary-owner", term: "Org Primary Owner", koreanName: "조직 기본 소유자", category: "admin-security", oneLine: "Enterprise 조직 단위에서 가장 높은 소유 책임을 갖는 역할입니다.", businessExample: "조직 수준 보안 정책과 소유권 관련 중요 변경을 검토합니다.", sourceId: "roles", screenMockupType: "role-permission", factStatus: "unstable", caution: planCaution },
  { slug: "org-owner", term: "Org Owner", koreanName: "조직 소유자", category: "admin-security", oneLine: "Enterprise 조직의 정책과 관리 설정 일부를 운영하는 상위 역할입니다.", businessExample: "조직 수준 앱 정책과 워크스페이스 관리 기준을 검토합니다.", sourceId: "roles", screenMockupType: "role-permission", factStatus: "unstable" },
  { slug: "org-admin", term: "Org Admin", koreanName: "조직 관리자", category: "admin-security", oneLine: "Enterprise 조직의 운영 설정과 멤버 관리 일부를 담당하는 관리자 역할입니다.", businessExample: "워크스페이스 간 정책 적용과 멤버 관리를 지원합니다.", sourceId: "roles", screenMockupType: "role-permission", factStatus: "unstable" },
  { slug: "app-management", term: "App Management", koreanName: "앱 관리", category: "admin-security", oneLine: "워크스페이스나 조직에서 앱 설치, 승인, 권한을 관리하는 업무입니다.", businessExample: "업무 앱 요청을 검토하고 허용된 앱 목록을 관리합니다.", sourceId: "admin-category", screenMockupType: "marketplace", caution: securityCaution },
  { slug: "data-analytics", term: "Data Analytics", koreanName: "데이터 분석", category: "governance", oneLine: "사용량, 참여도, 워크스페이스 운영 상태를 분석하는 관리 영역입니다.", businessExample: "채널 활동과 앱 사용 현황을 보고 운영 개선 포인트를 찾습니다.", sourceId: "admin-category", screenMockupType: "analytics", factStatus: "unstable", caution: securityCaution },
  { slug: "audit-log", term: "Audit Log", koreanName: "감사 로그", category: "governance", oneLine: "보안과 관리 이벤트를 추적하기 위한 로그 데이터입니다.", businessExample: "앱 설치, 로그인, 멤버 변경 같은 이벤트를 보안팀이 점검합니다.", sourceId: "audit-logs", screenMockupType: "audit-log", factStatus: "unstable", caution: "조회 가능 이벤트, 보존 기간, API 접근은 플랜과 권한에 따라 달라질 수 있습니다." },
  { slug: "data-retention", term: "Data Retention", koreanName: "데이터 보존", category: "governance", oneLine: "메시지와 파일 같은 데이터를 얼마나 오래 보관할지 정하는 정책입니다.", businessExample: "법무 요구에 맞춰 메시지 보존 기간을 설정합니다.", sourceId: "admin-category", screenMockupType: "data-policy", factStatus: "unstable", caution: securityCaution },
  { slug: "ekm", term: "EKM", koreanName: "엔터프라이즈 키 관리", category: "governance", oneLine: "조직이 암호화 키 통제와 접근 철회를 강화할 때 검토하는 엔터프라이즈 보안 기능입니다.", businessExample: "규제가 강한 산업에서 데이터 접근 통제 강화를 검토합니다.", sourceId: "ekm", screenMockupType: "security", factStatus: "unstable", caution: "EKM 사용 가능 여부와 운영 방식은 계약, 플랜, 보안 아키텍처 검토가 필요합니다." },
  { slug: "scim", term: "SCIM", koreanName: "사용자 프로비저닝", category: "governance", oneLine: "사용자 생성, 변경, 비활성화를 외부 ID 시스템과 자동으로 맞추는 API 표준입니다.", businessExample: "퇴사자가 HR 시스템에서 비활성화되면 Slack 계정도 함께 정리되도록 설계합니다.", sourceId: "scim", screenMockupType: "security", factStatus: "unstable", caution: "SCIM API 사용 가능 여부, 토큰 권한, IdP 연동 방식은 플랜과 관리자 정책에 따라 확인해야 합니다." }
];

export const terms = seeds.map(makeTerm);

export const recommendedTermSlugs = [
  "slack",
  "workspace",
  "channel",
  "thread",
  "mention",
  "canvas",
  "lists",
  "workflow-builder",
  "connector",
  "slack-connect",
  "enterprise-plus",
  "audit-log"
];

export function getTermBySlug(slug: string) {
  return terms.find((term) => term.slug === slug);
}

export function getTermLabel(slug: string) {
  const term = getTermBySlug(slug);
  if (!term) return slug;
  return term.koreanName === term.term ? term.term : `${term.koreanName} (${term.term})`;
}

export function getTermsByCategory(category: TermCategory) {
  return terms.filter((term) => term.category === category);
}
