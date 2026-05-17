import { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6 text-[1.06rem] text-[var(--color-fg)] leading-[1.9] md:text-[1.12rem] [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:font-serif [&_h3]:text-[1.45rem] [&_h3]:font-bold [&_h3]:leading-tight [&_h3]:text-[var(--color-primary)] [&_p]:text-[var(--color-fg-muted)] [&_ul]:space-y-3 [&_ul]:text-[var(--color-fg-muted)] [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:content-['•'] [&_li]:before:text-[var(--color-accent)]">
      {children}
    </div>
  );
}
