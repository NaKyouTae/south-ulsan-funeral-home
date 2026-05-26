"use client";

import { useEffect } from "react";
import type { Obituary } from "@/lib/fis/types";

type Props = {
  obituary: Obituary | null;
  onClose: () => void;
};

function fmtDateTime(raw: string): string {
  if (!raw) return "-";
  const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/.exec(raw.trim());
  if (!m) return raw;
  const [, y, mo, d, h, mi] = m;
  return `${y}.${mo}.${d} ${h}:${mi}`;
}

export default function ObituaryDetailModal({ obituary, onClose }: Props) {
  useEffect(() => {
    if (!obituary) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [obituary, onClose]);

  if (!obituary) return null;

  const meta = [obituary.age && `향년 ${obituary.age}세`, obituary.gender, obituary.religion]
    .filter(Boolean)
    .join(" · ");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="obituary-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/55"
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-[#e6e8ee] px-7 py-5">
          <div>
            <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Obituary
            </div>
            <h2 id="obituary-detail-title" className="mt-1 font-serif text-[24px] font-bold text-[var(--color-fg)]">
              故 {obituary.deceased}
            </h2>
            {meta && <div className="mt-1 text-[14px] text-[var(--color-fg-muted)]">{meta}</div>}
          </div>
          <button
            type="button"
            aria-label="모달 닫기"
            onClick={onClose}
            className="-mr-2 -mt-1 inline-flex h-9 w-9 items-center justify-center text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="grid gap-6 px-7 py-6 md:grid-cols-[160px_minmax(0,1fr)]">
          {obituary.photoPath ? (
            <div className="mx-auto md:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={obituary.photoPath}
                alt={`故 ${obituary.deceased} 영정사진`}
                className="h-[200px] w-[160px] border border-[#e6e8ee] bg-[#f4f4f4] object-cover"
              />
            </div>
          ) : (
            <div className="mx-auto flex h-[200px] w-[160px] items-center justify-center border border-dashed border-[#d3d7df] bg-[#fafafa] text-[12px] text-[var(--color-fg-muted)] md:mx-0">
              영정사진
            </div>
          )}

          <dl className="grid grid-cols-[88px_minmax(0,1fr)] gap-y-3 gap-x-4 text-[15px]">
            <dt className="text-[var(--color-fg-muted)]">빈소</dt>
            <dd className="font-medium text-[var(--color-fg)]">{obituary.roomLabel}</dd>

            <dt className="text-[var(--color-fg-muted)]">입실</dt>
            <dd className="text-[var(--color-fg)]">{fmtDateTime(obituary.roomDt)}</dd>

            <dt className="text-[var(--color-fg-muted)]">입관</dt>
            <dd className="text-[var(--color-fg)]">{fmtDateTime(obituary.ipDt)}</dd>

            <dt className="text-[var(--color-fg-muted)]">발인</dt>
            <dd className="font-medium text-[var(--color-fg)]">{fmtDateTime(obituary.balinDt)}</dd>

            <dt className="text-[var(--color-fg-muted)]">장지</dt>
            <dd className="text-[var(--color-fg)]">{obituary.site}</dd>

            {obituary.sangjoCorp && (
              <>
                <dt className="text-[var(--color-fg-muted)]">상조</dt>
                <dd className="text-[var(--color-fg)]">{obituary.sangjoCorp}</dd>
              </>
            )}
          </dl>
        </div>

        {obituary.sangju.length > 0 && (
          <div className="border-t border-[#e6e8ee] px-7 py-6">
            <div className="text-[13px] font-semibold text-[var(--color-fg-muted)]">상주</div>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {obituary.sangju.map((s, i) => (
                <li key={`${s.rel}-${s.name}-${i}`} className="flex items-baseline gap-2 text-[15px]">
                  <span className="inline-flex h-[22px] min-w-[52px] items-center justify-center bg-[var(--color-primary-tint)] px-2 text-[12px] font-medium text-[var(--color-primary)]">
                    {s.rel || "상주"}
                  </span>
                  <span className="text-[var(--color-fg)]">{s.name || "-"}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {obituary.comment && (
          <div className="border-t border-[#e6e8ee] px-7 py-6">
            <div className="text-[13px] font-semibold text-[var(--color-fg-muted)]">비고</div>
            <p className="mt-2 whitespace-pre-wrap text-[15px] leading-[1.7] text-[var(--color-fg)]">
              {obituary.comment}
            </p>
          </div>
        )}

        <div className="border-t border-[#e6e8ee] bg-[#fafafa] px-7 py-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 items-center justify-center bg-[var(--color-primary)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-primary-soft)]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
