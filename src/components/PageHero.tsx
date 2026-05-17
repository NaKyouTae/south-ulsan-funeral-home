type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 70%, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        {eyebrow && (
          <div className="mb-4 text-sm tracking-[0.3em] text-[var(--color-accent-soft)] uppercase">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-4xl md:text-[3.5rem] font-bold tracking-tight leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-3xl text-white/80 text-[1.08rem] md:text-[1.2rem] leading-[1.85]">
            {description}
          </p>
        )}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mt-8 flex flex-wrap items-center gap-2 text-sm text-white/65">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <a href={c.href} className="hover:text-white">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
