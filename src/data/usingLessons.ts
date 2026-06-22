import { lesson } from "@/data/lessonFactory";

export const usingLessons = [
  lesson({
    id: "using-1",
    slug: "channels-vs-dm",
    title: "채널과 DM 구분하기",
    track: "using",
    sourceId: "using-category",
    summary: "팀이 함께 알아야 하는 업무는 채널에, 짧고 제한된 확인은 DM에 둡니다.",
    whatYouLearn: ["채널의 업무 주제 기준", "DM의 적절한 사용 범위", "비공개 채널 사용 시 주의점"],
    practicalMeaning: "의사결정과 자료가 개인 대화에 묻히지 않도록 정보가 놓일 공간을 먼저 정합니다.",
    relatedTerms: ["channel", "dm", "private-channel"],
    mockupType: "channel",
    customerTalkTrack: "Slack 사용 습관의 첫 단계는 대화를 어디에 남길지 정하는 것입니다."
  }),
  lesson({
    id: "using-2",
    slug: "write-good-messages",
    title: "메시지 잘 쓰기",
    track: "using",
    sourceId: "using-category",
    summary: "서식, 링크, 파일, 멘션을 조합해 다음 행동이 보이는 메시지를 작성합니다.",
    whatYouLearn: ["메시지 서식", "링크 미리보기", "파일과 설명 함께 남기기"],
    practicalMeaning: "읽는 사람이 배경, 요청, 마감일을 한 번에 이해하도록 메시지를 구성합니다.",
    relatedTerms: ["message-field", "message-formatting", "link-preview"],
    mockupType: "message-composer",
    customerTalkTrack: "좋은 메시지는 예쁜 문장이 아니라 바로 행동할 수 있는 업무 단서입니다."
  }),
  lesson({
    id: "using-3",
    slug: "threads-and-mentions",
    title: "스레드와 멘션으로 대화 정리하기",
    track: "using",
    sourceId: "using-category",
    summary: "스레드는 세부 논의를 모으고, 멘션은 정확한 사람에게 알림을 보내는 데 사용합니다.",
    whatYouLearn: ["스레드 운영", "멘션 남용 방지", "사용자 그룹 멘션"],
    practicalMeaning: "채널 본문을 깔끔하게 유지하면서 필요한 사람에게만 정확히 호출합니다.",
    relatedTerms: ["thread", "mention", "user-group"],
    mockupType: "thread",
    customerTalkTrack: "스레드와 멘션을 구분하면 채널이 훨씬 덜 시끄러워집니다."
  }),
  lesson({
    id: "using-4",
    slug: "files-canvas-lists",
    title: "파일, 캔버스, 리스트로 업무 맥락 정리하기",
    track: "using",
    sourceId: "using-category",
    summary: "대화에서 나온 기준은 Canvas에, 실행 항목은 Lists에, 참고 자료는 파일 맥락과 함께 남깁니다.",
    whatYouLearn: ["파일 공유", "Canvas 정리", "Lists로 상태 관리"],
    practicalMeaning: "대화가 끝난 뒤에도 기준과 실행 항목을 찾을 수 있게 만듭니다.",
    relatedTerms: ["file", "canvas", "lists"],
    mockupType: "canvas",
    customerTalkTrack: "채널은 흐름, Canvas는 기준, Lists는 실행 항목으로 설명하면 고객이 빠르게 이해합니다."
  }),
  lesson({
    id: "using-5",
    slug: "search-again",
    title: "검색으로 다시 찾기",
    track: "using",
    sourceId: "using-category",
    summary: "검색어와 한정자를 조합해 대화, 파일, 링크를 빠르게 좁혀 찾습니다.",
    whatYouLearn: ["검색 기본", "검색 한정자", "자료 재탐색"],
    practicalMeaning: "같은 질문을 반복하지 않고 과거 맥락을 다시 꺼내 씁니다.",
    relatedTerms: ["search", "search-modifier", "files"],
    mockupType: "search",
    customerTalkTrack: "Slack의 장점은 일이 끝난 뒤에도 업무 기록을 다시 찾을 수 있다는 점입니다."
  }),
  lesson({
    id: "using-6",
    slug: "huddles-and-clips",
    title: "허들과 클립으로 빠르게 대화하기",
    track: "using",
    sourceId: "using-category",
    summary: "짧은 실시간 논의는 허들로, 비동기 설명은 클립으로 상황에 맞게 사용합니다.",
    whatYouLearn: ["허들 사용 맥락", "클립과 캡션", "결정 기록 남기기"],
    practicalMeaning: "회의를 늘리지 않고 빠르게 맞추되 결정사항은 채널에 요약합니다.",
    relatedTerms: ["huddle", "clip", "caption"],
    mockupType: "huddle",
    customerTalkTrack: "허들은 빠른 대화에 좋지만 중요한 결정은 기록으로 다시 남겨야 합니다.",
    caution: "허들, 클립, 캡션 기능은 환경과 언어, 플랜에 따라 제공 범위가 달라질 수 있습니다."
  }),
  lesson({
    id: "using-7",
    slug: "shortcuts-accessibility",
    title: "키보드 바로 가기와 접근성",
    track: "using",
    sourceId: "using-category",
    summary: "키보드 탐색, 바로 가기, 대체 텍스트로 더 많은 사람이 편하게 일하도록 돕습니다.",
    whatYouLearn: ["키보드 바로 가기", "접근성 기본", "대체 텍스트"],
    practicalMeaning: "사용 속도와 접근성을 함께 높여 팀 전체의 협업 품질을 개선합니다.",
    relatedTerms: ["keyboard-shortcut", "accessibility", "alt-text"],
    mockupType: "tutorial",
    customerTalkTrack: "접근성은 특정 사용자만 위한 기능이 아니라 모두에게 좋은 협업 습관입니다."
  }),
  lesson({
    id: "using-8",
    slug: "basic-troubleshooting",
    title: "문제 해결 기본 팁",
    track: "using",
    sourceId: "using-category",
    summary: "알림, 접속, 보기 설정 문제를 기능 오류와 개인 설정 문제로 나누어 확인합니다.",
    whatYouLearn: ["알림 점검", "접속 기록 확인", "화면 설정 확인"],
    practicalMeaning: "사용자가 막힐 때 스스로 확인할 수 있는 기본 순서를 갖습니다.",
    relatedTerms: ["notification", "access-log", "simple-layout-mode"],
    mockupType: "notification",
    customerTalkTrack: "문제 해결은 'Slack이 안 돼요'를 설정, 권한, 연결 문제로 나누는 데서 시작합니다."
  })
];
