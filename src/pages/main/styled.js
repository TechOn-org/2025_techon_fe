import styled from "styled-components";

export const ShadowBox = styled.div`
  width: 100%;        /* 가로는 부모 기준으로 늘어남 */
  max-width: 1200px;  /* 최대 너비 */
  height: 300px;      /* 고정 높이 */
  margin: 0 auto;     /* 가운데 정렬 */
  background-color: white;
  border-radius: 12px;

  /* 그림자 추가 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  /* 반응형 대응 */
  @media (max-width: 768px) {
    height: 200px;
  }
`;

/** Design tokens */
const color = {
  bg: "#F5F7FB",
  card: "#FFFFFF",
  text: "#0E1117",
  sub: "#6B7280",
  primary: "#2563EB",
  click: "#408EFD",
  line: "#E5E7EB",
  pill: "#EEF2FF",
  shadow: "rgba(15, 23, 42, 0.06)",
};



export const Wrap = styled.div`
  max-width: 412px;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: ${color.bg};
`;


/* ===== Header ===== */
export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${color.bg};
  padding: 14px 16px 8px;
`;

export const HeaderTop = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

export const TogglePill = styled.div`
  justify-self: center;
  width: 160px;
  height: 44px;
  border-radius: 999px;
  background: ${color.primary};
  position: relative;
  box-shadow: 0 8px 24px ${color.shadow};

  &::after {
    content: "";
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 4px 12px ${color.shadow};
  }
`;

export const BellBtn = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  font-size: 20px;
  line-height: 1;
  color: ${color.sub};
`;

export const HeaderBottom = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  height: 22px;
`;

export const GpsIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
`;

export const BellIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const LocationBtn = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  color: ${color.sub};
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

// 섹션 공통
export const Section = styled.section`
  margin-top: 18px;
`;

// 헤더/섹션 타이틀 라인 정렬용
export const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 섹션 제목
export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px 2px;
`;


export const NotificationCard = styled.div`
  margin-top: 16px;
  background: ${color.card};
  border-radius: 20px;
  padding: 18px 16px;

  /* 2열: 텍스트 / 아이콘 */
  display: grid;
  grid-template-columns: 1fr 84px;  /* 아이콘영역 고정 */
  align-items: start;               /* 상단 맞춤 */
  gap: 16px;

  /* 파란빛 그림자 + 은은한 외곽선 */
  box-shadow:
    0 12px 28px rgba(42, 90, 247, 0.10),
    0 4px 10px rgba(42, 90, 247, 0.06);
  outline-offset: 0;
`;



/* 왼쪽 텍스트 컬럼 */
export const NotiTextCol = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto; /* 제목/상태/메타/설명 */
  row-gap: 8px;
  text-align: left;
  justify-items: start;
  min-width: 0;         /* 줄바꿈 허용 */
`;


export const NotiTitle = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: ${color.text};
`;

export const NotiStatus = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${color.primary};
`;

export const NotiMeta = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: ${color.sub};
  opacity: 0.9;
`;

export const NotiDesc = styled.div`
  font-size: 12px;
  color: ${color.sub};
  opacity: 0.8;
`;


export const NotiIconWrap = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 16px;
  overflow: hidden;
  justify-self: end;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;   /* 네모를 꽉 채움 */
    display: block;
  }
`;

/* ===== Content ===== */
export const Content = styled.main`
  padding: 0 14px 84px; 
`;

export const BottomNav = styled.nav`
  position: fixed;                 /* 뷰포트 기준 */
  bottom: 0;
  left: 50%;                       /* 가운데 기준점 */
  transform: translateX(-50%);     /* 정확히 중앙으로 이동 */
  z-index: 100;

  width: 100%;
  max-width: 452px;                /* 본문과 동일 너비 */
  box-sizing: border-box;          /* 패딩 포함 폭 계산 */

  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: saturate(180%) blur(10px);
  border-top: 1px solid ${color.line};
  padding: 4px 12px calc(4px + env(safe-area-inset-bottom));
`;


export const BottomNavInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 100%;
`;


export const NavButton = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  padding: 4px 2px;
  display: grid;
  place-items: center;
  gap: 4px;
  color: ${color.sub};
  font-size: 12px;
  font-weight: 700;
  border-radius: 12px;
  transition: transform .12s ease, color .12s ease;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
    transition: fill .12s ease;
  }

  &.active { 
    color: #408EFD;
  }

  &:active { transform: scale(0.96); }
`;

