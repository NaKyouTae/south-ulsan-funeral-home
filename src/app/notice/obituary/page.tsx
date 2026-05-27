import PageHero from "@/components/PageHero";
import { mergeWithRoomList } from "@/lib/fis/adapter";
import { getObituaries } from "@/lib/fis/client";
import ObituaryTable from "./ObituaryTable";

export const metadata = { title: "부고안내" };

export default async function ObituaryPage() {
  const obituaries = mergeWithRoomList(await getObituaries());

  return (
    <>
      <PageHero
        eyebrow="Obituary"
        title="부고안내"
        description="현재 모셔지고 있는 고인의 부고를 안내해드립니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "부고안내" }, { label: "부고안내" }]}
      />
      <section className="subpage-body mx-auto max-w-7xl px-6 py-16">
        <ObituaryTable obituaries={obituaries} />
        <p className="mt-4 text-right text-[13px] text-[var(--color-fg-muted)]">
          빈소 정보를 클릭하면 상세 정보를 확인할 수 있습니다.
        </p>
      </section>
    </>
  );
}
