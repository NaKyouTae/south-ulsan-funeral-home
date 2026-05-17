import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { SITE } from "@/lib/site";

export const metadata = { title: "오시는 길" };

const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(SITE.address)}`;

const TRANSPORT = [
  {
    label: "자가용",
    items: [
      `${SITE.address} 입력 후 방문`,
      "장례식장 정문 진입 후 주차장 이용",
    ],
  },
  {
    label: "버스",
    items: [
      "온산읍 덕신권 버스 노선 이용 후 덕신외로 인근 정류장에서 하차",
      "방문 전 최신 버스 노선과 정류장명은 지도 앱에서 확인해 주세요",
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
        <div className="card overflow-hidden">
          <a
            href={naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[16/7] min-h-[320px] overflow-hidden bg-[var(--color-primary-tint)]"
          >
            <Image
              src="/naver-map-preview.png"
              alt={`${SITE.name} 지도 미리보기`}
              fill
              sizes="(min-width: 1024px) 1120px, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
          </a>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
            <div className="p-6">
              <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase">
                Address
              </div>
              <div className="mt-2 font-medium">{SITE.address}</div>
              <div className="mt-1 text-sm text-[var(--color-fg-muted)]">우편번호 {SITE.postalCode}</div>
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
          <SectionTitle
            eyebrow="Transport"
            title="교통편 안내"
            description={`${SITE.address} 기준으로 방문 경로를 안내해드립니다.`}
          />
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
