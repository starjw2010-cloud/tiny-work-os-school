import type { FactStatus, TermCategory } from "@/types/content";

const statusLabels: Record<FactStatus, string> = {
  verified: "확인됨",
  "needs-review": "검토 필요",
  unstable: "변동 가능"
};

const statusClasses: Record<FactStatus, string> = {
  verified: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "needs-review": "border-amber-200 bg-amber-50 text-amber-700",
  unstable: "border-rose-200 bg-rose-50 text-rose-700"
};

const categoryLabels: Record<TermCategory, string> = {
  basic: "기본",
  using: "사용",
  "personal-settings": "개인 설정",
  automation: "자동화",
  collaboration: "외부 협업",
  "admin-security": "관리/보안",
  governance: "거버넌스",
  troubleshooting: "문제 해결"
};

export function FactStatusBadge({ status }: { status: FactStatus }) {
  return <span className={`rounded-md border px-2 py-1 text-xs font-black ${statusClasses[status]}`}>{statusLabels[status]}</span>;
}

export function TermCategoryBadge({ category }: { category: TermCategory }) {
  return <span className="rounded-md bg-lavender px-2 py-1 text-xs font-black text-deepPurple">{categoryLabels[category]}</span>;
}

export function SoftBadge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md border border-line bg-white px-2 py-1 text-xs font-bold text-muted">{children}</span>;
}
