# 남울산전문장례식장 (South Ulsan Funeral Home)

Next.js 16 (App Router) 기반의 장례식장 공식 홈페이지 프로젝트입니다.

## 개발

```bash
pnpm install
pnpm dev      # http://localhost:14444
pnpm build
pnpm start    # http://localhost:14444
```

## 메뉴 구조

- **장례식장 안내** : 인사말 / 오시는 길 / 주차안내 / 연혁
- **시설안내** : 빈소 / 접객실 / 안치실 / 부대시설
- **장례안내** : 장례절차 / 임종 후 절차 / 종교별 장례 / 상복·예절
- **이용요금** : 빈소 이용료 / 장례용품 / 음식·접객
- **부고·조문** : 부고 안내 / 온라인 조문
- **고객센터** : 공지사항 / 자주묻는 질문 / 1:1 문의

## 디자인 컨셉

- 메인 컬러 : 차분한 다크 그린 `#1f3a34` + 따뜻한 베이지 / 골드 액센트 `#b5894a`
- 한글 본문은 Noto Sans KR, 헤더·캡션은 Noto Serif KR (한자/한글 조합)
- 절제된 카드, 얇은 구분선, 미세한 격자 패턴 백그라운드
- 한문 "南" / "謹弔" 등 동양적 모티프 활용

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- Noto Sans/Serif KR (next/font)
