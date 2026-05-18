import Image from "next/image";
import Link from "next/link";
import MobileRoomCarousel from "@/components/MobileRoomCarousel";
import SectionTitle from "@/components/SectionTitle";
import { SITE } from "@/lib/site";

const HERO_LINKS = [
  { title: "오시는길", href: "/about/location" },
  { title: "시설안내", href: "/facilities/funeral-hall" },
];

const ROOMS = [
  { name: "VIP101호", status: "사용중", deceased: "故 김ㅇㅇ", chief: "김ㅇㅇ", departure: "05.12 06:30", site: "울산하늘공원" },
  { name: "VIP301호", status: "사용중", deceased: "故 이ㅇㅇ", chief: "이ㅇㅇ", departure: "05.12 08:00", site: "울주군 선영" },
  { name: "VIP302호", status: "사용가능", deceased: "-", chief: "-", departure: "-", site: "-" },
  { name: "VIP401호", status: "사용중", deceased: "故 박ㅇㅇ", chief: "박ㅇㅇ", departure: "05.13 07:00", site: "양산영락공원" },
  { name: "VIP402호", status: "사용가능", deceased: "-", chief: "-", departure: "-", site: "-" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 bg-[var(--color-primary)]" />
        <div className="absolute inset-0">
          <Image
            src="/hero-building.png"
            alt="남울산전문장례식장 전경"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(18,38,33,0.92) 0%, rgba(18,38,33,0.82) 42%, rgba(18,38,33,0.72) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 38%, rgba(181,137,74,0.18) 100%)",
          }}
        />

        <div className="relative mx-auto box-border h-[calc(100dvh-5.5rem)] min-h-fit max-w-7xl px-6 py-[52px] md:h-[calc(100vh-8rem)] md:py-8 lg:h-[calc(100dvh-8rem)] lg:py-8">
          <div className="flex h-full flex-col justify-around text-white md:justify-between">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start lg:gap-8">
              <div className="max-w-4xl pt-0 md:pt-4">
                <div className="text-[14px] uppercase tracking-[0.42em] text-[var(--color-accent-soft)]">
                  South Ulsan Funeral Home
                </div>
                <h1 className="mt-4 font-serif text-[38px] font-bold leading-[1.28] tracking-tight md:mt-8 md:text-[52px] md:leading-[1.4]">
                  정성으로 모시는
                  <br />
                  마지막 길, <span className="text-[var(--color-accent-soft)]">남울산</span>입니다
                </h1>
              </div>

              <div className="mt-3 rounded-sm border border-white/8 bg-[rgba(53,76,69,0.72)] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-4 lg:mt-12">
                <div className="grid grid-cols-2 gap-3">
                  {HERO_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex min-h-[52px] items-center justify-center rounded-sm border border-white/28 px-3 text-center text-[15px] font-medium text-white transition-colors hover:border-white/55 hover:bg-white/8 md:min-h-[68px] md:px-4 md:text-base"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <a
                  href={`tel:${SITE.phoneLink}`}
                  className="mt-2.5 inline-flex min-h-[54px] w-full items-center justify-center rounded-sm bg-[var(--color-accent)] px-3 text-center text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(181,137,74,0.2)] transition-colors hover:bg-[var(--color-accent-soft)] md:mt-3 md:min-h-[68px] md:px-4 md:text-base"
                >
                  24시간 상담 {SITE.phone}
                </a>
              </div>
            </div>

            <div className="md:mt-0 md:rounded-sm md:border md:border-white/10 md:bg-[rgba(77,94,87,0.66)] md:p-4 md:shadow-[0_18px_48px_rgba(0,0,0,0.18)] md:backdrop-blur-sm">
              <MobileRoomCarousel rooms={ROOMS} />

              <div className="hidden overflow-x-auto md:block">
                <table className="min-w-[760px] w-full text-[14px] text-white">
                  <thead>
                    <tr className="border-b border-white/14 text-left text-[15px] text-white/90">
                      <th className="px-3 py-3 font-medium md:px-4 md:py-3.5">호실</th>
                      <th className="px-3 py-3 font-medium md:px-4 md:py-3.5">상태</th>
                      <th className="px-3 py-3 font-medium md:px-4 md:py-3.5">고인명</th>
                      <th className="px-3 py-3 font-medium md:px-4 md:py-3.5">상주</th>
                      <th className="px-3 py-3 font-medium md:px-4 md:py-3.5">발인일시</th>
                      <th className="px-3 py-3 font-medium md:px-4 md:py-3.5">장지</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROOMS.map((r) => (
                      <tr key={r.name} className="border-t border-white/10">
                        <td className="px-3 py-3 text-[15px] font-medium whitespace-nowrap md:px-4 md:py-3.5">{r.name}</td>
                        <td className="px-3 py-3 md:px-4 md:py-3.5">
                          <span
                            className={
                              r.status === "사용중"
                                ? "inline-block rounded-sm bg-[var(--color-accent)] px-3 py-1 text-[12px] font-semibold text-[var(--color-primary)]"
                                : "inline-block rounded-sm bg-white/12 px-3 py-1 text-[12px] font-semibold text-white/88"
                            }
                          >
                            {r.status}
                          </span>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-[15px] md:px-4 md:py-3.5">{r.deceased}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-[15px] md:px-4 md:py-3.5">{r.chief}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-[15px] md:px-4 md:py-3.5">{r.departure}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-[15px] md:px-4 md:py-3.5">{r.site}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col justify-center">
              <SectionTitle
                eyebrow="Our Promise"
                title={<>가족의 마음으로,<br />한 분 한 분 정성껏</>}
                description="남울산전문장례식장은 이용자의 슬픔을 헤아리는 마음으로, 정중하고 합리적인 장례 문화를 만들어 갑니다."
                descriptionClassName="break-keep"
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
                    <div className="w-12 shrink-0 font-serif text-2xl font-bold text-[var(--color-accent)]">
                      {it.n}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-fg)]">{it.t}</div>
                      <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{it.d}</div>
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

            <div className="relative hidden lg:block lg:h-full">
              <div className="relative h-full min-h-[100%] overflow-hidden bg-[var(--color-primary)]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, rgba(214,182,126,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15), transparent 50%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-8 text-center">
                    <div className="font-serif text-7xl text-[var(--color-accent-soft)]">謹弔</div>
                    <div className="mt-6 text-sm uppercase tracking-[0.3em] text-white/80">
                      A Quiet Farewell
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border-2 border-[var(--color-accent)] -z-10 md:block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
