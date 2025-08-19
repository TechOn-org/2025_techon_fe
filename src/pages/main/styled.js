import styled from "styled-components";

/** Design tokens (모바일 기본 360~390px 폭을 가정) */
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

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${color.bg};
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${color.line};
`;

export const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.span`
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.2px;
`;

export const Location = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${color.sub};
`;
export const LocationDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${color.primary};
`;

export const Content = styled.main`
  padding: 12px 14px 24px;
`;

/* ===== Hero / 결제 알림 ===== */
export const HeroCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 112px;
  gap: 10px;
  background: ${color.card};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 24px ${color.shadow};
`;

export const HeroText = styled.div``;

export const Subtle = styled.div`
  font-size: 13px;
  color: ${color.sub};
  margin-bottom: 6px;
`;

export const Headline = styled.h1`
  font-size: 18px;
  line-height: 1.35;
  margin: 0 0 8px 0;
  font-weight: 700;
`;

export const Primary = styled.span`
  color: ${color.primary};
`;

export const Note = styled.div`
  font-size: 12px;
  color: ${color.sub};
`;

export const HeroThumb = styled.div`
  width: 100%;
  height: 72px;
  border-radius: 12px;
  background: linear-gradient(180deg, #eaf1ff, #f3f6ff);
`;

/* ===== section 공통 ===== */
export const Section = styled.section`
  margin-top: 18px;
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

  /* 모바일 스크롤 숨김(선택) */
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
