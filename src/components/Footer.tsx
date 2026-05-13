import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  const mapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(SITE.address)}`;

  return (
    <footer className="bg-[var(--color-primary)] text-white/80">
      {/* 긴급 상담 배너 */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.2em] text-[var(--color-accent-soft)] uppercase mb-1">
              24h Emergency Call
            </div>
            <div className="font-serif text-2xl text-white">
              임종 후 가장 먼저, {SITE.name}으로 연락주세요
            </div>
          </div>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] text-[var(--color-primary)] px-7 py-4 rounded-sm font-bold"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* 메뉴 그리드 */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        {NAV.map((item) => (
          <div key={item.href}>
            <div className="text-white font-medium mb-3">{item.label}</div>
            <ul className="space-y-2">
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
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/60">
          <div className="space-y-1.5">
            <div className="font-serif text-base text-white">{SITE.name}</div>
            <div>
              주소 {SITE.address} &nbsp;|&nbsp; 대표번호 {SITE.phone} &nbsp;|&nbsp; FAX{" "}
              {SITE.fax}
            </div>
            <div>
              찾아오는길{" "}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-[var(--color-accent-soft)]"
              >
                네이버 지도에서 보기
              </a>
            </div>
            <div>
              사업자등록번호 {SITE.businessNumber} &nbsp;|&nbsp; 이메일 {SITE.email}
            </div>
          </div>
          <div className="text-white/50">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
