import { toObituaries } from "./adapter";
import type { FisResponse, Obituary } from "./types";

const FIS_URL = "https://fis.daqda.kr/api/HpFuneral.aspx?ci=namulsan360";

export async function getObituaries(): Promise<Obituary[]> {
  const res = await fetch(FIS_URL, {
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });

  if (!res.ok) {
    const tag = res.status === 401 ? "[FIS-AUTH]" : "[FIS]";
    console.error(`${tag} ${res.status} ${res.statusText} — ${FIS_URL}`);
    throw new Error(`FIS API 호출 실패 (${res.status})`);
  }

  const json = (await res.json()) as FisResponse;
  if (!json || !Array.isArray(json.data)) {
    console.error("[FIS] 비정상 응답 형식", json);
    throw new Error("FIS API 응답 형식 오류");
  }

  return toObituaries(json.data);
}
