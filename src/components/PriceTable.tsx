type Row = { name: string; spec?: string; price: string; note?: string };

export default function PriceTable({
  caption,
  rows,
}: {
  caption?: string;
  rows: Row[];
}) {
  return (
    <div className="card overflow-hidden">
      {caption && (
        <div className="bg-[var(--color-primary-tint)] border-b border-[var(--color-border)] px-6 py-5 text-[1.06rem] font-semibold text-[var(--color-primary)]">
          {caption}
        </div>
      )}
      <table className="w-full text-[1rem] md:text-[1.04rem]">
        <thead>
          <tr className="bg-[var(--color-primary)] text-white text-left">
            <th className="px-5 py-4 font-medium">항목</th>
            <th className="px-5 py-4 font-medium">규격·내용</th>
            <th className="px-5 py-4 text-right font-medium">가격(원)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[var(--color-border)]">
              <td className="px-5 py-4 font-medium align-top">{r.name}</td>
              <td className="px-5 py-4 text-[var(--color-fg-muted)] align-top leading-[1.8]">
                {r.spec || "-"}
                {r.note && <div className="mt-1 text-sm">{r.note}</div>}
              </td>
              <td className="px-5 py-4 text-right font-medium align-top">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