export const NavIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

/* ===== Hero / 결제 알림 ===== */
export const HeroCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 10px;
  background: transparent; /* 배경은 페이지 배경과 동일 */
  margin-top: 6px;
`;

export const HeroText = styled.div`
  padding-top: 8px;
`;

export const Subtitle = styled.div`
  font-size: 26px;
  line-height: 1.25;
  font-weight: 800;
  margin-bottom: 6px;
`;

export const Headline = styled.h1`
  font-size: 26px;
  line-height: 1.25;
  margin: 0 0 4px 0;
  font-weight: 800;
  letter-spacing: -0.2px;
`;

export const Primary = styled.span`
  color: ${color.primary};
  font-size: 26px;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  filter: drop-shadow(0 12px 18px ${color.shadow});
  align-self: end;
`;

/* ===== ASUS 프로모 카드 ===== */
export const PromoCard = styled.div`
  margin-top: 16px;
  background: ${color.card};
  border-radius: 16px;
  box-shadow: 0 8px 24px ${color.shadow};
  padding: 18px;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 14px;
  min-height: 60px;
`;


export const PromoLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
    height: auto;
    object-fit: contain;
  }
`;

export const PromoBody = styled.div`
  display: grid;
  gap: 4px;
`;

export const PromoTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
`;

export const PromoDesc = styled.div`
  font-size: 12px;
  color: ${color.sub};
`;



/* ===== 수리 진행 카드 ===== */
export const StatusCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
  align-items: center;
  background: ${color.card};
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 6px 18px ${color.shadow};
`;

export const StatusLeft = styled.div`
  display: grid;
  gap: 6px;
`;

export const StatusBadge = styled.span`
  align-self: start;
  font-size: 11px;
  color: ${color.primary};
  background: ${color.pill};
  border-radius: 999px;
  padding: 6px 8px;
  font-weight: 700;
  width: fit-content;
`;

export const StatusTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const StatusMeta = styled.div`
  font-size: 12px;
  color: ${color.sub};
`;

