import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";

export const metadata = { title: "안치실" };

export default function MortuaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Mortuary"
        title="안치실"
        description="고인이 가장 평안하게 머무르실 수 있도록 최적의 환경을 유지합니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "시설안내" }, { label: "안치실" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-16">
        <Prose>
          <h3 className="!mt-0">안치실 운영</h3>
          <ul>
            <li>최신 안치 냉장 시설 10기 운영 (영하 10℃~5℃ 정밀 제어)</li>
            <li>24시간 모니터링 시스템으로 시설 상태를 상시 점검합니다.</li>
            <li>독립된 입실 동선으로 고인의 존엄을 지킵니다.</li>
          </ul>
          <h3>염습실</h3>
          <ul>
            <li>전문 장례지도사가 입회하여 염습 절차를 진행합니다.</li>
            <li>가족이 마지막 인사를 드릴 수 있는 별도 공간이 마련되어 있습니다.</li>
            <li>위생 가운·장갑 등 모든 비품을 일회용으로 운영합니다.</li>
          </ul>
        </Prose>
      </section>
    </>
  );
}
