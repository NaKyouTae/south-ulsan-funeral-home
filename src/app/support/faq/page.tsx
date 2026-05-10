import PageHero from "@/components/PageHero";

export const metadata = { title: "자주묻는 질문" };

const FAQS = [
  {
    q: "임종 후 가장 먼저 무엇을 해야 하나요?",
    a: "병원에서 임종한 경우 사망진단서를 발급받으시고, 자택에서 임종한 경우 119 또는 검안의의 검안서를 발급받으셔야 합니다. 그 후 저희 장례식장으로 연락주시면 즉시 운구 차량을 보내드립니다.",
  },
  {
    q: "장례 비용은 얼마나 드나요?",
    a: "빈소 종류·장례 일정·종교 의식·식음료 등에 따라 달라집니다. 평균적으로 3일장 기준 700만원 ~ 1,500만원 사이로 안내드리며, 정찰제로 운영하여 사전에 모든 비용을 안내해드립니다.",
  },
  {
    q: "발인 차량은 별도로 준비해야 하나요?",
    a: "장례식장에서 영구차·운구버스·리무진 등 모든 차량을 준비해드립니다. 이용 거리에 따라 비용이 책정됩니다.",
  },
  {
    q: "조문객에게 답례품을 드려야 하나요?",
    a: "필수는 아니지만 최근에는 작은 답례품을 준비하시는 가족이 많아졌습니다. 손수건·답례 떡·소형 봉투 등을 준비해드릴 수 있습니다.",
  },
  {
    q: "주차는 어떻게 하나요?",
    a: "지하 1~2층에 200대 규모의 주차장이 마련되어 있으며, 장례 기간 중 조문객 차량은 무료로 이용 가능합니다.",
  },
  {
    q: "외국인 조문객 응대도 가능한가요?",
    a: "영어·중국어·일본어 응대가 가능한 직원이 상주하며, 종교에 따른 외국식 의례 진행도 협의 가능합니다.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="자주묻는 질문"
        description="이용자분들이 자주 문의하시는 내용을 정리했습니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "고객센터" }, { label: "자주묻는 질문" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-3">
        {FAQS.map((f, i) => (
          <details
            key={i}
            className="card group p-0 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="px-6 py-5 cursor-pointer flex items-start gap-4 list-none">
              <span className="font-serif text-[var(--color-accent)] font-bold text-lg shrink-0">
                Q
              </span>
              <span className="font-medium flex-1">{f.q}</span>
              <span className="text-[var(--color-fg-muted)] group-open:rotate-180 transition-transform shrink-0">
                ▾
              </span>
            </summary>
            <div className="px-6 pb-6 pt-1 flex gap-4 border-t border-[var(--color-border)] bg-[var(--color-primary-tint)]/30">
              <span className="font-serif text-[var(--color-primary)] font-bold text-lg shrink-0">
                A
              </span>
              <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed pt-1">
                {f.a}
              </p>
            </div>
          </details>
        ))}
      </section>
    </>
  );
}
