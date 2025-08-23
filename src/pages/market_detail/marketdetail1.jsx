import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";


const adoino = "/images/adoino.svg";
const magnify = "/images/magnify.svg";

const MarketDetail1 = () => {
  const navigate = useNavigate();

  // 더미 데이터 (추후 API 연동 가능)
  const product = {
    name: "ESP32 Wi-Fi & 블루투스 개발 보드",
    desc: "ESP-32 아두이노 WIFI ESP8266",
    price: 11700,
    shipping: "무료",
    type: "새 제품",
    point: 80,
    img: "/images/adoino.svg", // 실제 이미지 경로 넣으시면 됩니다
  };

  return (
    <S.Container>
      {/* 헤더 */}
      <S.Header>
        <S.IconButton onClick={() => navigate(-1)}>←</S.IconButton>
        <S.IconButton><img src={magnify} alt="돋보기 아이콘" width={18} height={18} /></S.IconButton>
      </S.Header>

      {/* 상품 이미지 */}
      <S.ImageWrapper>
        <S.ProductImage src={adoino} alt={product.name} />
      </S.ImageWrapper>

      {/* 마켓명 */}
      <S.MarketRow>
        스페이스마켓 <span>〉</span>
      </S.MarketRow>

      {/* 상품 정보 */}
      <S.InfoSection>
        <S.ProductTitle>{product.name}</S.ProductTitle>
        <S.ProductDesc>{product.desc}</S.ProductDesc>
        <S.Price>{product.price.toLocaleString()}원</S.Price>

        <S.DetailRow>
          <S.Label>배송비</S.Label>
          <S.Value>{product.shipping}</S.Value>
        </S.DetailRow>

        <S.DetailRow>
          <S.Label>유형</S.Label>
          <S.Value>{product.type}</S.Value>
        </S.DetailRow>
      </S.InfoSection>

      {/* 포인트 박스 */}
      <S.PointRow>
        <S.PointIcon>🛒</S.PointIcon>
        <S.PointText>
          포인트 <strong>{product.point}원</strong> 받기
        </S.PointText>
        <S.Arrow>〉</S.Arrow>
      </S.PointRow>

      {/* 하단 버튼 (sticky) */}
      <S.Footer>
        <S.CartButton>장바구니</S.CartButton>
        <S.BuyButton>구매하기</S.BuyButton>
      </S.Footer>
    </S.Container>
  );
};

export default MarketDetail1;
