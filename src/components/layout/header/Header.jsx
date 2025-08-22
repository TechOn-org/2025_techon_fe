import { useState } from "react";
import * as S from "./styled";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  
  const gps = "/images/gps.svg";
  const alarm ="/images/alarm_button.svg";
  const Logo = "/images/LOGO.svg";
  
  return (
    <S.Header>
          <S.RowBetween>
            <S.Logo src={Logo} alt="Techon 로고" />
            <S.LocationBtn >
              <S.GpsIcon src={gps} alt="gps" />
              경기 서울시 동작구 상도로 ▾
            </S.LocationBtn>
    
            <S.BellBtn aria-label="알림">
              <S.BellIcon src={alarm} alt="알림" />
            </S.BellBtn>
          </S.RowBetween>
    </S.Header>
  );
}


export default Header;