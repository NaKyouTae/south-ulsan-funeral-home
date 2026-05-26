"use client";

import { useEffect } from "react";
import PageHero from "@/components/PageHero";

export default function ObituaryError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Obituary] 페이지 렌더 실패", error);
  }, [error]);

  return (
    <>
      <PageHero
        eyebrow="Obituary"
        title="부고안내"
        description="현재 모셔지고 있는 고인의 부고를 안내해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "부고안내" }, { label: "부고안내" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-xl border-y-[3px] border-[var(--color-fg)] px-6 py-16 text-center">
          <div className="text-[17px] font-semibold text-[var(--color-fg)]">
            부고 정보를 불러오지 못했습니다.
          </div>
          <p className="mt-3 text-[14px] leading-[1.7] text-[var(--color-fg-muted)]">
            일시적인 통신 오류일 수 있습니다.
            <br />
            잠시 후 다시 시도해주세요.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex h-11 items-center justify-center bg-[var(--color-primary)] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-primary-soft)]"
          >
            다시 불러오기
          </button>
        </div>
      </section>
    </>
  );
}
