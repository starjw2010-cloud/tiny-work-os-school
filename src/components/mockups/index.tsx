import type { ComponentType } from "react";
import type { MockupType } from "@/types/content";

const notice = "개념 이해를 돕기 위한 교육용 예시 화면입니다. 실제 Slack 화면과 다를 수 있습니다.";

function MockFrame({ title, caption, items }: { title: string; caption: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-white p-3 shadow-soft">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-sm font-black text-ink">{title}</p>
        <span className="rounded-full bg-softPurple px-2 py-0.5 text-[10px] font-bold text-deepPurple">교육용</span>
      </div>
      <div className="grid gap-1.5 rounded-lg border border-line bg-softPurple p-2">
        {items.map((item) => (
          <div className="rounded-md bg-white px-2.5 py-1.5 text-[11px] font-semibold leading-5 text-ink shadow-sm" key={item}>
            {item}
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs font-bold leading-5 text-deepPurple">{caption}</p>
      <p className="mt-1.5 text-[10px] leading-4 text-muted">{notice}</p>
    </div>
  );
}

function createMock(title: string, caption: string, items: string[]) {
  function GeneratedMock() {
    return <MockFrame caption={caption} items={items} title={title} />;
  }
  return GeneratedMock;
}

export const WorkspaceMock = createMock("Workspace", "워크스페이스는 팀이 함께 일하는 가장 큰 협업 공간입니다.", ["tiny-team", "# notice-all", "# proj-renewal", "Canvas 2개 / Lists 7개"]);
export const SidebarMock = createMock("Sidebar", "사이드바는 채널, DM, 앱을 빠르게 찾는 개인 탐색 영역입니다.", ["즐겨찾기", "# team-daily", "# proj-renewal", "DM @jiwon", "앱과 워크플로"]);
export const ChannelMock = createMock("Channel", "채널은 업무 주제별 맥락이 쌓이는 공간입니다.", ["#proj-renewal", "@jiwon: 고객 미팅 후속자료를 오늘 정리하겠습니다.", "@manager: 스레드에 액션 아이템을 남겨주세요."]);
export const ThreadMock = createMock("Thread", "스레드는 하나의 메시지에 대한 세부 논의를 모아두는 공간입니다.", ["채널 메시지: 프로젝트 일정 변경 안내", "답글: 질문 2개", "후속 작업: 액션 3개"]);
export const MessageComposerMock = createMock("Message Composer", "메시지 입력창은 대화뿐 아니라 파일, 링크, 멘션, 서식을 함께 다루는 공간입니다.", ["@manager 오늘 회의록과 후속 작업을 공유합니다.", "서식: 굵게 / 목록 / 인용", "첨부: 파일 / 링크"]);
export const MentionMock = createMock("Mention", "멘션은 필요한 사람에게 정확히 알림을 보내는 호출 도구입니다.", ["@manager 승인 기준 확인 부탁드립니다.", "@team-leads 이번 주 리스크를 확인해주세요.", "넓은 멘션은 신중하게 사용"]);
export const FileShareMock = createMock("File Share", "파일은 대화 맥락과 함께 공유될 때 나중에 찾기 쉽습니다.", ["proposal-v2.pdf", "meeting-notes.txt", "이미지 대체 텍스트 포함"]);
export const SearchMock = createMock("Search", "검색은 Slack에 쌓인 대화와 결정을 다시 찾는 기능입니다.", ["in:proj-renewal from:@jiwon has:link", "필터: 채널 / 작성자 / 링크", "지난 결정사항 다시 찾기"]);
export const HuddleMock = createMock("Huddle", "허들은 짧게 이야기하고 바로 결정할 때 유용합니다.", ["짧은 음성 대화 진행 중", "참여자 3명", "결정사항은 채널에 요약"]);
export const CanvasMock = createMock("Canvas", "Canvas는 긴 정보를 정리하고 공유하는 공간입니다.", ["프로젝트 운영 노트", "섹션: 목표 / 담당자 / 일정 / 참고 링크", "결정사항과 운영 기준"]);
export const ListMock = createMock("Lists", "Lists는 업무 항목과 상태를 정리하는 데 사용할 수 있습니다.", ["업무 | 담당자 | 상태 | 마감일", "교육 자료 정리 | @mina | 진행 중 | 금요일", "피드백 수집 | @jun | 예정 | 다음 주"]);
export const WorkflowBuilderMock = createMock("Workflow Builder", "Workflow는 시작 조건과 실행 단계로 구성됩니다.", ["Trigger", "Form", "Step", "Branch", "Message"]);
export const MarketplaceMock = createMock("Marketplace", "앱은 편리하지만 권한과 데이터 접근 범위를 확인해야 합니다.", ["문서 앱: 파일 읽기 요청", "CRM 앱: 고객 데이터 접근", "설치 전 관리자 승인"]);
export const ConnectorMock = createMock("Connector", "Connector는 외부 서비스의 작업을 워크플로 단계로 연결합니다.", ["Google Sheets: 행 추가", "Calendar: 일정 생성", "타사 계정 인증 필요 가능"]);
export const AdminMock = createMock("Admin", "관리자 기능은 플랜과 권한에 따라 사용 범위가 달라질 수 있습니다.", ["역할", "권한", "보안", "감사 로그"]);
export const RolePermissionMock = createMock("Role & Permission", "역할은 누가 무엇을 볼 수 있고 변경할 수 있는지를 결정합니다.", ["Owner: 중요한 설정", "Admin: 운영 관리", "Member: 일반 사용", "Guest: 제한 접근"]);
export const GuestAccessMock = createMock("Guest Access", "게스트는 필요한 채널에 제한적으로 접근하는 사용자입니다.", ["Single-channel Guest: 1개 채널", "Multi-channel Guest: 여러 지정 채널", "접근 범위 검토"]);
export const ConnectMock = createMock("External Collaboration", "외부 협업은 접근 범위와 공유 정책을 함께 확인해야 합니다.", ["#ext-partner-launch", "내부 멤버 4명", "외부 멤버 2명"]);
export const ProfileMock = createMock("Profile", "프로필과 상태는 협업 상대에게 업무 맥락을 알려줍니다.", ["@jiwon / 교육 운영", "상태: 고객 미팅 중", "시간대: Asia/Seoul"]);
export const NotificationMock = createMock("Notification", "알림은 중요한 신호를 놓치지 않게 하되 소음을 줄여야 합니다.", ["멘션 알림: 켜짐", "참고 채널: 음소거", "방해 금지: 오후 8시 이후"]);
export const SidebarSettingsMock = createMock("Sidebar Settings", "사이드바 정리는 중요한 채널을 더 빨리 찾게 해줍니다.", ["고객 프로젝트 섹션", "내부 운영 섹션", "즐겨찾기 상단 고정"]);
export const AccountSecurityMock = createMock("Account Security", "계정 보안은 접속 기록과 인증 설정을 함께 확인합니다.", ["2단계 인증", "최근 접속 기록", "SSO 계정 정책"]);
export const MemberAdminMock = createMock("Member Admin", "멤버 관리는 초대, 역할 변경, 비활성화를 포함합니다.", ["새 멤버 초대", "역할 변경 요청", "퇴사자 계정 비활성화"]);
export const ChannelAdminMock = createMock("Channel Admin", "채널 관리는 이름 규칙, 보관, 게시 권한을 함께 다룹니다.", ["proj- 접두사", "notice- 접두사", "종료 채널 보관"]);
export const ConnectPolicyMock = createMock("Connect Policy", "외부 협업은 승인과 공유 정책을 함께 확인합니다.", ["외부 조직 초대: 승인 필요", "파일 공유: 정책 확인", "채널 종료 기준"]);
export const DataPolicyMock = createMock("Data Policy", "파일, Canvas, Lists 공유 범위는 데이터 정책과 연결됩니다.", ["파일 공개 링크 제한", "Canvas 외부 공유 검토", "Lists 접근 범위 확인"]);
export const EnterprisePlusMock = createMock("Enterprise+", "고객에게 설명할 때는 Enterprise+와 Enterprise 조직 표현을 우선 사용합니다. Enterprise Grid는 도움말 문서나 기존 자료에 남은 표현으로만 제한적으로 다룹니다.", ["Enterprise+ 플랜", "Enterprise 조직: 여러 워크스페이스", "조직 단위 정책: 앱·보안·감사"]);
export const AnalyticsMock = createMock("Analytics", "분석은 운영 현황을 이해하기 위한 관리 지표입니다.", ["활성 채널 42개", "앱 사용 현황 검토", "교육 필요 영역: 검색"]);
export const AuditLogMock = createMock("Audit Log", "감사 로그는 보안과 관리 이벤트를 추적하기 위한 기록입니다.", ["앱 승인 변경", "멤버 역할 변경", "API 접근은 플랜 확인"]);
export const TutorialCardMock = createMock("Tutorial Card", "튜토리얼은 기능 설명보다 실제 업무 상황별 실습으로 구성합니다.", ["1. 채널 찾기", "2. 스레드로 질문하기", "3. 결정사항 저장하기"]);

const mockups: Record<MockupType, ComponentType> = {
  workspace: WorkspaceMock,
  sidebar: SidebarMock,
  channel: ChannelMock,
  thread: ThreadMock,
  "message-composer": MessageComposerMock,
  mention: MentionMock,
  "file-share": FileShareMock,
  search: SearchMock,
  huddle: HuddleMock,
  canvas: CanvasMock,
  list: ListMock,
  workflow: WorkflowBuilderMock,
  marketplace: MarketplaceMock,
  connector: ConnectorMock,
  admin: AdminMock,
  "role-permission": RolePermissionMock,
  "guest-access": GuestAccessMock,
  connect: ConnectMock,
  security: AccountSecurityMock,
  analytics: AnalyticsMock,
  profile: ProfileMock,
  notification: NotificationMock,
  "account-security": AccountSecurityMock,
  "member-admin": MemberAdminMock,
  "channel-admin": ChannelAdminMock,
  "connect-policy": ConnectPolicyMock,
  "data-policy": DataPolicyMock,
  "enterprise-plus": EnterprisePlusMock,
  "audit-log": AuditLogMock,
  "sidebar-settings": SidebarSettingsMock,
  tutorial: TutorialCardMock
};

export function TermMockup({ type }: { type: MockupType }) {
  const SelectedMockup = mockups[type] || TutorialCardMock;
  return <SelectedMockup />;
}
