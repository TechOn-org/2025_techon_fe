import styled from "styled-components";

/** Design tokens */
const color = {
  bg: "#F9FAFD",
  card: "#FFFFFF",
  text: "#0E1117",
  sub: "#6B7280",
  primary: "#2563EB",
  click: "#408EFD",
  line: "#E5E7EB",
  pill: "#EEF2FF",
  shadow: "rgba(15, 23, 42, 0.06)",
};


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