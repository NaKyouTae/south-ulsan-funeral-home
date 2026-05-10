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
          <div className="text-[var(--color-accent-soft)] text-xs tracking-[0.3em] uppercase mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mt-8 flex items-center gap-2 text-xs text-white/60">
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
