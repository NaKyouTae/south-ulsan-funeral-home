import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";
import { SITE } from "@/lib/site";

export const metadata = { title: "임종 후 절차" };

export default function AfterDeathPage() {
  return (
    <>
      <PageHero
        eyebrow="After Death"
        title="임종 후 절차"
        description="임종 직후 가족이 가장 먼저 해야 할 일들을 안내해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "장례안내" }, { label: "임종 후 절차" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-16">
        <div className="card !pt-7 p-7 bg-[var(--color-primary-tint)] border-[var(--color-primary)]/20 mb-10">
          <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase mb-2">
            Emergency
          </div>
          <div className="font-serif text-xl font-bold text-[var(--color-primary)]">
            임종 후 가장 먼저, {SITE.name}으로 연락주십시오.
          </div>
          <a
            href={`tel:${SITE.phoneLink}`}
            className="mt-2 inline-block font-serif text-2xl text-[var(--color-primary)]"
          >
            {SITE.phone}
          </a>
        </div>
        <Prose>
          <h3>1. 사망진단서 또는 검안서 발급</h3>
          <ul>
            <li>병원에서 임종한 경우, 담당 의사로부터 사망진단서를 발급받으십시오.</li>
            <li>자택에서 임종한 경우, 119 또는 가까운 병원의 검안의에게 검안서를 발급받으셔야 합니다.</li>
          </ul>
          <h3>2. 장례식장 연락</h3>
          <ul>
            <li>저희 남울산전문장례식장으로 연락주시면 운구 차량을 즉시 보내드립니다.</li>
            <li>운구 비용·이송 거리에 대해 사전 안내해드립니다.</li>
          </ul>
          <h3>3. 운구 및 안치</h3>
          <ul>
            <li>고인을 정중히 모시고 안치실에 안치합니다.</li>
            <li>이때 가족 분께서는 영정사진·고인의 옷가지 등을 준비해주시면 됩니다.</li>
          </ul>
          <h3>4. 장례지도사 상담</h3>
          <ul>
            <li>전담 장례지도사가 빈소·발인일정·종교의식 등을 함께 결정해드립니다.</li>
            <li>예산에 맞춘 장례 패키지 안내를 받으실 수 있습니다.</li>
          </ul>
        </Prose>
      </section>
    </>
  );
}
