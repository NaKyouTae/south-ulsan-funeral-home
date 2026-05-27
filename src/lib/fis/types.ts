export type FisRawSangju = {
  Rel: string;
  SangjuName: string;
};

export type FisRawFuneral = {
  Idx: number;
  GoinId: number;
  FuneralName: string;
  FuneralFloor: string;
  GoinName: string;
  Age: string;
  Gender: string;
  Religion: string;
  PhotoPath: string;
  RoomDt: string;
  BalinDt: string;
  IpDt: string;
  CrematePlace: string;
  JangjiName: string;
  Comment: string;
  SangjoCorp: string;
  Sangju: FisRawSangju[];
};

export type FisResponse = {
  message: string;
  data: FisRawFuneral[];
};

export type Sangju = {
  rel: string;
  name: string;
};

export type Obituary = {
  id: number;
  goinId: number;
  isPlaceholder: boolean;
  roomLabel: string;
  roomName: string;
  roomFloor: string;
  deceased: string;
  age: string;
  gender: string;
  religion: string;
  photoPath: string;
  roomDt: string;
  ipDt: string;
  balinDt: string;
  balinDisplay: string;
  cremate: string;
  jangji: string;
  site: string;
  comment: string;
  sangjoCorp: string;
  sangju: Sangju[];
  sangjuNames: string;
};
