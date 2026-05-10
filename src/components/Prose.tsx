import { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-[var(--color-fg)] leading-loose [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-[var(--color-primary)] [&_p]:text-[var(--color-fg-muted)] [&_ul]:space-y-2 [&_ul]:text-[var(--color-fg-muted)] [&_li]:pl-5 [&_li]:relative [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-[var(--color-accent)]">
      {children}
    </div>
  );
}
