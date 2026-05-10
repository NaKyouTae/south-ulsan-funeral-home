"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-border)]">
      {/* 상단 유틸리티 바 */}
      <div className="hidden md:block bg-[var(--color-primary)] text-white/90">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-xs h-9">
          <div className="flex items-center gap-4">
            <span className="font-serif tracking-wider">{SITE.tagline}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.phone}`} className="hover:text-[var(--color-accent-soft)]">
              상담 전화 {SITE.phone}
            </a>
            <span className="text-white/30">|</span>
            <span>{SITE.hours}</span>
          </div>
        </div>
      </div>

      {/* 메인 네비 */}
      <div
        className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20"
        onMouseLeave={() => setHovered(null)}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center">
            <span className="font-serif text-[var(--color-primary)] text-lg font-bold">南</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg font-bold text-[var(--color-primary)]">
              {SITE.name}
            </div>
            <div className="text-[11px] tracking-widest text-[var(--color-fg-muted)] uppercase">
              {SITE.nameEn}
            </div>
          </div>
        </Link>

        {/* 데스크탑 네비 */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHovered(item.href)}
              >
                <Link
                  href={item.href}
                  data-active={active}
                  className="nav-link block px-4 py-3 text-sm font-medium text-[var(--color-fg)]"
                >
                  {item.label}
                </Link>
                {item.children && hovered === item.href && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[180px] bg-white border border-[var(--color-border)] shadow-md py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-5 py-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-tint)]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="text-right leading-tight"
          >
            <div className="text-[11px] tracking-widest text-[var(--color-fg-muted)] uppercase">
              24h Contact
            </div>
            <div className="font-serif text-lg font-bold text-[var(--color-primary)]">
              {SITE.phone}
            </div>
          </a>
        </div>

        {/* 모바일 햄버거 */}
        <button
          className="lg:hidden p-2"
          aria-label="메뉴 열기"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
            {NAV.map((item) => (
              <div key={item.href} className="py-3 border-b border-[var(--color-border)] last:border-0">
                <Link
                  href={item.href}
                  className="block font-medium text-[var(--color-primary)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 grid grid-cols-2 gap-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="text-sm text-[var(--color-fg-muted)] py-1.5"
                        onClick={() => setOpen(false)}
                      >
                        · {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="mt-4 btn-primary w-full"
            >
              {SITE.phone} 전화 상담
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
