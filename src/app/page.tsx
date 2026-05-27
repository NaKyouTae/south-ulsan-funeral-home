import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import MobileRoomCarousel, { type Room } from "@/components/MobileRoomCarousel";
import SectionTitle from "@/components/SectionTitle";
import { mergeWithRoomList } from "@/lib/fis/adapter";
import { getObituaries } from "@/lib/fis/client";
import { SITE } from "@/lib/site";

const HERO_LINKS = [
  { title: "오시는 길", href: "/about/location" },
  { title: "상세안내", href: "/facilities/funeral-hall" },
];

async function fetchRooms(): Promise<Room[]> {
  let obituaries: Awaited<ReturnType<typeof getObituaries>> = [];
  try {
    obituaries = await getObituaries();
  } catch (error) {
    console.error("[Home] 빈소 현황 조회 실패", error);
  }
  return mergeWithRoomList(obituaries).map((o) => ({
    name: o.roomLabel,
    status: "사용중",
    deceased: o.isPlaceholder ? "-" : `故 ${o.deceased}`,
    chief: o.sangjuNames,
    departure: o.balinDisplay,
    site: o.site,
  }));
}

export default async function HomePage() {
  await connection();
  const rooms = await fetchRooms();

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 bg-[var(--color-primary)]" />
        <div className="absolute inset-0">
          <Image
            src="/hero-building-main.jpeg"
            alt="남울산전문장례식장 전경"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(11,18,39,0.82) 0%, rgba(17,26,53,0.68) 42%, rgba(23,34,70,0.54) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 38%, rgba(210,168,70,0.2) 100%)",
          }}
        />

        <div className="relative mx-auto box-border min-h-fit max-w-7xl px-6 py-[32px] md:py-8 xl:h-[calc(100dvh-8rem)] xl:py-8">
          <div className="flex flex-col justify-around text-white md:gap-8 xl:h-full xl:justify-between">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start lg:gap-8">
              <div className="max-w-4xl pt-0 md:pt-4">
                <h1 className="mt-4 font-serif text-[38px] font-bold leading-[1.28] tracking-tight md:mt-4 md:text-[48px] md:leading-[1.4]">
                  정성으로 모시는
                  <br />
                  마지막 길, <span className="text-[var(--color-accent-soft)]">남울산</span>입니다.
                </h1>
              </div>

              <div className="mt-3 lg:mt-[28px]">
                <div className="grid grid-cols-2 gap-3">
                  {HERO_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex min-h-[56px] items-center justify-center rounded-sm border border-white/28 bg-[rgba(23,34,70,0.5)] px-3 text-center text-[15px] font-medium text-white transition-colors hover:border-white/55 hover:bg-[rgba(23,34,70,0.62)] md:min-h-[56px] md:cursor-pointer md:px-4 md:text-base"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <a
                  href={`tel:${SITE.phoneLink}`}
                  className="mt-2.5 inline-flex min-h-[64px] w-full items-center justify-center rounded-sm bg-[var(--color-accent)] px-3 text-center text-[18px] font-bold text-white transition-colors hover:bg-[var(--color-accent-soft)] md:mt-3 md:min-h-[64px] md:cursor-pointer md:px-4 md:text-[18px]"
                >
                  24시간 상담 {SITE.phone}
                </a>
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <MobileRoomCarousel rooms={rooms} />
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
                      "radial-gradient(circle at 30% 20%, rgba(225,195,118,0.42), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15), transparent 50%)",
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
