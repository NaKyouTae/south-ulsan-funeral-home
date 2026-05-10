import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { SITE } from "@/lib/site";

export const metadata = { title: "오시는 길" };

const TRANSPORT = [
  {
    label: "자가용",
    items: [
      "경부고속도로 → 울산IC에서 14번 국도 진입",
      "장례식장 정문 진입 후 지하주차장 이용 (200대 규모)",
    ],
  },
  {
    label: "버스",
    items: [
      "간선버스 401, 402, 715번 → 남울산장례식장 정류장 하차",
      "지선버스 124, 217번 → 남울산병원 입구 하차 후 도보 3분",
    ],
  },
  {
    label: "택시",
    items: [
      "울산역에서 택시 약 25분 (요금 약 18,000원)",
      "태화강역에서 택시 약 12분 (요금 약 8,500원)",
    ],
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="오시는 길"
        description="자가용·대중교통 어느 쪽이든 편리하게 방문하실 수 있습니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "장례식장 안내" }, { label: "오시는 길" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* 지도 영역 (placeholder) */}
        <div className="card overflow-hidden">
          <div className="aspect-[16/7] bg-[var(--color-primary-tint)] flex items-center justify-center text-[var(--color-primary)]">
            <div className="text-center">
              <div className="font-serif text-3xl">📍</div>
              <div className="mt-2 font-medium">{SITE.address}</div>
              <div className="mt-1 text-xs text-[var(--color-fg-muted)]">
                * 지도 영역 (네이버/카카오 지도 임베드 가능)
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
            <div className="p-6">
              <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase">
                Address
              </div>
              <div className="mt-2 font-medium">{SITE.address}</div>
            </div>
            <div className="p-6">
              <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase">
                Phone
              </div>
              <div className="mt-2 font-medium">{SITE.phone}</div>
            </div>
            <div className="p-6">
              <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase">
                Hours
              </div>
              <div className="mt-2 font-medium">{SITE.hours}</div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionTitle eyebrow="Transport" title="교통편 안내" />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {TRANSPORT.map((t) => (
              <div key={t.label} className="card p-7">
                <div className="font-serif text-lg font-bold text-[var(--color-primary)]">
                  {t.label}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-fg-muted)]">
                  {t.items.map((it, i) => (
                    <li key={i} className="leading-relaxed">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
