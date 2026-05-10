import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata = { title: "1:1 문의" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="1:1 문의"
        description="궁금하신 점이 있으시면 언제든 문의주십시오. 빠른 시일 내에 답변드리겠습니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "고객센터" }, { label: "1:1 문의" }]}
      />
      <section className="mx-auto max-w-5xl px-6 py-16 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <aside className="space-y-6">
          <div className="card p-7">
            <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase mb-2">
              Direct
            </div>
            <div className="font-serif text-lg font-bold text-[var(--color-primary)] mb-4">
              빠른 상담은 전화가 가장 빠릅니다
            </div>
            <a
              href={`tel:${SITE.phone}`}
              className="block text-2xl font-serif font-bold text-[var(--color-primary)]"
            >
              {SITE.phone}
            </a>
            <div className="mt-1 text-xs text-[var(--color-fg-muted)]">
              {SITE.hours}
            </div>
          </div>
          <div className="card p-7">
            <div className="text-xs tracking-widest text-[var(--color-accent)] uppercase mb-2">
              Email
            </div>
            <a href={`mailto:${SITE.email}`} className="font-medium text-[var(--color-primary)]">
              {SITE.email}
            </a>
          </div>
        </aside>

        <form className="card p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">문의 유형</label>
            <select className="w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)]">
              <option>장례 절차 문의</option>
              <option>이용 요금 문의</option>
              <option>시설 이용 문의</option>
              <option>기타 문의</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">성함</label>
              <input
                type="text"
                className="w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">연락처</label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                className="w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">이메일</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">문의 내용</label>
            <textarea
              rows={6}
              className="w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] resize-none"
            />
          </div>
          <label className="flex items-start gap-2 text-xs text-[var(--color-fg-muted)]">
            <input type="checkbox" className="mt-0.5" />
            <span>
              개인정보 수집·이용에 동의합니다. 수집된 정보는 문의 응대 목적으로만 사용되며, 응대 완료 후 즉시 폐기됩니다.
            </span>
          </label>
          <button type="button" className="btn-primary w-full">
            문의하기
          </button>
        </form>
      </section>
    </>
  );
}
