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

// 헤더/섹션 타이틀 라인 정렬용
export const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;