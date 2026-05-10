import PageHero from "@/components/PageHero";

export const metadata = { title: "종교별 장례" };

const RELIGIONS = [
  {
    name: "유교식",
    desc: "전통적인 유교 의례에 따라 성복제·발인제·반우제 등의 의식을 진행합니다.",
    items: ["성복제", "조석상식", "발인제", "반우제"],
  },
  {
    name: "불교식",
    desc: "스님이 주관하는 의식으로 다비식·천도재 등의 의례를 따릅니다.",
    items: ["입관 독경", "발인 독경", "다비식", "49재"],
  },
  {
    name: "기독교식",
    desc: "목사님이 집례하시며 입관예배·발인예배·하관예배로 진행합니다.",
    items: ["입관예배", "발인예배", "하관예배", "추모예배"],
  },
  {
    name: "천주교식",
    desc: "신부님 또는 본당의 연도반이 주관하여 위령기도와 장례미사를 봉헌합니다.",
    items: ["임종경", "위령기도(연도)", "장례미사", "하관예식"],
  },
];

export default function ReligionPage() {
  return (
    <>
      <PageHero
        eyebrow="Religion"
        title="종교별 장례"
        description="가족의 종교에 맞춘 정중한 의례를 함께 준비해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "장례안내" }, { label: "종교별 장례" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-6">
        {RELIGIONS.map((r) => (
          <div key={r.name} className="card p-7">
            <div className="font-serif text-2xl font-bold text-[var(--color-primary)]">
              {r.name}
            </div>
            <p className="mt-3 text-sm text-[var(--color-fg-muted)] leading-relaxed">
              {r.desc}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {r.items.map((it) => (
                <li
                  key={it}
                  className="text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-fg-muted)]"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
