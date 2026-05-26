import PageHero from "@/components/PageHero";
import PriceTable from "@/components/PriceTable";

export const metadata = { title: "장례용품" };

const SHROUDS = [
  { name: "삼베 수의 (전통)", spec: "남성/여성 공통", price: "350,000" },
  { name: "안동포 수의", spec: "남성/여성 공통", price: "1,800,000" },
  { name: "고급 삼베 수의", spec: "남성/여성 공통", price: "950,000" },
];

const COFFINS = [
  { name: "오동나무 관", spec: "기본형", price: "550,000" },
  { name: "향나무 관", spec: "프리미엄", price: "1,500,000" },
  { name: "환경 친화 관", spec: "화장 전용", price: "350,000" },
];

const URNS = [
  { name: "도자기 봉안함", spec: "백자/청자", price: "200,000" },
  { name: "옥석 봉안함", spec: "프리미엄", price: "650,000" },
  { name: "자연 분해 봉안함", spec: "수목장용", price: "180,000" },
];

export default function ItemsPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Items"
        title="장례용품"
        description="수의·관·봉안함 등 주요 장례용품의 표준 가격을 안내합니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "이용요금" }, { label: "장례용품" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl space-y-10 px-6 py-16">
        <PriceTable caption="수의" rows={SHROUDS} />
        <PriceTable caption="관" rows={COFFINS} />
        <PriceTable caption="봉안함" rows={URNS} />
        <ul className="mt-2 text-xs text-[var(--color-fg-muted)] space-y-1">
          <li>· 표시 가격은 부가세 포함 기준입니다.</li>
          <li>· 모든 용품은 한국소비자원 표준 인증을 받은 제품만 사용합니다.</li>
        </ul>
      </section>
    </>
  );
}
