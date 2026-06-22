import Link from "next/link";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/start", label: "시작하기" },
  { href: "/using", label: "사용하기" },
  { href: "/personal-settings", label: "개인 설정" },
  { href: "/automation", label: "자동화" },
  { href: "/admin", label: "관리" },
  { href: "/tutorials", label: "실습" },
  { href: "/terms", label: "용어" },
  { href: "/quiz", label: "퀴즈" },
  { href: "/sources", label: "출처" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/94 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 lg:flex-row lg:items-center lg:justify-between">
        <Link className="focus-ring flex items-center gap-3 rounded-lg" href="/">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-base text-white shadow-soft">🎒</span>
          <span>
            <span className="block text-base font-black text-ink">{siteConfig.siteName}</span>
            <span className="block text-xs font-semibold text-muted">{siteConfig.subtitle}</span>
          </span>
        </Link>
        <nav className="flex max-w-full gap-1 overflow-x-auto rounded-lg border border-line bg-white p-1 text-sm shadow-sm lg:flex-wrap lg:justify-end">
          {navItems.map((item) => (
            <Link
              className="focus-ring whitespace-nowrap rounded-md px-3 py-2 font-bold text-muted transition hover:bg-softPurple hover:text-primary"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
