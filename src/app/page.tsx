import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import MobileRoomCarousel, { type Room } from "@/components/MobileRoomCarousel";
import SectionTitle from "@/components/SectionTitle";
import { mergeWithRoomList } from "@/lib/fis/adapter";
import { getObituaries } from "@/lib/fis/client";

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

        <div className="relative mx-auto box-border min-h-fit max-w-7xl px-5 py-7 sm:px-6 sm:py-[32px] md:py-8 xl:h-[calc(100dvh-8rem)] xl:py-8">
          <div className="flex flex-col justify-around text-white md:gap-8 xl:h-full xl:justify-between">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-8">
              <div className="max-w-4xl pt-0 md:pt-4">
                <h1 className="mt-0 font-serif text-[34px] font-bold leading-[1.32] tracking-tight sm:text-[38px] md:mt-0 md:text-[48px] md:leading-[1.4]">
                  정성으로 모시는
                  <br />
                  마지막 길, <span className="text-[var(--color-accent-soft)]">남울산</span>입니다.
                </h1>
                <p className="mt-4 max-w-2xl text-[14px] leading-[1.75] text-white/82 sm:text-[15px] md:mt-5 md:text-[17px]">
                  한 분의 마지막 길을 깊은 예와 정성으로 모시기 위해
                  <br />
                  전문 장례지도사가 처음부터 끝까지 함께합니다.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <a
                  href="tel:01065991053"
                  className="mx-auto block w-[calc(100vw-3rem)] max-w-[620px] overflow-hidden rounded-sm transition-transform hover:-translate-y-0.5 lg:mx-0 lg:w-[620px]"
                >
                  <div className="relative aspect-[1820/720] w-full overflow-hidden">
                    <Image
                      src="/funeral-flower-notice-banner.jpg"
                      alt="3단 근조화 반입 금지 및 근조화환주문 안내"
                      fill
                      sizes="(min-width: 1024px) 620px, 100vw"
                      className="object-contain object-center"
                    />
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <MobileRoomCarousel rooms={rooms} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-6 md:py-24">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-14">
            <div className="flex h-full flex-col justify-center">
              <div className="mb-8 grid grid-cols-2 grid-rows-2 overflow-hidden rounded-sm lg:hidden">
                {[
                  { src: "/home-gallery-1.png", alt: "남울산전문장례식장 전경 1" },
                  { src: "/home-gallery-2.jpeg", alt: "남울산전문장례식장 전경 2" },
                  { src: "/home-gallery-4.jpeg", alt: "남울산전문장례식장 전경 4" },
                  { src: "/home-gallery-3.png", alt: "남울산전문장례식장 내부 3" },
                ].map((image) => (
                  <div key={image.src} className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <SectionTitle
                eyebrow="Our Promise"
                title={<>가족의 마음으로,<br />한 분 한 분 정성껏</>}
                description="남울산전문장례식장은 이용자의 슬픔을 헤아리는 마음으로, 정중하고 합리적인 장례 문화를 만들어 갑니다."
                descriptionClassName="break-keep"
              />
              <ul className="mt-7 space-y-5 md:mt-8">
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
                  <li key={it.n} className="flex gap-4 md:gap-5">
                    <div className="w-10 shrink-0 font-serif text-[1.65rem] font-bold text-[var(--color-accent)] md:w-12 md:text-2xl">
                      {it.n}
                    </div>
                    <div>
                      <div className="text-[1.02rem] font-bold text-[var(--color-fg)] md:text-[1.06rem]">{it.t}</div>
                      <div className="mt-1 text-[0.96rem] leading-[1.8] text-[var(--color-fg-muted)] md:text-sm">{it.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 md:mt-10">
                <Link href="/about/greeting" className="btn-outline">
                  인사말 자세히 보기 →
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block lg:h-full">
              <div className="grid h-full min-h-[100%] grid-cols-2 grid-rows-2 overflow-hidden bg-[var(--color-primary)]">
                {[
                  { src: "/home-gallery-1.png", alt: "남울산전문장례식장 전경 1" },
                  { src: "/home-gallery-2.jpeg", alt: "남울산전문장례식장 전경 2" },
                  { src: "/home-gallery-4.jpeg", alt: "남울산전문장례식장 전경 4" },
                  { src: "/home-gallery-3.png", alt: "남울산전문장례식장 내부 3" },
                ].map((image) => (
                  <div key={image.src} className="relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border-2 border-[var(--color-accent)] -z-10 md:block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
