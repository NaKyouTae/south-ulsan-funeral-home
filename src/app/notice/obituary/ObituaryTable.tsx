"use client";

import { useState } from "react";
import type { Obituary } from "@/lib/fis/types";
import ObituaryDetailModal from "./ObituaryDetailModal";

type Props = {
  obituaries: Obituary[];
};

function groupSangjuByRelation(obituary: Obituary) {
  const groups = new Map<string, string[]>();

  obituary.sangju.forEach((person) => {
    const relation = person.rel?.trim() || "상주";
    const name = person.name?.trim() || "-";
    const current = groups.get(relation) ?? [];
    current.push(name);
    groups.set(relation, current);
  });

  return Array.from(groups.entries()).map(([relation, names]) => ({
    relation,
    names,
  }));
}

export default function ObituaryTable({ obituaries }: Props) {
  const [selected, setSelected] = useState<Obituary | null>(null);

  return (
    <>
      <div className="overflow-x-auto border-y-[3px] border-[var(--color-fg)]">
        <table className="min-w-[980px] w-full break-keep border-collapse text-[15px] md:text-[16px]">
          <thead>
            <tr className="bg-[#efefef] text-[var(--color-fg)]">
              <th className="align-middle px-8 py-4 text-center text-[16px] font-semibold md:text-[17px]">빈소</th>
              <th className="align-middle px-8 py-4 text-center text-[16px] font-semibold md:text-[17px]">고인명</th>
              <th className="align-middle px-8 py-4 text-center text-[16px] font-semibold md:text-[17px]">상주명</th>
              <th className="align-middle px-8 py-4 text-center text-[16px] font-semibold md:text-[17px]">장지</th>
              <th className="align-middle px-8 py-4 text-center text-[16px] font-semibold md:text-[17px]">발인 일시</th>
            </tr>
          </thead>
          <tbody>
            {obituaries.map((o) => {
              const clickable = !o.isPlaceholder;
              const sangjuGroups = groupSangjuByRelation(o);
              return (
                <tr
                  key={o.id}
                  onClick={clickable ? () => setSelected(o) : undefined}
                  className={
                    clickable
                      ? "cursor-pointer border-t border-[#dfe2e7] transition-colors hover:bg-[#f7f8fb] focus-within:bg-[#f7f8fb]"
                      : "border-t border-[#dfe2e7] text-[#a0a5ae]"
                  }
                >
                  <td className="w-[180px] min-w-[180px] align-middle px-8 py-7 text-center text-[16px] font-medium leading-[1.5] text-[#666c75]">
                    {clickable ? (
                      <button
                        type="button"
                        onClick={() => setSelected(o)}
                        className="w-full text-center underline-offset-4 hover:underline"
                      >
                        {o.roomLabel}
                      </button>
                    ) : (
                      <span className="w-full text-center text-[#666c75]">{o.roomLabel}</span>
                    )}
                  </td>
                  <td className="w-[140px] min-w-[140px] align-middle border-l border-[#dfe2e7] px-8 py-7 text-center text-[16px] font-medium leading-[1.5] text-[#666c75]">
                    {o.deceased}
                  </td>
                  <td className="w-[41%] align-middle border-l border-[#dfe2e7] px-8 py-7 text-[16px] font-medium leading-[1.65] text-[#6a7079]">
                    {sangjuGroups.length > 0 ? (
                      <div className="flex flex-wrap gap-x-4 gap-y-3">
                        {sangjuGroups.map((group) => (
                          <span key={`${o.id}-${group.relation}`} className="inline-flex items-center gap-1.5">
                            <span className="text-[var(--color-primary)]">[{group.relation}]</span>
                            <span>{group.names.join(", ")}</span>
                          </span>
                        ))}
                      </div>
                    ) : (
                      o.sangjuNames
                    )}
                  </td>
                  <td className="w-[340px] min-w-[340px] align-middle border-l border-[#dfe2e7] px-8 py-7 text-center text-[16px] font-medium leading-[1.6] text-[#6a7079]">
                    {o.site}
                  </td>
                  <td className="w-[340px] min-w-[340px] align-middle border-l border-[#dfe2e7] px-8 py-7 text-center text-[16px] font-medium leading-[1.6] text-[#6a7079]">
                    {o.balinDisplay}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ObituaryDetailModal obituary={selected} onClose={() => setSelected(null)} />
    </>
  );
}
