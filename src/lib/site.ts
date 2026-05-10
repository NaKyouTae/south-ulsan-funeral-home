export const SITE = {
  name: "남울산 장례식장",
  nameEn: "South Ulsan Funeral Home",
  tagline: "정성으로 모시는 마지막 길",
  phone: "052-000-0000",
  phoneEmergency: "052-000-0001",
  fax: "052-000-0002",
  address: "울산광역시 남구 OO로 000",
  email: "info@south-ulsan-funeral.kr",
  businessNumber: "000-00-00000",
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
      { label: "연혁", href: "/about/history" },
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
    label: "이용요금",
    href: "/pricing",
    children: [
      { label: "빈소 이용료", href: "/pricing/hall" },
      { label: "장례용품", href: "/pricing/items" },
      { label: "음식·접객", href: "/pricing/catering" },
    ],
  },
  {
    label: "부고·조문",
    href: "/notice",
    children: [
      { label: "부고 안내", href: "/notice/obituary" },
      { label: "온라인 조문", href: "/notice/online" },
    ],
  },
  {
    label: "고객센터",
    href: "/support",
    children: [
      { label: "공지사항", href: "/support/notice" },
      { label: "자주묻는 질문", href: "/support/faq" },
      { label: "1:1 문의", href: "/support/contact" },
    ],
  },
];
