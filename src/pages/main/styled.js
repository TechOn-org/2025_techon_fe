import styled from "styled-components";

/** Design tokens */
const color = {
  bg: "#F5F7FB",
  card: "#FFFFFF",
  text: "#0E1117",
  sub: "#6B7280",
  primary: "#2563EB",
  line: "#E5E7EB",
  pill: "#EEF2FF",
  shadow: "rgba(15, 23, 42, 0.06)",
};

export const Wrap = styled.div`
  min-height: 100svh;
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

export const LocationIcon = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${color.sub};
  display: inline-block;
`;


/* ===== Content ===== */
export const Content = styled.main`
  padding: 0 14px 24px;
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
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 92px;
  object-fit: contain;
  filter: drop-shadow(0 12px 18px ${color.shadow});
  align-self: end;
`;

/* ===== ASUS 프로모 카드 ===== */
export const PromoCard = styled.div`
  margin-top: 14px;
  background: ${color.card};
  border-radius: 18px;
  box-shadow: 0 8px 24px ${color.shadow};
  padding: 14px;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 12px;
`;

export const PromoLogo = styled.div`
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 2px;
  color: #1f2937;
  background: #f1f5f9;
  border-radius: 14px;
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

/* ===== Section 공통 ===== */
export const Section = styled.section`
  margin-top: 18px;
`;

export const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 10px 2px;
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
  font-size: 14px;
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

/* ===== 필터 바 ===== */
export const FilterBar = styled.div`
  margin-top: 16px;
  background: ${color.card};
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 6px 18px ${color.shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterPill = styled.div`
  font-size: 12px;
  color: ${color.text};
  background: #f8fafc;
  border: 1px solid ${color.line};
  border-radius: 999px;
  padding: 8px 12px;
  white-space: nowrap;
`;

export const FilterDivider = styled.div`
  flex: 1;
`;

/* ===== 가로 스크롤 (업사이클링) ===== */
export const SmallLink = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  color: ${color.sub};
  font-size: 12px;
`;

export const HorizontalScroll = styled.div`
  margin-top: 8px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 160px;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 0;
  }
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
