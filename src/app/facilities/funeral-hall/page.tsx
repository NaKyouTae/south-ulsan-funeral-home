import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "빈소" };

const ROOMS = [
  { name: "VIP101호", area: "165㎡ (50평)", capacity: "120명", features: ["프리미엄 접객실", "전용 휴게공간", "독립 화장실"] },
  { name: "VIP301호", area: "99㎡ (30평)", capacity: "80명", features: ["넓은 접객실", "별도 분향소"] },
  { name: "VIP302호", area: "99㎡ (30평)", capacity: "80명", features: ["넓은 접객실", "별도 분향소"] },
  { name: "VIP401호", area: "66㎡ (20평)", capacity: "50명", features: ["접객실 포함", "기본 분향소"] },
  { name: "VIP402호", area: "66㎡ (20평)", capacity: "50명", features: ["접객실 포함", "기본 분향소"] },
];

export default function FuneralHallPage() {
  return (
    <>
      <PageHero
        eyebrow="Funeral Hall"
        title="빈소"
        description="규모와 특성이 다른 빈소를 운영하여 이용자의 상황에 맞는 선택을 도와드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "시설안내" }, { label: "빈소" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle eyebrow="Rooms" title="빈소 종류" />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {ROOMS.map((r) => (
            <div key={r.name} className="card p-7 hover:border-[var(--color-primary)] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase">
                    Room
                  </div>
                  <div className="mt-1 font-serif text-2xl font-bold text-[var(--color-primary)]">
                    {r.name}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-[var(--color-fg-muted)]">수용인원</div>
                  <div className="font-medium">{r.capacity}</div>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-[var(--color-border)] grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs text-[var(--color-fg-muted)]">면적</div>
                  <div className="mt-0.5 font-medium">{r.area}</div>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {r.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs px-2.5 py-1 bg-[var(--color-primary-tint)] text-[var(--color-primary)]"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
