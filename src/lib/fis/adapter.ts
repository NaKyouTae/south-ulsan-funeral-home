import { ROOM_LIST } from "@/lib/site";
import type { FisRawFuneral, Obituary } from "./types";

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/;

export function normalizeRoomName(name: string): string {
  const stripped = (name ?? "").replace(/\s+/g, "");
  if (!stripped) return "";
  return /호$/.test(stripped) ? stripped : `${stripped}호`;
}

export function formatBalinDate(raw: string): string {
  const m = DATE_RE.exec((raw ?? "").trim());
  if (!m) return raw ?? "";
  const [, y, mo, d, h, mi] = m;
  return `${y}년 ${mo}월 ${d}일 ${h}시 ${mi}분`;
}

const FIS_ORIGIN = "https://fis.daqda.kr";

export function normalizePhotoPath(raw: string): string {
  const v = (raw ?? "").trim();
  if (!v) return "";
  if (/^https?:\/\//i.test(v)) return v;
  const fixed = v.replace(/^(https?:)\/(?!\/)/i, "$1//");
  if (/^https?:\/\//i.test(fixed)) return fixed;
  return `${FIS_ORIGIN}${fixed.startsWith("/") ? "" : "/"}${fixed}`;
}

function joinSite(crematePlace: string, jangjiName: string): string {
  const c = (crematePlace ?? "").trim();
  const j = (jangjiName ?? "").trim();
  if (c && j) return `${c}-${j}`;
  if (c) return c;
  if (j) return j;
  return "-";
}

export function toObituary(raw: FisRawFuneral): Obituary {
  const roomName = normalizeRoomName(raw.FuneralName);
  const roomFloor = (raw.FuneralFloor ?? "").trim();
  const roomLabel = roomFloor ? `${roomName} · ${roomFloor}` : roomName;
  const sangju = (raw.Sangju ?? []).map((s) => ({ rel: s.Rel ?? "", name: s.SangjuName ?? "" }));

  return {
    id: raw.Idx,
    goinId: raw.GoinId,
    isPlaceholder: false,
    roomLabel,
    roomName,
    roomFloor,
    deceased: raw.GoinName ?? "",
    age: (raw.Age ?? "").trim(),
    gender: (raw.Gender ?? "").trim(),
    religion: (raw.Religion ?? "").trim(),
    photoPath: normalizePhotoPath(raw.PhotoPath),
    roomDt: raw.RoomDt ?? "",
    ipDt: raw.IpDt ?? "",
    balinDt: raw.BalinDt ?? "",
    balinDisplay: formatBalinDate(raw.BalinDt),
    cremate: (raw.CrematePlace ?? "").trim(),
    jangji: (raw.JangjiName ?? "").trim(),
    site: joinSite(raw.CrematePlace, raw.JangjiName),
    comment: raw.Comment ?? "",
    sangjoCorp: (raw.SangjoCorp ?? "").trim(),
    sangju,
    sangjuNames: sangju.map((s) => s.name).filter(Boolean).join(", ") || "-",
  };
}

function placeholderId(roomName: string): number {
  let hash = 0;
  for (let i = 0; i < roomName.length; i++) hash = (hash * 31 + roomName.charCodeAt(i)) | 0;
  return -Math.abs(hash) - 1;
}

export function placeholderObituary(roomName: string): Obituary {
  return {
    id: placeholderId(roomName),
    goinId: 0,
    isPlaceholder: true,
    roomLabel: roomName,
    roomName,
    roomFloor: "",
    deceased: "-",
    age: "",
    gender: "",
    religion: "",
    photoPath: "",
    roomDt: "",
    ipDt: "",
    balinDt: "",
    balinDisplay: "-",
    cremate: "",
    jangji: "",
    site: "-",
    comment: "",
    sangjoCorp: "",
    sangju: [],
    sangjuNames: "-",
  };
}

export function toObituaries(list: FisRawFuneral[]): Obituary[] {
  return list.map(toObituary);
}

export function mergeWithRoomList(obituaries: Obituary[]): Obituary[] {
  const occupied = new Set(obituaries.map((o) => o.roomName));
  const emptyRooms = ROOM_LIST.filter((r) => !occupied.has(r)).map(placeholderObituary);
  const order = new Map<string, number>(ROOM_LIST.map((name, i) => [name, i]));
  const rank = (name: string) => order.get(name) ?? Number.MAX_SAFE_INTEGER;
  return [...obituaries, ...emptyRooms].sort((a, b) => rank(a.roomName) - rank(b.roomName));
}
