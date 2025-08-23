import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styled";
import "./request.css";

const upIcon = "/images/up.svg";
const downIcon = "/images/down.svg";

const Request = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const estimation = state?.estimation;
  const modelName = state?.modelName;

  // ✅ 주소 받아오기
  const si = state?.si || "";
  const gu = state?.gu || "";
  const dong = state?.dong || "";

  if (!state || !estimation) {
    return (
      <S.Container>
        <p>업체 정보 또는 진단 데이터가 없습니다.</p>
        <S.BackButton onClick={() => navigate("/match")}>←</S.BackButton>
      </S.Container>
    );
  }

  // 예상 결제 금액: 범위 평균
  const avgPrice = Math.round(
    (estimation.estimateMin + estimation.estimateMax) / 2
  );

  const categoryMap = {
    MOB: "휴대폰/태블릿",
    COM: "노트북/PC",
    APP: "생활가전",
    DEV: "주변기기/기타",
  };

  return (
    <S.Container>
      {/* 상단 업체 이미지 */}
      <S.HeaderWrapper>
        <S.HeaderImage src={state.img} alt="업체 대표 배경" />
        <S.BackButton onClick={() => navigate("/match")}>←</S.BackButton>
      </S.HeaderWrapper>

      {/* 업체 프로필 */}
      <S.Header>
        <S.ProfileImage src={state.img} alt={state.bizesNm} />
      </S.Header>

      <S.Body>
        <S.Badge>추천순위 {state.rank}위</S.Badge>
        <S.Title>
          안녕하세요 <br /> <span>{state.bizesNm}</span>입니다.
        </S.Title>

        {/* 별점 + 주소 */}
        <S.SubInfo>
          ★ <span className="score">({state.rating}) {si} {gu} {dong}</span>
        </S.SubInfo>

        {/* 소개 문구 */}
        <S.Description>
          원하시는 조건으로 수리, 교체 <br /> 진행해드리겠습니다!
        </S.Description>
      </S.Body>

      {/* 리뷰 */}
      <S.ReviewSection>
        <S.ReviewHeader>
          <span>리뷰 <a>201</a></span>
          <S.MoreButton>더보기</S.MoreButton>
        </S.ReviewHeader>

        <S.ReviewSlider>
          <S.ReviewCard className="review_card">
            <S.ReviewTitle>춤추는 개구리</S.ReviewTitle>
            <S.ReviewScore>★ <span>5.0</span></S.ReviewScore>
            <S.ReviewContent>
              전문가님이 정말 친절하시고, 수리도 30분만에 깔끔하게 끝났습니다.
              예상 비용도 거의 똑같아서 믿음이 갔어요!
            </S.ReviewContent>
          </S.ReviewCard>

          <S.ReviewCard className="review_card">
            <S.ReviewTitle>도로위의 비둘기</S.ReviewTitle>
            <S.ReviewScore>★ <span>4.8</span> </S.ReviewScore>
            <S.ReviewContent>
              제품 설명도 잘 해주시고, 가격도 만족스러워요.
            </S.ReviewContent>
          </S.ReviewCard>

          <S.ReviewCard className="review_card">
            <S.ReviewTitle>멋쟁이 토마토</S.ReviewTitle>
            <S.ReviewScore>★ <span>4.6</span></S.ReviewScore>
            <S.ReviewContent>
              기사님이 매우 친절하셨어요. 추천합니다!
            </S.ReviewContent>
          </S.ReviewCard>
        </S.ReviewSlider>
      </S.ReviewSection>

      {/* 견적 카드 */}
      <S.EstimateCard className="review_card">
        <S.CardHeader onClick={() => setIsOpen(!isOpen)}>
          <span>내 선택 정보</span>
          {isOpen ? <img src={upIcon} alt="up" /> : <img src={downIcon} alt="down" />}
        </S.CardHeader>

        {isOpen && (
          <S.EstimateGrid>
            <S.EstimateRow>
              <S.EstimateLabel>수리 유형</S.EstimateLabel>
              <S.EstimateValue>{categoryMap[estimation.category]}</S.EstimateValue>
            </S.EstimateRow>

            <S.EstimateRow>
              <S.EstimateLabel>위치</S.EstimateLabel>
              <S.EstimateValue>{si} {gu} {dong}</S.EstimateValue>
            </S.EstimateRow>

            <S.EstimateRow>
              <S.EstimateLabel>진단 결과</S.EstimateLabel>
              <S.EstimateValue>{estimation.diagnosis}</S.EstimateValue>
            </S.EstimateRow>

            <S.EstimateRow>
              <S.EstimateLabel>교체에 필요한 부품</S.EstimateLabel>
              <S.EstimateValue>{estimation.requiredParts.join(", ")}</S.EstimateValue>
            </S.EstimateRow>

            <S.EstimateRow style={{ gridColumn: "1 / span 2" }}>
              <S.EstimateLabel>예상 결제 금액</S.EstimateLabel>
              <S.EstimatePrice>{avgPrice.toLocaleString()}원</S.EstimatePrice>
            </S.EstimateRow>
          </S.EstimateGrid>
        )}
      </S.EstimateCard>

      <S.NoticeText>예약 후 확인은 영업일 기준 1~2일 소요됩니다.</S.NoticeText>

      {/* 고정 버튼 */}
      <S.FixedButton onClick={() => navigate("/complete")}>
        업체에 견적서 보내기
      </S.FixedButton>
    </S.Container>
  );
};

export default Request;
