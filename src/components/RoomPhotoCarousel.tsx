"use client";

import Image from "next/image";
import { useRef } from "react";

type RoomPhotoItem = {
  name: string;
  image: string;
  caption: string;
};

type RoomPhotoCarouselProps = {
  items: RoomPhotoItem[];
};

export default function RoomPhotoCarousel({ items }: RoomPhotoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-room-photo-card]");
    const step = card ? card.offsetWidth + 24 : container.clientWidth * 0.82;

    container.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="이전 사진 보기"
          onClick={() => scrollByCard("prev")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-tint)] md:cursor-pointer"
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
        <button
          type="button"
          aria-label="다음 사진 보기"
          onClick={() => scrollByCard("next")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-tint)] md:cursor-pointer"
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

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            key={item.name}
            data-room-photo-card
            className="group w-[85vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-sm border border-[var(--color-border)] bg-white"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-primary-tint)]">
              <Image
                src={item.image}
                alt={`${item.name} 사진`}
                fill
                sizes="(max-width: 768px) 85vw, 420px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(23,34,70,0.55)] via-transparent to-transparent" />
              <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/92 px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
                {item.name}
              </div>
            </div>
            <div className="px-5 py-4">
              <div className="text-base font-medium text-[var(--color-fg)]">
                {item.caption}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
