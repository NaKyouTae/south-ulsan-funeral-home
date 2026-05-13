import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://south-ulsan-funeral.kr"),
  icons: {
    icon: "/site-logo.png",
    shortcut: "/site-logo.png",
    apple: "/site-logo.png",
  },
  title: {
    default: "남울산전문장례식장 | 정성으로 모시는 마지막 길",
    template: "%s | 남울산전문장례식장",
  },
  description:
    "고인의 마지막 길을 정성으로 모시는 남울산전문장례식장입니다. 빈소·접객실·주차장 등 편의시설과 전문 장례지도사가 24시간 상주합니다.",
  keywords: [
    "남울산전문장례식장",
    "울산 장례식장",
    "장례절차",
    "빈소",
    "부고",
    "조문",
  ],
  openGraph: {
    title: "남울산전문장례식장",
    description: "정성으로 모시는 마지막 길, 남울산전문장례식장",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
