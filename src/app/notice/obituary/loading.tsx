import PageHero from "@/components/PageHero";

export default function Loading() {
  return (
    <>
      <PageHero
        eyebrow="Obituary"
        title="부고안내"
        description="현재 모셔지고 있는 고인의 부고를 안내해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "부고안내" }, { label: "부고안내" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-16">
        <div className="border-y-[3px] border-[var(--color-fg)]">
          <div className="bg-[#efefef] px-8 py-4 text-center text-[16px] font-semibold text-[var(--color-fg)]">
            부고 정보를 불러오는 중입니다…
          </div>
          <div className="divide-y divide-[#dfe2e7]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex animate-pulse items-center gap-8 px-8 py-8">
                <div className="h-4 w-[120px] bg-[#eceef2]" />
                <div className="h-4 w-[100px] bg-[#eceef2]" />
                <div className="h-4 flex-1 bg-[#eceef2]" />
                <div className="h-4 w-[200px] bg-[#eceef2]" />
                <div className="h-4 w-[180px] bg-[#eceef2]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
