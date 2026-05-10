import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";

export const metadata = { title: "상복·예절" };

export default function EtiquettePage() {
  return (
    <>
      <PageHero
        eyebrow="Etiquette"
        title="상복·예절"
        description="장례에 임하실 때 지키시면 좋은 예절을 안내해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "장례안내" }, { label: "상복·예절" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Prose>
          <h3>상주의 복장</h3>
          <ul>
            <li>남자 상주는 검정 양복에 흰색 셔츠, 검정 넥타이를 갖추시는 것이 일반적입니다.</li>
            <li>여자 상주는 검정 한복 또는 검정 정장을 권합니다.</li>
            <li>상복은 장례식장에서 대여 가능하며, 별도 비용이 책정됩니다.</li>
          </ul>
          <h3>조문객의 복장</h3>
          <ul>
            <li>검정 또는 어두운 색의 단정한 복장이 예의입니다.</li>
            <li>화려한 액세서리·짙은 화장은 삼가는 것이 좋습니다.</li>
          </ul>
          <h3>조문 순서</h3>
          <ul>
            <li>방명록 작성 → 분향 또는 헌화 → 영정 앞 재배 → 상주에게 조문 → 부의금 전달 순으로 진행됩니다.</li>
            <li>종교에 따라 분향이 아닌 헌화로 진행할 수 있습니다.</li>
          </ul>
          <h3>유의사항</h3>
          <ul>
            <li>장례식장 내에서는 휴대폰을 무음으로 해주십시오.</li>
            <li>고인의 사망 원인 등 민감한 질문은 삼가주십시오.</li>
            <li>상주에게 “호상입니다”, “장수하셨네요” 등의 표현은 지양해주세요.</li>
          </ul>
        </Prose>
      </section>
    </>
  );
}
