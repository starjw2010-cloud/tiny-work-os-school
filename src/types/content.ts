export type TrackId = "start" | "using" | "personal-settings" | "automation" | "admin" | "tutorials";

export type SourceCategory = TrackId | "developer-docs" | "pricing";

export type TermCategory =
  | "basic"
  | "using"
  | "personal-settings"
  | "automation"
  | "collaboration"
  | "admin-security"
  | "governance"
  | "troubleshooting";

export type FactStatus = "verified" | "needs-review" | "unstable";

export type MockupType =
  | "workspace"
  | "sidebar"
  | "channel"
  | "thread"
  | "message-composer"
  | "mention"
  | "file-share"
  | "search"
  | "huddle"
  | "canvas"
  | "list"
  | "workflow"
  | "marketplace"
  | "connector"
  | "admin"
  | "role-permission"
  | "guest-access"
  | "connect"
  | "security"
  | "analytics"
  | "account-security"
  | "member-admin"
  | "channel-admin"
  | "connect-policy"
  | "data-policy"
  | "enterprise-plus"
  | "audit-log"
  | "sidebar-settings"
  | "profile"
  | "notification"
  | "tutorial";

export type Source = {
  id: string;
  name: string;
  url: string;
  category: SourceCategory;
  area: string;
  notes: string;
  lastVerifiedAt: string;
};

export type LearningModule = {
  id: string;
  title: string;
  whatYouLearn: string[];
  practicalMeaning: string;
  relatedTerms: string[];
  screenMockupType: MockupType;
  customerTalkTrack: string;
  commonMistake: string;
  caution: string;
};

export type LearningPath = {
  id: string;
  slug: string;
  title: string;
  category: TrackId;
  audience: "new-user" | "admin" | "manager" | "consultant" | "all";
  summary: string;
  sourceUrl: string;
  sourceName: string;
  lastVerifiedAt: string;
  modules: LearningModule[];
};

export type LearningLesson = {
  id: string;
  slug: string;
  title: string;
  track: TrackId;
  sourceUrl: string;
  sourceName: string;
  lastVerifiedAt: string;
  summary: string;
  whatYouLearn: string[];
  practicalMeaning: string;
  relatedTerms: string[];
  mockupType: MockupType;
  customerTalkTrack: string;
  commonMistake: string;
  caution: string;
};

export type Term = {
  id: string;
  slug: string;
  term: string;
  koreanName: string;
  category: TermCategory;
  oneLine: string;
  plainExplanation: string;
  easyAnalogy: string;
  businessExample: string;
  customerTalkTrack: string;
  commonMistake: string;
  caution: string;
  relatedTerms: string[];
  sourceUrl: string;
  sourceName: string;
  lastVerifiedAt: string;
  factStatus: FactStatus;
  screenMockupType: MockupType;
};

export type UseCase = {
  id: string;
  title: string;
  situation: string;
  relatedTerms: string[];
  channelExample: string;
  operatingTip: string;
  customerTalkTrack: string;
  caution: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  relatedTerms: string[];
};
