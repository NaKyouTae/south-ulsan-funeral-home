import PageHero from "@/components/PageHero";

export const metadata = { title: "부대시설" };

const AMENITIES = [
  { title: "가족 휴게실", desc: "긴 장례 시간 동안 가족이 편히 쉴 수 있는 독립 공간을 운영합니다." },
  { title: "샤워실 & 탈의실", desc: "장례 기간 중 위생을 위한 샤워실·탈의실이 빈소별로 마련되어 있습니다." },
  { title: "수유실", desc: "유아를 동반한 조문객을 위한 별도 수유 공간을 운영합니다." },
  { title: "분향 디지털 사진관", desc: "고인의 영정·추모 영상을 디지털로 송출할 수 있는 시설을 갖추고 있습니다." },
  { title: "장례용품점", desc: "수의·관·상복 등 필요한 모든 장례용품을 합리적 가격으로 제공합니다." },
  { title: "발인 차량", desc: "리무진·운구버스 등 발인에 필요한 모든 차량을 운영합니다." },
];

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Amenities"
        title="부대시설"
        description="장례 기간 동안 필요한 모든 편의시설을 한곳에서 이용하실 수 있습니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "시설안내" }, { label: "부대시설" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AMENITIES.map((a) => (
          <div key={a.title} className="card p-7">
            <div className="font-serif text-lg font-bold text-[var(--color-primary)]">
              {a.title}
            </div>
            <p className="mt-3 text-sm text-[var(--color-fg-muted)] leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
