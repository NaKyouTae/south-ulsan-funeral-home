import PageHero from "@/components/PageHero";

export const metadata = { title: "공지사항" };

const NOTICES = [
  { id: 7, tag: "공지", title: "추석 연휴 빈소 운영 안내", date: "2026.05.08", views: 132 },
  { id: 6, tag: "공지", title: "주차장 임시 운영 변경 안내", date: "2026.04.22", views: 84 },
  { id: 5, tag: "안내", title: "장례용품 가격 변경 안내", date: "2026.04.10", views: 213 },
  { id: 4, tag: "공지", title: "개인정보 처리방침 개정 안내", date: "2026.03.15", views: 67 },
  { id: 3, tag: "이벤트", title: "수목장 안내 캠페인 진행", date: "2026.02.28", views: 198 },
  { id: 2, tag: "공지", title: "설 연휴 빈소 운영 안내", date: "2026.01.20", views: 312 },
  { id: 1, tag: "안내", title: "전기차 충전소 신규 설치 완료", date: "2025.12.15", views: 95 },
];

export default function NoticeBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Notice"
        title="공지사항"
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "고객센터" }, { label: "공지사항" }]}
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white">
                <th className="py-3 px-4 font-medium w-20">번호</th>
                <th className="py-3 px-4 font-medium w-24">구분</th>
                <th className="py-3 px-4 font-medium text-left">제목</th>
                <th className="py-3 px-4 font-medium w-32 hidden md:table-cell">작성일</th>
                <th className="py-3 px-4 font-medium w-20 hidden md:table-cell">조회</th>
              </tr>
            </thead>
            <tbody>
              {NOTICES.map((n) => (
                <tr
                  key={n.id}
                  className="border-t border-[var(--color-border)] hover:bg-[var(--color-primary-tint)]/40 cursor-pointer"
                >
                  <td className="py-3 px-4 text-center text-[var(--color-fg-muted)]">{n.id}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-[10px] tracking-widest px-2 py-0.5 bg-[var(--color-primary)] text-white uppercase">
                      {n.tag}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium">{n.title}</td>
                  <td className="py-3 px-4 text-center text-[var(--color-fg-muted)] hidden md:table-cell">
                    {n.date}
                  </td>
                  <td className="py-3 px-4 text-center text-[var(--color-fg-muted)] hidden md:table-cell">
                    {n.views}
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
