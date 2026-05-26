"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-border)]">
      {/* 상단 유틸리티 바 */}
      <div className="hidden md:block bg-[var(--color-primary)] text-white/90">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm">
          <div className="flex items-center gap-4">
            <span className="font-serif tracking-wider">{SITE.tagline}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.phoneLink}`} className="hover:text-[var(--color-accent-soft)]">
              상담 전화 {SITE.phone}
            </a>
            <span className="text-white/30">|</span>
            <span>{SITE.hours}</span>
          </div>
        </div>
      </div>

      {/* 메인 네비 */}
      <div
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-22"
        onMouseLeave={() => setHovered(null)}
      >
        <Link href="/" className="flex h-full items-center">
          <div className="relative -top-[1px] h-[40px] w-[228px] md:w-[300px]">
            <Image
              src="/site-logo.png"
              alt={`${SITE.name} 로고`}
              fill
              sizes="(min-width: 768px) 300px, 228px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* 데스크탑 네비 */}
        <nav className="hidden h-full lg:flex items-stretch gap-7 self-stretch">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <div
                key={item.href}
                className="relative h-full"
                onMouseEnter={() => setHovered(item.href)}
              >
                <Link
                  href={item.href}
                  data-active={active}
                  className="nav-link flex h-full items-center px-5 text-base font-medium text-[var(--color-fg)] xl:text-[1.05rem]"
                >
                  {item.label}
                </Link>
                {item.children && hovered === item.href && (
                  <div className="absolute left-1/2 top-full min-w-[200px] -translate-x-1/2 border border-[var(--color-border)] bg-white py-2 shadow-md">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-5 py-2.5 text-[1rem] text-[var(--color-fg-muted)] hover:bg-[var(--color-primary-tint)] hover:text-[var(--color-primary)]"
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
            href={`tel:${SITE.phoneLink}`}
            className="text-right leading-tight"
          >
            <div className="text-xs tracking-widest text-[var(--color-fg-muted)] uppercase">
              24h Contact
            </div>
            <div className="font-serif text-xl font-bold text-[var(--color-primary)]">
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
        <div className="fixed inset-x-0 top-18 bottom-0 z-40 border-t border-[var(--color-border)] bg-white md:top-20 lg:hidden">
          <div className="flex h-full flex-col overflow-y-auto px-6 py-5">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-[var(--color-border)] py-4 last:border-0">
                <Link
                  href={item.href}
                  className="block text-xl font-medium text-[var(--color-primary)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="py-2 text-[1.05rem] text-[var(--color-fg-muted)]"
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
              href={`tel:${SITE.phoneLink}`}
              className="mt-6 btn-primary w-full"
            >
              {SITE.phone} 전화 상담
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
