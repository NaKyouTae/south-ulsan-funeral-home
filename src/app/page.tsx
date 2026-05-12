import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { SITE } from "@/lib/site";

const QUICK_LINKS = [
  {
    title: "장례절차",
    desc: "임종부터 발인까지 단계별 안내",
    href: "/procedure/process",
    icon: (
      <path d="M9 11H7v9h10v-9h-2M9 11V7a3 3 0 0 1 6 0v4M9 11h6" />
    ),
  },
  {
    title: "오시는 길",
    desc: "주차·대중교통 안내",
    href: "/about/location",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: "시설안내",
    desc: "빈소·접객실·안치실",
    href: "/facilities/funeral-hall",
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: "이용요금",
    desc: "투명한 요금 안내",
    href: "/pricing/hall",
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
];

const ROOMS = [
  { name: "1호실", status: "사용중", deceased: "故 김ㅇㅇ", chief: "김ㅇㅇ", departure: "05.12 06:30", site: "울산하늘공원" },
  { name: "2호실", status: "사용중", deceased: "故 이ㅇㅇ", chief: "이ㅇㅇ", departure: "05.12 08:00", site: "울주군 선영" },
  { name: "3호실", status: "사용가능", deceased: "-", chief: "-", departure: "-", site: "-" },
  { name: "4호실", status: "사용중", deceased: "故 박ㅇㅇ", chief: "박ㅇㅇ", departure: "05.13 07:00", site: "양산영락공원" },
  { name: "특실", status: "사용가능", deceased: "-", chief: "-", departure: "-", site: "-" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-[var(--color-primary)]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(181,137,74,0.18) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36 text-white">
          <div className="text-[var(--color-accent-soft)] text-xs tracking-[0.4em] uppercase mb-6">
            South Ulsan Funeral Home
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            정성으로 모시는<br />
            마지막 길, <span className="text-[var(--color-accent-soft)]">남울산</span> 입니다
          </h1>
          <p className="mt-7 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">
            한 분의 떠나심을 가장 깊이 있는 예의로 모시겠습니다.
            <br />
            전문 장례지도사가 24시간 상주하며, 가족의 시간을 정성껏 지켜드립니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] text-[var(--color-primary)] px-8 py-4 rounded-sm font-bold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              24시간 상담 {SITE.phone}
            </a>
            <Link
              href="/procedure/process"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:bg-white hover:text-[var(--color-primary)] text-white px-8 py-4 rounded-sm font-medium transition-colors"
            >
              장례절차 안내
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* 빠른 메뉴 - hero 하단 카드 */}
        <div className="relative mx-auto max-w-7xl px-6 -mt-10 pb-14 md:pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {QUICK_LINKS.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group bg-white border border-[var(--color-border)] p-5 md:p-7 hover:border-[var(--color-primary)] transition-colors"
              >
                <div className="w-11 h-11 mb-4 rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary)] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {q.icon}
                  </svg>
                </div>
                <div className="font-serif text-lg font-bold text-[var(--color-fg)] group-hover:text-[var(--color-primary)]">
                  {q.title}
                </div>
                <div className="mt-1 text-sm text-[var(--color-fg-muted)]">
                  {q.desc}
                </div>
                <div className="mt-4 inline-flex items-center text-xs text-[var(--color-accent)] font-medium">
                  바로가기 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 빈소 현황 */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <SectionTitle
              eyebrow="Funeral Status"
              title="빈소 현황"
              description="현재 운영중인 빈소의 고인 정보와 발인 일정을 안내해드립니다."
            />
            <Link
              href="/notice/obituary"
              className="text-sm text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)]"
            >
              전체 부고 보기 →
            </Link>
          </div>
          <div className="overflow-x-auto card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white text-left">
                  <th className="py-3 px-4 font-medium">호실</th>
                  <th className="py-3 px-4 font-medium">상태</th>
                  <th className="py-3 px-4 font-medium">고인명</th>
                  <th className="py-3 px-4 font-medium">상주</th>
                  <th className="py-3 px-4 font-medium">발인일시</th>
                  <th className="py-3 px-4 font-medium">장지</th>
                </tr>
              </thead>
              <tbody>
                {ROOMS.map((r) => (
                  <tr
                    key={r.name}
                    className="border-t border-[var(--color-border)] hover:bg-[var(--color-primary-tint)]/40"
                  >
                    <td className="py-3 px-4 font-medium">{r.name}</td>
                    <td className="py-3 px-4">
                      <span
                        className={
                          r.status === "사용중"
                            ? "inline-block px-2 py-0.5 text-xs bg-[var(--color-primary)] text-white"
                            : "inline-block px-2 py-0.5 text-xs bg-[var(--color-accent-soft)]/30 text-[var(--color-accent)]"
                        }
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{r.deceased}</td>
                    <td className="py-3 px-4">{r.chief}</td>
                    <td className="py-3 px-4">{r.departure}</td>
                    <td className="py-3 px-4">{r.site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 우리의 약속 */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTitle
                eyebrow="Our Promise"
                title="가족의 마음으로, 한 분 한 분 정성껏"
                description="남울산 장례식장은 이용자의 슬픔을 헤아리는 마음으로, 정중하고 합리적인 장례 문화를 만들어 갑니다."
              />
              <ul className="mt-8 space-y-5">
                {[
                  {
                    n: "01",
                    t: "투명한 요금제",
                    d: "정찰제로 운영하여 모든 비용을 사전에 안내합니다.",
                  },
                  {
                    n: "02",
                    t: "전문 장례지도사 상주",
                    d: "장례지도사 자격을 갖춘 전문가가 24시간 상주합니다.",
                  },
                  {
                    n: "03",
                    t: "쾌적한 시설 운영",
                    d: "빈소·접객실·주차장 모두 최신 시설로 정성껏 관리합니다.",
                  },
                ].map((it) => (
                  <li key={it.n} className="flex gap-5">
                    <div className="font-serif text-2xl font-bold text-[var(--color-accent)] w-12 shrink-0">
                      {it.n}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-fg)]">{it.t}</div>
                      <div className="mt-1 text-sm text-[var(--color-fg-muted)]">
                        {it.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/about/greeting" className="btn-outline">
                  인사말 자세히 보기 →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-[var(--color-primary)] relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, rgba(214,182,126,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15), transparent 50%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="font-serif text-7xl text-[var(--color-accent-soft)]">
                      謹弔
                    </div>
                    <div className="mt-6 text-white/80 text-sm tracking-[0.3em] uppercase">
                      A Quiet Farewell
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 border-2 border-[var(--color-accent)] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 연락 */}
      <section className="bg-[var(--color-primary-tint)]">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="card p-7 bg-[var(--color-primary)] text-white border-0">
            <div className="text-[var(--color-accent-soft)] text-xs tracking-[0.3em] uppercase mb-3">
              Contact
            </div>
            <div className="font-serif text-xl font-bold mb-6 leading-snug">
              궁금한 점이 있으시면<br />언제든 연락주세요
            </div>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                <dt className="text-white/60">대표번호</dt>
                <dd className="font-medium">{SITE.phone}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                <dt className="text-white/60">긴급상담</dt>
                <dd className="font-medium">{SITE.phoneEmergency}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                <dt className="text-white/60">운영시간</dt>
                <dd className="font-medium">{SITE.hours}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/60">주소</dt>
                <dd className="font-medium text-right">{SITE.address}</dd>
              </div>
            </dl>
            <Link
              href="/support/contact"
              className="mt-7 inline-flex items-center justify-center w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] text-[var(--color-primary)] py-3 rounded-sm font-bold"
            >
              1:1 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
