import type { QuizQuestion } from "@/types/content";

export const quizzes: QuizQuestion[] = [
  {
    id: "quiz-1",
    question: "팀 전체가 나중에 다시 찾아야 하는 결정사항은 어디에 남기는 것이 가장 적절할까요?",
    options: ["관련 업무 채널", "개인 DM", "개인 메모장", "브라우저 북마크"],
    answer: "관련 업무 채널",
    explanation: "팀이 함께 알아야 하는 업무 맥락은 채널에 남겨야 검색과 공유가 쉽습니다.",
    relatedTerms: ["channel", "search"]
  },
  {
    id: "quiz-2",
    question: "스레드의 가장 좋은 사용 목적은 무엇인가요?",
    options: ["한 메시지의 세부 논의를 모으기", "전사 공지를 숨기기", "모든 파일을 저장하기", "계정 보안을 관리하기"],
    answer: "한 메시지의 세부 논의를 모으기",
    explanation: "스레드는 채널 흐름을 어지럽히지 않고 특정 메시지의 답글을 모읍니다.",
    relatedTerms: ["thread"]
  },
  {
    id: "quiz-3",
    question: "멘션을 사용할 때 가장 중요한 원칙은 무엇인가요?",
    options: ["필요한 사람에게 정확히 사용한다", "모든 메시지에 붙인다", "항상 @channel을 쓴다", "파일 공유 대신 사용한다"],
    answer: "필요한 사람에게 정확히 사용한다",
    explanation: "멘션은 알림을 만드는 호출 도구이므로 남용하면 알림 피로가 생깁니다.",
    relatedTerms: ["mention", "notification"]
  },
  {
    id: "quiz-4",
    question: "Canvas를 설명하는 말로 가장 적절한 것은 무엇인가요?",
    options: ["긴 정보와 운영 기준을 정리하는 문서형 공간", "외부 앱 설치 승인 도구", "계정 로그인 기록", "이모지 반응 설정"],
    answer: "긴 정보와 운영 기준을 정리하는 문서형 공간",
    explanation: "Canvas는 프로젝트 노트, 회의록, 운영 기준처럼 긴 정보를 정리하는 데 유용합니다.",
    relatedTerms: ["canvas"]
  },
  {
    id: "quiz-5",
    question: "Lists는 어떤 상황에 가장 잘 어울릴까요?",
    options: ["업무 항목과 상태를 정리할 때", "비밀번호를 저장할 때", "외부 파일을 공개할 때", "워크스페이스 소유권을 이전할 때"],
    answer: "업무 항목과 상태를 정리할 때",
    explanation: "Lists는 업무, 담당자, 상태, 마감일을 정리하는 데 사용할 수 있습니다.",
    relatedTerms: ["lists"]
  },
  {
    id: "quiz-6",
    question: "Workflow에서 Trigger는 무엇인가요?",
    options: ["워크플로를 시작하게 만드는 조건", "사용자에게 입력을 받는 양식", "관리자 역할", "파일 공유 정책"],
    answer: "워크플로를 시작하게 만드는 조건",
    explanation: "Trigger는 시작 조건이고, Form은 워크플로 안에서 정보를 받는 단계입니다.",
    relatedTerms: ["trigger", "form"]
  },
  {
    id: "quiz-7",
    question: "Connector를 설명하는 말로 가장 적절한 것은 무엇인가요?",
    options: ["외부 서비스 액션을 워크플로 단계로 연결하는 개념", "채널 이름을 바꾸는 기능", "개인 테마 설정", "스레드 알림"],
    answer: "외부 서비스 액션을 워크플로 단계로 연결하는 개념",
    explanation: "Connector는 외부 서비스와 연결되므로 앱 승인과 계정 인증을 함께 확인해야 합니다.",
    relatedTerms: ["connector", "third-party-authentication"]
  },
  {
    id: "quiz-8",
    question: "Google Sheets Connector를 운영 전에 확인해야 할 것으로 적절한 것은 무엇인가요?",
    options: ["앱 승인, 계정 인증, 테스트 시트 검증", "이모지 반응 색상", "테마 색상", "채널 알림음"],
    answer: "앱 승인, 계정 인증, 테스트 시트 검증",
    explanation: "시트 구조와 권한에 따라 행 추가 위치와 실행 결과가 달라질 수 있습니다.",
    relatedTerms: ["google-sheets-connector"]
  },
  {
    id: "quiz-9",
    question: "Guest 역할을 설명할 때 가장 중요한 관점은 무엇인가요?",
    options: ["제한된 접근 범위", "모든 채널 접근 권한", "워크스페이스 소유권", "무제한 앱 설치 권한"],
    answer: "제한된 접근 범위",
    explanation: "Guest는 필요한 채널에 제한적으로 참여하는 외부 사용자 역할로 이해하는 것이 좋습니다.",
    relatedTerms: ["guest", "single-channel-guest", "multi-channel-guest"]
  },
  {
    id: "quiz-10",
    question: "Slack Connect를 사용할 때 함께 확인해야 할 것은 무엇인가요?",
    options: ["외부 공유 정책과 승인 절차", "개인 테마 색상", "개인 즐겨찾기 순서", "키보드 배열"],
    answer: "외부 공유 정책과 승인 절차",
    explanation: "외부 조직과 협업할 때는 접근 범위, 파일 공유, 승인 절차를 함께 확인해야 합니다.",
    relatedTerms: ["slack-connect", "slack-connect-approval"]
  },
  {
    id: "quiz-11",
    question: "Enterprise Grid 표현은 이 사이트에서 어떻게 다루나요?",
    options: ["기존 자료에 남은 표현으로 제한적으로 다룬다", "현재 고객 설명용 플랜명으로 강조한다", "일반 사용자 기능으로 설명한다", "Slack 앱 이름으로 설명한다"],
    answer: "기존 자료에 남은 표현으로 제한적으로 다룬다",
    explanation: "고객에게 설명할 때는 Enterprise+와 Enterprise 조직 표현을 우선 사용합니다.",
    relatedTerms: ["enterprise-grid", "enterprise-plus", "enterprise-organization"]
  },
  {
    id: "quiz-12",
    question: "Audit Log, EKM, SCIM 같은 용어를 설명할 때 적절한 태도는 무엇인가요?",
    options: ["플랜과 권한에 따라 달라질 수 있음을 안내한다", "모든 워크스페이스에 항상 제공된다고 말한다", "새 사용자 기본 기능으로 설명한다", "개인 테마 설정으로 설명한다"],
    answer: "플랜과 권한에 따라 달라질 수 있음을 안내한다",
    explanation: "관리자/보안 기능은 고객 환경, 플랜, 권한, 정책에 따라 제공 범위가 달라질 수 있습니다.",
    relatedTerms: ["audit-log", "ekm", "scim"]
  }
];
