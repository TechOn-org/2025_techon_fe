import styled from "styled-components";

/** Design tokens */
const color = {
  bg: "#F9FAFD",
  card: "#FFFFFF",
  text: "#0E1117",
  sub: "#B0B0B0",
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

// 헤더/섹션 타이틀 라인 정렬용
export const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BellBtn = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  font-size: 20px;
  line-height: 1;
  color: ${color.sub};
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

export const Location = styled.div`
  font-size: 16px;
  color: #999999;
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
