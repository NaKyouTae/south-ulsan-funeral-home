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
        <div className="px-6 py-4 bg-[var(--color-primary-tint)] border-b border-[var(--color-border)] font-medium text-[var(--color-primary)]">
          {caption}
        </div>
      )}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[var(--color-primary)] text-white text-left">
            <th className="py-3 px-5 font-medium">항목</th>
            <th className="py-3 px-5 font-medium">규격·내용</th>
            <th className="py-3 px-5 font-medium text-right">가격(원)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[var(--color-border)]">
              <td className="py-3 px-5 font-medium align-top">{r.name}</td>
              <td className="py-3 px-5 text-[var(--color-fg-muted)] align-top">
                {r.spec || "-"}
                {r.note && <div className="text-xs mt-1">{r.note}</div>}
              </td>
              <td className="py-3 px-5 text-right font-medium align-top">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
