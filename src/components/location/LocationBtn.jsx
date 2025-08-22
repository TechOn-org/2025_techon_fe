import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getAddressFromCoords } from "../../services/KakaoMap";

export default function LocationBtn() {
  const [address, setAddress] = useState("위치 불러오는 중...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setAddress("위치 권한 없음");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const addr = await getAddressFromCoords(latitude, longitude);
          setAddress(addr);
        } catch (err) {
          console.error(err);
          setAddress("주소 변환 실패");
        }
      },
      (err) => {
        console.error(err);
        setAddress("위치 불러오기 실패");
      }
    );
  }, []);

  return (
    <S.LocationBtn>
      <S.GpsIcon src="/images/gps.svg" alt="gps" />
      {address} ▾
    </S.LocationBtn>
  );
}
