import PageHero from "@/components/PageHero";
import PriceTable from "@/components/PriceTable";

export const metadata = { title: "빈소 이용료" };

const ROWS = [
  { name: "VIP101호", spec: "165㎡ / 수용 120명 / 1일", price: "1,800,000" },
  { name: "VIP301호", spec: "99㎡ / 수용 80명 / 1일", price: "1,200,000" },
  { name: "VIP302호", spec: "99㎡ / 수용 80명 / 1일", price: "1,200,000" },
  { name: "VIP401호", spec: "66㎡ / 수용 50명 / 1일", price: "800,000" },
  { name: "VIP402호", spec: "66㎡ / 수용 50명 / 1일", price: "800,000" },
];

export default function HallPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="빈소 이용료"
        description="3일장 기준 빈소 이용료 안내입니다. 추가 비용 없이 정찰제로 운영합니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "이용요금" }, { label: "빈소 이용료" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <PriceTable caption="빈소 1일 이용료" rows={ROWS} />
        <ul className="mt-6 text-xs text-[var(--color-fg-muted)] space-y-1">
          <li>· 표시 가격은 부가세 별도 기준이며, 이용기간에 따라 합산됩니다.</li>
          <li>· 빈소 이용료에는 분향소 기본 운영비, 청소비, 공조비가 포함되어 있습니다.</li>
          <li>· 2025년 1월 1일 기준 가격으로, 변동 시 별도 공지합니다.</li>
        </ul>
      </section>
    </>
  );
}
