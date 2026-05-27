"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const inactiveRooms = rooms.filter((room) => room.status !== "사용중");
  const visibleRooms =
    activeRooms.length <= 3 ? [...activeRooms, ...inactiveRooms] : activeRooms;
  const loopRooms =
    visibleRooms.length > 1 ? [...visibleRooms, ...visibleRooms, ...visibleRooms] : visibleRooms;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || visibleRooms.length <= 1) return;

    const card = container.querySelector<HTMLElement>("[data-room-card]");
    if (!card) return;

    const step = card.offsetWidth + 12;
    container.scrollLeft = step * visibleRooms.length;
    setActiveIndex(0);
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, [visibleRooms.length]);

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
    const length = visibleRooms.length;

    if (length <= 1) {
      container.scrollBy({
        left: direction === "next" ? step : -step,
        behavior: "smooth",
      });
      return;
    }

    const currentIndex = Math.round(container.scrollLeft / step);
    const targetIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    const normalizedIndex = ((targetIndex % length) + length) % length;

    container.scrollTo({
      left: targetIndex * step,
      behavior: "smooth",
    });

    setActiveIndex(normalizedIndex);
    scheduleLoopReset(targetIndex, length, step);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-room-card]");
    if (!card) return;

    const step = card.offsetWidth + 12;
    const length = visibleRooms.length;
    if (!length) return;

    const currentIndex = Math.round(container.scrollLeft / step);
    const normalizedIndex = ((currentIndex % length) + length) % length;
    setActiveIndex(normalizedIndex);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 flex w-screen -translate-x-1/2 items-center justify-between px-1 md:left-0 md:w-full md:translate-x-0 md:px-0">
        <div className="pointer-events-auto md:-translate-x-[58%]">
          <button
            type="button"
            aria-label="이전 빈소 보기"
            onClick={() => scrollByCard("prev")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[rgba(255,255,255,0.72)] text-[var(--color-primary)] shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-colors hover:bg-white active:bg-white md:h-11 md:w-11 md:cursor-pointer"
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
        <div className="pointer-events-auto md:translate-x-[58%]">
          <button
            type="button"
            aria-label="다음 빈소 보기"
            onClick={() => scrollByCard("next")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[rgba(255,255,255,0.72)] text-[var(--color-primary)] shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-colors hover:bg-white active:bg-white md:h-11 md:w-11 md:cursor-pointer"
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
        onScroll={handleScroll}
        className="relative left-1/2 flex w-screen -translate-x-1/2 snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:left-0 md:w-full md:translate-x-0 md:gap-4 md:overflow-x-hidden md:px-0 lg:gap-5"
      >
        {loopRooms.map((room, index) => (
          <article
            key={`${room.name}-${index}`}
            data-room-card
            className="break-keep flex min-h-[424px] w-[calc(100vw-3rem)] shrink-0 snap-center flex-col overflow-hidden border border-[#d3d7df] bg-white md:w-[calc((100%-1rem)/2)] md:snap-start lg:w-[calc((100%-3.75rem)/4)]"
          >
            <div className="flex flex-1 flex-col px-8 pb-8 pt-6 md:px-6 md:pb-8 md:pt-6 lg:px-5 lg:pb-8 lg:pt-6">
              <div className="min-h-fit p-0 text-center text-[20px] font-medium leading-tight text-[var(--color-primary)] md:text-[20px] lg:text-[20px]">
                {room.deceased}
              </div>

              <div className="mb-0 mt-6 border-t border-[#d9dce3] pb-0 pt-7 text-[#5a616c] md:pb-0 md:pt-7 lg:pb-0 lg:pt-7">
                <div className="space-y-4 md:space-y-3.5 lg:space-y-3">
                <div className="flex items-start gap-6 md:gap-3.5 lg:gap-3">
                  <span className="mt-1 inline-flex h-[22px] w-[64px] shrink-0 items-center justify-center bg-[var(--color-accent)] pb-[2px] pt-0 align-middle text-[14px] font-medium leading-none text-white">
                    빈소
                  </span>
                  <span className="flex min-h-[22px] w-[calc(100%-64px)] items-center break-keep text-left text-[16px] font-medium leading-[1.55] text-[#5a616c] md:text-[16px] lg:text-[16px]">
                    {room.name}
                  </span>
                </div>
                <div className="flex items-start gap-6 md:gap-3.5 lg:gap-3">
                  <span className="mt-1 inline-flex h-[22px] w-[64px] shrink-0 items-center justify-center bg-[var(--color-accent)] pb-[2px] pt-0 align-middle text-[14px] font-medium leading-none text-white">
                    상주명
                  </span>
                  <span className="flex min-h-[22px] w-[calc(100%-64px)] items-center break-keep text-left text-[16px] font-medium leading-[1.7] text-[#5a616c] md:text-[16px] lg:text-[16px]">
                    {room.chief}
                  </span>
                </div>
                <div className="flex items-start gap-6 md:gap-3.5 lg:gap-3">
                  <span className="mt-1 inline-flex h-[22px] w-[64px] shrink-0 items-center justify-center bg-[var(--color-accent)] pb-[2px] pt-0 align-middle text-[14px] font-medium leading-none text-white">
                    장지
                  </span>
                  <span className="flex min-h-[22px] w-[calc(100%-64px)] items-center break-keep text-left text-[16px] font-medium leading-[1.7] text-[#5a616c] md:text-[16px] lg:text-[16px]">
                    {room.site}
                  </span>
                </div>
                <div className="flex items-start gap-6 md:gap-3.5 lg:gap-3">
                  <span className="mt-1 inline-flex h-[22px] w-[64px] shrink-0 items-center justify-center bg-[var(--color-accent)] pb-[2px] pt-0 align-middle text-[14px] font-medium leading-none text-white">
                    발인일시
                  </span>
                  <span className="flex min-h-[22px] w-[calc(100%-64px)] items-center break-keep text-left text-[16px] font-medium leading-[1.55] text-[#5a616c] md:text-[16px] lg:text-[16px]">
                    {room.departure}
                  </span>
                </div>
              </div>
              </div>
            </div>

            <Link
              href="/notice/obituary"
              className="mt-auto flex min-h-[56px] items-center justify-center bg-[rgba(23,34,70,0.86)] px-6 text-center text-[16px] font-medium text-white transition-colors hover:bg-[var(--color-primary)] md:min-h-[56px] md:text-[16px] lg:min-h-[52px] lg:text-[16px]"
            >
              상세 일정 보기
            </Link>
          </article>
        ))}
      </div>

      {visibleRooms.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {visibleRooms.map((room, index) => (
            <button
              key={`${room.name}-dot`}
              type="button"
              aria-label={`${index + 1}번째 빈소 보기`}
              onClick={() => {
                const container = scrollRef.current;
                if (!container) return;
                const card = container.querySelector<HTMLElement>("[data-room-card]");
                if (!card) return;
                const step = card.offsetWidth + 12;
                const baseIndex = visibleRooms.length + index;
                container.scrollTo({ left: baseIndex * step, behavior: "smooth" });
                setActiveIndex(index);
              }}
              className={index === activeIndex ? "h-[6px] w-5 rounded-full bg-[var(--color-accent)]" : "h-[6px] w-[6px] rounded-full bg-white/45"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
