import PageHero from "@/components/PageHero";

export const metadata = { title: "연혁" };

const TIMELINE = [
  { year: "2024", events: ["남울산전문장례식장 리모델링 완료", "전기차 충전 시설 도입"] },
  { year: "2020", events: ["빈소 5실 증설 (총 8실 운영)", "주차장 200면 확장"] },
  { year: "2015", events: ["장례문화 우수업체 선정"] },
  { year: "2008", events: ["남울산전문장례식장 개관"] },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="History"
        title="연혁"
        description="남울산전문장례식장이 걸어온 길을 소개합니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "장례식장 안내" }, { label: "연혁" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-16">
        <ol className="relative border-l-2 border-[var(--color-primary)]/20 pl-8 space-y-12">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-bg)]" />
              <div className="font-serif text-3xl font-bold text-[var(--color-primary)]">
                {t.year}
              </div>
              <ul className="mt-4 space-y-2 text-[var(--color-fg-muted)]">
                {t.events.map((e, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--color-accent)]">·</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
