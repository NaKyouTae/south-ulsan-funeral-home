"use client";

import { useEffect, useRef } from "react";

type Room = {
  name: string;
  status: string;
  deceased: string;
  chief: string;
  departure: string;
  site: string;
};

type MobileRoomCarouselProps = {
  rooms: Room[];
};

export default function MobileRoomCarousel({ rooms }: MobileRoomCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const resetTimerRef = useRef<number | null>(null);
  const activeRooms = rooms.filter((room) => room.status === "사용중");
  const loopRooms = activeRooms.length > 1 ? [...activeRooms, ...activeRooms, ...activeRooms] : activeRooms;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || activeRooms.length <= 1) return;

    const card = container.querySelector<HTMLElement>("[data-room-card]");
    if (!card) return;

    const step = card.offsetWidth + 12;
    container.scrollLeft = step * activeRooms.length;
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, [activeRooms.length]);

  const scheduleLoopReset = (targetIndex: number, length: number, step: number) => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    if (targetIndex >= length && targetIndex < length * 2) return;

    resetTimerRef.current = window.setTimeout(() => {
      const container = scrollRef.current;
      if (!container) return;

      const normalizedIndex =
        targetIndex < length ? targetIndex + length : targetIndex - length;

      container.scrollTo({
        left: normalizedIndex * step,
        behavior: "auto",
      });
    }, 360);
  };

  const scrollByCard = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-room-card]");
    const step = card ? card.offsetWidth + 12 : container.clientWidth * 0.82;
    const length = activeRooms.length;

    if (length <= 1) {
      container.scrollBy({
        left: direction === "next" ? step : -step,
        behavior: "smooth",
      });
      return;
    }

    const currentIndex = Math.round(container.scrollLeft / step);
    const targetIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    container.scrollTo({
      left: targetIndex * step,
      behavior: "smooth",
    });

    scheduleLoopReset(targetIndex, length, step);
  };

  return (
    <div className="relative md:hidden">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 flex w-screen -translate-x-1/2 items-center justify-between px-1">
        <div className="pointer-events-auto">
          <button
            type="button"
            aria-label="이전 빈소 보기"
            onClick={() => scrollByCard("prev")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-[rgba(22,39,34,0.76)] text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-colors active:bg-white/14"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M9.5 3.5L5 8l4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="pointer-events-auto">
          <button
            type="button"
            aria-label="다음 빈소 보기"
            onClick={() => scrollByCard("next")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-[rgba(22,39,34,0.76)] text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-colors active:bg-white/14"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6.5 3.5L11 8l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative left-1/2 flex w-screen -translate-x-1/2 snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopRooms.map((room, index) => (
          <article
            key={`${room.name}-${index}`}
            data-room-card
            className="w-[calc(100vw-3rem)] shrink-0 snap-center rounded-sm border border-white/14 bg-[rgba(77,94,87,0.82)] p-5 shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[12px] uppercase tracking-[0.24em] text-white/55">
                  Room
                </div>
                <div className="mt-1 text-[20px] font-semibold text-white">{room.name}</div>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-[14px] leading-[1.6] text-white/92">
              <div className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
                <span className="shrink-0 text-white/58">고인명</span>
                <span className="text-right font-medium text-white">{room.deceased}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
                <span className="shrink-0 text-white/58">상주</span>
                <span className="text-right font-medium text-white">{room.chief}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
                <span className="shrink-0 text-white/58">발인일시</span>
                <span className="text-right font-medium text-white">{room.departure}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
                <span className="shrink-0 text-white/58">장지</span>
                <span className="text-right font-medium text-white">{room.site}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
