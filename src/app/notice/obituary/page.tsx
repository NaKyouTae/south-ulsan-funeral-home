import PageHero from "@/components/PageHero";

export const metadata = { title: "부고안내" };

const OBITUARIES = [
  {
    id: 1,
    room: "VIP101호",
    deceased: "이정춘",
    chief: "이규진, 이규민, 송해선",
    departure: "2026년 05월 27일 06시 20분",
    site: "서울추모공원-서울현충원",
  },
  {
    id: 2,
    room: "VIP301호",
    deceased: "정순훈",
    chief: "윤창열, 윤재연, 윤재숙, 윤재복, 신동관, 최동수, 이재선, 신경원, 신영민, 최종구, 최미희, 이지우",
    departure: "2026년 05월 27일 09시 20분",
    site: "서울시립승화원-용미리 자연장",
  },
  {
    id: 3,
    room: "VIP302호",
    deceased: "박종숙(데레사)",
    chief: "문민권, 다나카유미코, 문한이, 문찬이, 문단이",
    departure: "2026년 05월 27일 09시 00분",
    site: "서울시립승화원",
  },
  {
    id: 4,
    room: "VIP401호",
    deceased: "김정순(권사)",
    chief: "김경수, 김강수, 김연희, 김승희, 김용섭, 우제선, 이경미, 곽영이, 김태민, 김지혜, 김에스터, 김에스라, 김에스겔, 김신철, 김은혜, 우현주, 우문식, 김태훈, 김태호, 김지용, 송명은, 오문영, 박혜미",
    departure: "2026년 05월 27일 08시 20분",
    site: "서울시립승화원-청아공원",
  },
  {
    id: 5,
    room: "VIP402호",
    deceased: "추연화(권사)",
    chief: "유용현, 유예나, 김지수, 양미라, 유시우, 김은유, 유만상",
    departure: "2026년 05월 27일 05시 00분",
    site: "서울추모공원",
  },
];

export default function ObituaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Obituary"
        title="부고안내"
        description="현재 모셔지고 있는 고인의 부고를 안내해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "부고안내" }, { label: "부고안내" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-x-auto border-y-[3px] border-[var(--color-fg)]">
          <table className="min-w-[980px] w-full break-keep border-collapse text-[15px] md:text-[16px]">
            <thead>
              <tr className="bg-[#efefef] text-[var(--color-fg)]">
                <th className="align-middle px-4 py-4 text-center text-[16px] font-semibold md:text-[17px]">빈소</th>
                <th className="align-middle px-4 py-4 text-center text-[16px] font-semibold md:text-[17px]">고인명</th>
                <th className="align-middle px-4 py-4 text-center text-[16px] font-semibold md:text-[17px]">상주명</th>
                <th className="align-middle px-4 py-4 text-center text-[16px] font-semibold md:text-[17px]">장지</th>
                <th className="align-middle px-4 py-4 text-center text-[16px] font-semibold md:text-[17px]">발인 일시</th>
              </tr>
            </thead>
            <tbody>
              {OBITUARIES.map((o) => (
                <tr key={o.id} className="border-t border-[#dfe2e7]">
                  <td className="w-[140px] min-w-[140px] align-middle px-4 py-7 text-center text-[16px] font-medium leading-[1.5] text-[#666c75]">
                    {o.room}
                  </td>
                  <td className="w-[140px] min-w-[140px] align-middle border-l border-[#dfe2e7] px-4 py-7 text-center text-[16px] font-medium leading-[1.5] text-[#666c75]">
                    {o.deceased}
                  </td>
                  <td className="w-[41%] align-middle border-l border-[#dfe2e7] px-4 py-7 text-[16px] font-medium leading-[1.65] text-[#6a7079]">
                    {o.chief}
                  </td>
                  <td className="w-[248px] min-w-[248px] align-middle border-l border-[#dfe2e7] px-4 py-7 text-center text-[16px] font-medium leading-[1.6] text-[#6a7079]">
                    {o.site}
                  </td>
                  <td className="w-[248px] min-w-[248px] align-middle border-l border-[#dfe2e7] px-4 py-7 text-center text-[16px] font-medium leading-[1.6] text-[#6a7079]">
                    {o.departure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
