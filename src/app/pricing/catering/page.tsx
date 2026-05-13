import PageHero from "@/components/PageHero";
import PriceTable from "@/components/PriceTable";

export const metadata = { title: "음식·접객" };

const ROWS = [
  { name: "기본 상차림", spec: "조문객 1인 기준", price: "15,000" },
  { name: "프리미엄 상차림", spec: "조문객 1인 기준", price: "22,000" },
  { name: "음료 (1박스)", spec: "생수·음료수 24개입", price: "18,000" },
  { name: "주류 (1박스)", spec: "소주 또는 맥주 24개입", price: "55,000" },
  { name: "과일·떡", spec: "30인분 기준", price: "180,000" },
  { name: "조의 답례품", spec: "1개", price: "3,500" },
];

export default function CateringPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering"
        title="음식·접객"
        description="신선하고 정갈한 음식을 합리적인 가격에 제공합니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "이용요금" }, { label: "음식·접객" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <PriceTable caption="식음료 표준 단가" rows={ROWS} />
        <ul className="mt-6 text-xs text-[var(--color-fg-muted)] space-y-1">
          <li>· 음식은 사용한 만큼 정산하는 후불 정산 방식으로 운영됩니다.</li>
          <li>· 채식·할랄·저염식 등 특수 식단은 사전 협의해주시기 바랍니다.</li>
          <li>· 잔여 음식은 위생상 회수하지 않으며, 가족 분께 안내해드립니다.</li>
        </ul>
      </section>
    </>
  );
}
