import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center">
      <div className="text-[var(--color-accent)] text-xs tracking-[0.4em] uppercase">
        404 — Not Found
      </div>
      <h1 className="mt-6 font-serif text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
        요청하신 페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-5 text-[var(--color-fg-muted)] leading-relaxed">
        주소가 변경되었거나 삭제된 페이지일 수 있습니다.
        <br />
        아래 버튼을 눌러 메인으로 돌아가주세요.
      </p>
      <Link href="/" className="btn-primary mt-10">
        홈으로 돌아가기
      </Link>
    </section>
  );
}
