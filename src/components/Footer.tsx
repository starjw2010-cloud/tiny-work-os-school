import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-5 py-7 text-sm text-muted lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <p className="font-black text-ink">© 2026 {siteConfig.siteName} by {siteConfig.owner}.</p>
          <p className="mt-1">Tiny learning notes for Slack lovers.</p>
          <p className="mt-1 font-semibold text-deepPurple">{siteConfig.affiliationNotice}</p>
        </div>
        <p className="rounded-lg border border-line bg-softPurple px-4 py-2 text-xs leading-5 text-deepPurple lg:text-right">
          {siteConfig.unofficialNotice}
        </p>
      </div>
    </footer>
  );
}
