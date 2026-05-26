import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "장례절차" };

const STEPS = [
  {
    day: "1일차",
    title: "운구 및 안치",
    items: [
      "운구 차량을 통한 고인 모심",
      "안치실로 모신 후 사망진단서·검안서 등 서류 확인",
      "장례지도사와 1:1 상담을 통해 장례 일정과 빈소 결정",
    ],
  },
  {
    day: "1일차",
    title: "빈소 설치 및 부고",
    items: [
      "빈소·분향소 설치 및 영정사진 준비",
      "부고 작성 및 안내 (지인·친지께 알림)",
      "조문객 맞이 준비 (식음료·접객 안내)",
    ],
  },
  {
    day: "2일차",
    title: "염습 및 입관",
    items: [
      "고인의 마지막 모습을 가다듬는 염습 진행",
      "수의 착의 및 입관 절차",
      "가족이 함께하는 입관 인사 시간",
    ],
  },
  {
    day: "3일차",
    title: "발인 및 운구",
    items: [
      "발인제 진행 후 영구차 출발",
      "장지(매장·화장)로 이동 후 의식 진행",
      "삼우제 및 49재 안내",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Procedure"
        title="장례절차"
        description="임종부터 발인까지 전 과정을 단계별로 안내해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "장례안내" }, { label: "장례절차" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="3-Day Process"
          title="3일장 표준 절차"
          description="가족의 종교·상황에 따라 일부 절차가 조정될 수 있습니다."
        />
        <div className="mt-12 space-y-6">
          {STEPS.map((s, i) => (
            <div key={i} className="card flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-48 shrink-0 bg-[var(--color-primary)] text-white p-6 flex flex-col justify-center">
                <div className="text-xs tracking-widest text-[var(--color-accent-soft)] uppercase">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-serif text-2xl font-bold">{s.day}</div>
              </div>
              <div className="p-6 flex-1">
                <div className="font-serif text-xl font-bold text-[var(--color-fg)] mb-3">
                  {s.title}
                </div>
                <ul className="space-y-2 text-sm text-[var(--color-fg-muted)]">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-[var(--color-accent)] mt-0.5">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