export const StatusIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(180deg, #fff1f2, #ffe4e6);
`;

/* ===== 진행할 서비스 선택 섹션 ===== */
export const ServiceSection = styled.section`
  margin-top: 16px;
  font-size: 17px;
  border-radius: 18px;
  background: ${color.card};
  padding: 16px;
  text-align: left;
  /* .card 클래스의 그림자/라운드/패딩을 쓰고 있으면 box-shadow: none; 해도 됨 */
`;

export const ServiceHeader = styled.div`
  font-size: 14px;
  color: ${color.sub};
  margin-bottom: 12px;
`;

export const ServiceList = styled.div`
  display: grid;
  gap: 14px;
`;

export const ServiceItem = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 76px 1fr; /* 아이콘 고정, 텍스트 가변 */
  gap: 12px;
  align-items: center;

  background: transparent;
  border: none;
  border-radius: 14px;
  padding: 12px;
  text-align: left;

  /* 호버 살짝 강조 (선택) */
  &:hover {
    border-color: rgba(42, 90, 247, 0.25);
    box-shadow: 0 6px 14px rgba(42, 90, 247, 0.08);
  }
`;

export const ServiceIcon = styled.img`
  width: 76px;    /* 원 크기 */
  height: 76px;
  border-radius: 50%;   /* 동그랗게 잘라내기 */
  object-fit: cover;    /* 이미지가 꽉 차도록 */
`;


export const ServiceTexts = styled.div`
  display: grid;
  gap: 4px;
  min-width: 0;
`;

export const ServiceCaption = styled.div`
  font-size: 14px;
  color: ${color.sub};
`;

export const ServiceHeading = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${color.text};
`;

/* ===== 하단 필 버튼 ===== */
export const PillRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
`;

export const PillButton = styled.button`
  appearance: none;
  border: none;
  background: #ffffff;
  color: ${color.text};
  font-size: 14px;
  border-radius: 16px;
  padding: 14px 16px;
  box-shadow:
    0 10px 20px rgba(42, 90, 247, 0.08),
    0 2px 4px rgba(42, 90, 247, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between; /* 텍스트 왼쪽, 아이콘 오른쪽 */

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${color.primaryLight}; /* 살짝 색상 강조 */
    box-shadow:
      0 12px 24px rgba(42, 90, 247, 0.12),
      0 4px 8px rgba(42, 90, 247, 0.08);
    transform: translateY(-2px); /* 살짝 떠오르는 느낌 */
  }
`;




/* ===== 액션 그리드 ===== */
export const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const ActionButton = styled.button`
  appearance: none;
  border: none;
  background: ${color.card};
  border-radius: 14px;
  padding: 14px 10px;
  box-shadow: 0 6px 18px ${color.shadow};
  display: grid;
  place-items: center;
  gap: 8px;
`;

export const ActionIcon = styled.div`
  font-size: 20px;
  line-height: 1;
`;

export const ActionLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
`;


/* ===== 가로 스크롤 (업사이클링) ===== */
export const SmallLink = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  color: ${color.sub};
  font-size: 14px;
`;

export const HorizontalScroll = styled.div`
  margin-top: 8px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 160px;     /* 카드 폭 */
  gap: 40px;                    /* 카드 간격 */
  overflow-x: auto;
  padding: 2px 8px 10px;        /* 스크롤 아래 여백 */
  scroll-snap-type: x mandatory;

  /* 각 아이템이 서로 겹치지 않도록 */
  & > * { isolation: isolate; } /* 각 자식에 독립 stacking context */
  
  &::-webkit-scrollbar { height: 0; }
`;

export const ProductCard = styled.article`
  scroll-snap-align: start;
  background: ${color.card};
  border-radius: 14px;
  box-shadow: 0 8px 20px ${color.shadow};
  overflow: hidden;
  display: grid;
  grid-template-rows: 100px auto;
`;

export const ProductThumb = styled.div`
  background: linear-gradient(180deg, #e2e8f0, #f1f5f9);
`;

export const ProductBody = styled.div`
  padding: 10px;
  display: grid;
  gap: 6px;
`;

export const ProductBadge = styled.span`
  font-size: 10px;
  color: ${color.primary};
  background: ${color.pill};
  border-radius: 999px;
  padding: 4px 8px;
  width: fit-content;
  font-weight: 700;
`;

export const ProductTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

export const ProductPrice = styled.div`
  font-size: 12px;
  color: ${color.sub};
`;

 export const BottomSpacer = styled.div`
   height: 24px;
 `;

/* ===== 업사이클링 추천 배너 카드 ===== */
export const UpcycleCard = styled.article`
  background: ${(p) => p.$bg || "#4f46e5"};
  border-radius: 16px;
  padding: 16px;
  color: #fff;
 
  /* 카드 내부 요소를 정확히 가운데 정렬 */
  display: grid;
  justify-items: center;
  align-content: center;   /* 수직 가운데 */
  gap: 12px;

  /* 가로 스크롤 카드 폭/높이 */
  width: 100%;
  height: 240px;           /* 필요시 숫자만 조절 */

  box-shadow:
    0 10px 22px rgba(42, 90, 247, 0.12),
    0 4px 10px rgba(42, 90, 247, 0.08);
  transition: transform .15s ease, box-shadow .15s ease;

  &:hover{
    transform: translateY(-2px);
    box-shadow:
      0 12px 28px rgba(42, 90, 247, 0.16),
      0 6px 14px rgba(42, 90, 247, 0.10);
  }
`;

export const UpcycleTitle = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.3;
  font-weight: 700;
  opacity: .95;
`;

export const UpcycleThumbCircle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #fff;
  display: grid;
  place-items: center;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

/* ===== 업사이클링 아래 광고 배너 ===== */
export const AdBanner = styled.div`
  margin-top: 16px;
  background: #eaf3ff;        /* 연한 하늘색 배경 */
  border-radius: 16px;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 92px; /* 텍스트 / 썸네일 */
  align-items: center;
  gap: 12px;
`;

export const AdText = styled.div`
  display: grid;
  gap: 6px;
  text-align: left;
`;

export const AdTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.25;
  color: ${color.text};
`;

export const AdSubtitle = styled.div`
  font-size: 13px;
  color: ${color.sub};
`;

export const Highlight = styled.span`
  color: ${color.text};
  font-weight: 800;
`;

export const Highlighting = styled.span`
  color: ${color.primary};
  font-weight: 800;
`;



/* 오른쪽 썸네일(악수 이미지) */
export const AdThumb = styled.img`
  width: 92px;
  height: 92px;
  object-fit: contain;
  justify-self: end;
  border-radius: 14px;         /* 이미지가 사각형이면 둥글게 */
  background: #e4eefcff;         /* 투명 PNG일 때 받침 배경 */
  box-shadow: 0 6px 16px rgba(42, 90, 247, 0.08);
`;

