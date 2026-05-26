"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryPhoto = {
  src: string;
  alt: string;
  label: string;
};

type InlineRoomGalleryProps = {
  roomName: string;
  photos: GalleryPhoto[];
};

export default function InlineRoomGallery({
  roomName,
  photos,
}: InlineRoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safePhotos = useMemo(() => (photos.length ? photos : []), [photos]);

  if (!safePhotos.length) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? safePhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === safePhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-primary-tint)]">
        <Image
          src={safePhotos[activeIndex].src}
          alt={safePhotos[activeIndex].alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(23,34,70,0.45)] via-transparent to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
          {safePhotos[activeIndex].label}
        </div>
        <div className="absolute bottom-5 left-5 text-sm font-medium text-white">
          {roomName} · {activeIndex + 1}/{safePhotos.length}
        </div>

        {safePhotos.length > 1 && (
          <>
            <button
              type="button"
              aria-label={`${roomName} 이전 사진 보기`}
              onClick={handlePrev}
              className="absolute left-4 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[var(--color-primary)] transition-colors hover:bg-white md:cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
              aria-label={`${roomName} 다음 사진 보기`}
              onClick={handleNext}
              className="absolute right-4 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[var(--color-primary)] transition-colors hover:bg-white md:cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6.5 3.5L11 8l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="absolute bottom-5 right-5 flex items-center gap-1.5">
              {safePhotos.map((photo, index) => (
                <button
                  key={`${photo.alt}-${index}`}
                  type="button"
                  aria-label={`${roomName} ${index + 1}번째 사진 보기`}
                  onClick={() => setActiveIndex(index)}
                  className={index === activeIndex ? "h-[6px] w-5 rounded-full bg-white" : "h-[6px] w-[6px] rounded-full bg-white/55"}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
