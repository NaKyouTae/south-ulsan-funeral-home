import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";

export const metadata = { title: "접객실" };

export default function ReceptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Reception"
        title="접객실"
        description="조문객을 정중히 맞이할 수 있도록 쾌적한 접객실을 운영합니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "시설안내" }, { label: "접객실" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-16">
        <Prose>
          <h3 className="!mt-0">접객실 시설</h3>
          <ul>
            <li>전 빈소에 별도 접객실이 갖추어져 있습니다.</li>
            <li>중앙 공조 시스템으로 사계절 쾌적한 환경을 유지합니다.</li>
            <li>유아 동반 조문객을 위한 가족 공간이 마련되어 있습니다.</li>
          </ul>
          <h3>식음료 서비스</h3>
          <ul>
            <li>위생적인 단체 급식 시설을 갖추고 있어 신선한 음식 제공이 가능합니다.</li>
            <li>육개장·편육·과일·떡 등 전통 장례 음식을 표준으로 제공합니다.</li>
            <li>채식·할랄·저염식 등 특수 식단도 사전 협의 시 가능합니다.</li>
          </ul>
        </Prose>
      </section>
    </>
  );
}
