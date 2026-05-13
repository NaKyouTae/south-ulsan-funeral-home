import PageHero from "@/components/PageHero";

export const metadata = { title: "인사말" };

export default function GreetingPage() {
  return (
    <>
      <PageHero
        eyebrow="Greeting"
        title="인사말"
        description="떠나는 분의 마지막을 가장 정중한 예의로 모시는 일 — 그것이 저희의 시작입니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "장례식장 안내" }, { label: "인사말" }]}
      />
      <article className="mx-auto max-w-7xl px-6 py-20">
        <div className="font-serif text-2xl md:text-3xl leading-snug text-[var(--color-fg)]">
          “슬픔의 시간을 함께 지키는<br />
          가장 가까운 이웃이 되겠습니다.”
        </div>
        <div className="mt-12 space-y-6 text-[var(--color-fg-muted)] leading-loose">
          <p>
            안녕하십니까. 남울산전문장례식장을 찾아주신 모든 분들께 깊은 감사의 마음을 전합니다.
          </p>
          <p>
            장례는 떠나는 분과 남은 가족이 마주하는 가장 특별한 순간입니다.
            저희 남울산전문장례식장은 이 소중한 시간을 정성껏 지키기 위해
            전문 장례지도사가 24시간 상주하며, 합리적이고 투명한 운영으로
            이용자 한 분 한 분의 시간을 존중합니다.
          </p>
          <p>
            쾌적한 시설과 따뜻한 응대, 정직한 요금 정책으로 슬픔의 시간을 함께 지키는
            가장 가까운 이웃이 되겠습니다. 부족한 부분이 있다면 언제든 말씀해주십시오.
            귀 기울여 듣고, 더 나은 장례 문화를 만들기 위해 끊임없이 노력하겠습니다.
          </p>
        </div>
        <div className="mt-14 pt-8 border-t border-[var(--color-border)] flex justify-end items-center gap-3">
          <span className="text-[var(--color-fg-muted)]">남울산전문장례식장 대표</span>
          <span className="font-serif text-xl">홍 길 동</span>
        </div>
      </article>
    </>
  );
}
