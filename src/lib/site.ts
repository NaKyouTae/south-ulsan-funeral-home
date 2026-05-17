export const SITE = {
  name: "남울산전문장례식장",
  nameEn: "South Ulsan Funeral Home",
  tagline: "정성으로 모시는 마지막 길",
  phone: "052) 238-4444",
  phoneEmergency: "052) 238-4444",
  phoneLink: "0522384444",
  fax: "052) 238-4444",
  address: "울산광역시 울주군 온산읍 덕신외로 360",
  postalCode: "44999",
  lat: 35.4325223,
  lng: 129.3261755,
  email: "info@south-ulsan-funeral.kr",
  businessNumber: "285-86-03806",
  hours: "24시간 연중무휴",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "장례식장 안내",
    href: "/about",
    children: [
      { label: "인사말", href: "/about/greeting" },
      { label: "오시는 길", href: "/about/location" },
      { label: "주차안내", href: "/about/parking" },
    ],
  },
  {
    label: "시설안내",
    href: "/facilities",
    children: [
      { label: "빈소", href: "/facilities/funeral-hall" },
      { label: "접객실", href: "/facilities/reception" },
      { label: "안치실", href: "/facilities/mortuary" },
      { label: "부대시설", href: "/facilities/amenities" },
    ],
  },
  {
    label: "장례안내",
    href: "/procedure",
    children: [
      { label: "장례절차", href: "/procedure/process" },
      { label: "임종 후 절차", href: "/procedure/after-death" },
      { label: "종교별 장례", href: "/procedure/religion" },
      { label: "상복·예절", href: "/procedure/etiquette" },
    ],
  },
  {
    label: "부고안내",
    href: "/notice",
    children: [
      { label: "부고안내", href: "/notice/obituary" },
    ],
  },
];
