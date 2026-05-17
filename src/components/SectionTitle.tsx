export default function SectionTitle({
  eyebrow,
  title,
  description,
  descriptionClassName,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  descriptionClassName?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <div className="section-eyebrow mb-4">{eyebrow}</div>}
      <h2 className="font-serif text-[1.9rem] md:text-[2.35rem] font-bold text-[var(--color-fg)] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-3xl text-[1.05rem] text-[var(--color-fg-muted)] leading-[1.85] md:text-[1.12rem] ${descriptionClassName ?? ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
