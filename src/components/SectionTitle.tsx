export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <div className="section-eyebrow mb-4">{eyebrow}</div>}
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-fg)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-3xl text-[var(--color-fg-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
