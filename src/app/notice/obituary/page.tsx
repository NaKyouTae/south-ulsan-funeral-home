import PageHero from "@/components/PageHero";

export const metadata = { title: "부고안내" };

const OBITUARIES = [
  { id: 1, room: "1호실", deceased: "故 김ㅇㅇ", chief: "김ㅇㅇ 외 3인", departure: "2026.05.12 06:30", site: "울산하늘공원" },
  { id: 2, room: "2호실", deceased: "故 이ㅇㅇ", chief: "이ㅇㅇ 외 2인", departure: "2026.05.12 08:00", site: "울주군 선영" },
  { id: 3, room: "4호실", deceased: "故 박ㅇㅇ", chief: "박ㅇㅇ 외 2인", departure: "2026.05.13 07:00", site: "양산영락공원" },
];

export default function ObituaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Obituary"
        title="부고안내"
        description="현재 모셔지고 있는 고인의 부고를 안내해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "부고안내" }, { label: "부고안내" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-4">
          {OBITUARIES.map((o) => (
            <article
              key={o.id}
              className="card p-6 md:p-7 grid md:grid-cols-[120px_1fr_auto] gap-6 items-center"
            >
              <div className="font-serif text-xl font-bold text-[var(--color-primary)]">
                {o.room}
              </div>
              <div>
                <div className="font-serif text-xl text-[var(--color-fg)] font-medium">
                  {o.deceased}
                </div>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 text-sm text-[var(--color-fg-muted)]">
                  <div>
                    <span className="text-xs text-[var(--color-accent)] mr-1">상주</span>
                    {o.chief}
                  </div>
                  <div>
                    <span className="text-xs text-[var(--color-accent)] mr-1">발인</span>
                    {o.departure}
                  </div>
                  <div>
                    <span className="text-xs text-[var(--color-accent)] mr-1">장지</span>
                    {o.site}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
