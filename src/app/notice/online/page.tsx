import PageHero from "@/components/PageHero";

export const metadata = { title: "온라인 조문" };

const MESSAGES = [
  {
    name: "김ㅇㅇ",
    date: "2026.05.10",
    message: "삼가 고인의 명복을 빕니다. 직접 찾아뵙지 못해 죄송한 마음으로 글을 남깁니다.",
  },
  {
    name: "이ㅇㅇ",
    date: "2026.05.10",
    message: "유가족 분들께 깊은 위로를 전합니다.",
  },
  {
    name: "박ㅇㅇ",
    date: "2026.05.09",
    message: "고인의 평안한 안식을 기원합니다.",
  },
];

export default function OnlineCondolencePage() {
  return (
    <>
      <PageHero
        eyebrow="Online Condolence"
        title="온라인 조문"
        description="직접 찾아뵙기 어려우신 분들을 위해 온라인으로 조문 메시지를 전하실 수 있습니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "부고·조문" }, { label: "온라인 조문" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="card p-7 mb-10">
          <div className="font-serif text-lg font-bold text-[var(--color-primary)] mb-4">
            조문 메시지 작성
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="성함"
                className="border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
              />
              <input
                type="text"
                placeholder="관계 (예: 친구, 직장동료)"
                className="border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <textarea
              placeholder="조문 메시지를 정성껏 남겨주세요"
              rows={5}
              className="w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] resize-none"
            />
            <button type="button" className="btn-primary">
              조문 메시지 남기기
            </button>
          </form>
        </div>

        <div className="space-y-4">
          {MESSAGES.map((m, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center justify-between text-xs text-[var(--color-fg-muted)] mb-3">
                <span className="font-medium text-[var(--color-fg)]">{m.name} 님</span>
                <span>{m.date}</span>
              </div>
              <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                {m.message}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
