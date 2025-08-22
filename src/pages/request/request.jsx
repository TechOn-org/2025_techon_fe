import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import "./request.css";

const sampleImg = "/images/sample_building.svg";
const companyHeader = "/images/company-header.svg";

const Request = () => {
    const navigate = useNavigate();

  return (
    <S.Container>
      {/* 상단 업체 이미지 */}
      <S.HeaderWrapper>
        <S.HeaderImage src={companyHeader} alt="업체 대표 이미지" />
        <S.BackButton onClick={() => navigate("/main")}>←</S.BackButton>
      </S.HeaderWrapper>

      {/* 업체 프로필 */}
      <S.Header>
        <S.ProfileImage src={sampleImg} alt="프로필" />
      </S.Header>

      <S.Body>
        <S.Badge>추천순위 1위</S.Badge>
        <S.Title>
          안녕하세요 <br/> <span>경성테크</span>입니다.
        </S.Title>

        {/* 별점 + 주소 */}
        <S.SubInfo>
            ★ <span className="score">(4.8) 서울시 구리구 구리동</span>
        </S.SubInfo>

        {/* 소개 문구 */}
        <S.Description>
            원하시는 조건으로 수리, 교체 <br/> 진행해드리겠습니다!
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
              전문가님이 정말 친절하시고, 수리도 30분만에 깔끔하게 끝났습니다. 예상 비용도 거의 똑같아서 믿음이 갔어요!
            </S.ReviewContent>
          </S.ReviewCard>

          <S.ReviewCard className="review_card">
            <S.ReviewTitle>춤추는 개구리</S.ReviewTitle>
            <S.ReviewScore>★ <span>5.0</span> </S.ReviewScore>
            <S.ReviewContent>
              제품 설명도 잘 해주시고, 가격도 만족스러워요.
            </S.ReviewContent>
          </S.ReviewCard>

          <S.ReviewCard className="review_card">
            <S.ReviewTitle>춤추는 개구리</S.ReviewTitle>
            <S.ReviewScore>★ <span>5.0</span></S.ReviewScore>
            <S.ReviewContent>
              기사님이 매우 친절하셨어요. 추천합니다!
            </S.ReviewContent>
          </S.ReviewCard>
        </S.ReviewSlider>
      </S.ReviewSection>


      {/* 견적 카드 */}
    <S.EstimateCard className="review_card">
    <S.RequestButton>업체에 견적서 보내기</S.RequestButton>

    <S.EstimateGrid>
        <S.EstimateRow>
        <S.EstimateLabel>수리 유형</S.EstimateLabel>
        <S.EstimateValue>휴대폰/태블릿</S.EstimateValue>
        </S.EstimateRow>

        <S.EstimateRow>
        <S.EstimateLabel>위치</S.EstimateLabel>
        <S.EstimateValue>서울시 동작구 상도동</S.EstimateValue>
        </S.EstimateRow>

        <S.EstimateRow>
        <S.EstimateLabel>진단 결과</S.EstimateLabel>
        <S.EstimateValue>액정 교체</S.EstimateValue>
        </S.EstimateRow>

        <S.EstimateRow>
        <S.EstimateLabel>교체에 필요한 부품</S.EstimateLabel>
        <S.EstimateValue>액정 디스플레이</S.EstimateValue>
        </S.EstimateRow>

        <S.EstimateRow style={{ gridColumn: "1 / span 2" }}>
        <S.EstimateLabel>예상 결제 금액</S.EstimateLabel>
        <S.EstimatePrice>330,000원</S.EstimatePrice>
        </S.EstimateRow>
    </S.EstimateGrid>
    </S.EstimateCard>

    <S.NoticeText>예약 후 확인은 영업일 기준 1~2일 소요됩니다.</S.NoticeText>

    </S.Container>
  );
};

export default Request;
