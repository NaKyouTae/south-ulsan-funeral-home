import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white/80">
      {/* 긴급 상담 배너 */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:px-6 md:flex-row md:items-center md:text-left">
          <div className="font-serif text-[22px] leading-snug text-white md:text-[24px]">
            임종 후 가장 먼저, {SITE.name}으로 연락주세요.
          </div>
          <a
            href={`tel:${SITE.phoneLink}`}
            className="hidden min-h-[56px] items-center gap-3 rounded-sm bg-[var(--color-accent)] px-7 py-4 text-[1.05rem] font-bold text-[var(--color-primary)] hover:bg-[var(--color-accent-soft)] md:inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* 메뉴 그리드 */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 text-[1rem] sm:px-6 md:grid-cols-3 lg:grid-cols-6">
        {NAV.map((item) => (
          <div key={item.href}>
            <div className="mb-3 text-[1.05rem] font-medium text-white">{item.label}</div>
            <ul className="space-y-2.5">
              {item.children?.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-[var(--color-accent-soft)]">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 회사 정보 */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-white/70 sm:px-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <div className="font-serif text-lg text-white">{SITE.name}</div>
            <div>
              주소 {SITE.address} &nbsp;|&nbsp; 대표번호 {SITE.phone} &nbsp;|&nbsp; FAX{" "}
              {SITE.fax}
            </div>
            <div>
              사업자등록번호 {SITE.businessNumber}
            </div>
          </div>
          <div className="text-sm text-white/55">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
