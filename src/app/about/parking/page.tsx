import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";

export const metadata = { title: "주차안내" };

export default function ParkingPage() {
  return (
    <>
      <PageHero
        eyebrow="Parking"
        title="주차안내"
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "장례식장 안내" }, { label: "주차안내" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { l: "주차대수", v: "200대" },
            { l: "층수", v: "지하 1~2층" },
            { l: "이용요금", v: "무료" },
          ].map((s) => (
            <div key={s.l} className="card p-5 text-center">
              <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase">
                {s.l}
              </div>
              <div className="mt-2 font-serif text-xl font-bold text-[var(--color-primary)]">
                {s.v}
              </div>
            </div>
          ))}
        </div>
        <Prose>
          <h3>주차장 이용 안내</h3>
          <ul>
            <li>장례식장 정문 진입 후 우측 주차장 램프를 통해 지하주차장으로 이용해주십시오.</li>
            <li>장례 기간 중 조문객 차량은 무료로 이용 가능합니다.</li>
            <li>장애인 전용 주차구역(8면)이 별도로 마련되어 있습니다.</li>
            <li>전기차 충전소 4기를 운영합니다.</li>
          </ul>
          <h3>대형 차량 안내</h3>
          <ul>
            <li>버스·승합차의 경우 정문 좌측 임시주차장을 이용해주시기 바랍니다.</li>
            <li>화환 운반 차량은 정문 우측 하역장에서 하차해주세요.</li>
          </ul>
        </Prose>
      </section>
    </>
  );
}
