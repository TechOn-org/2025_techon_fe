import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import * as S from "./styled";

// 파동 애니메이션
const ripple = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`;

const RippleWrapper = styled.div`
  position: relative;
  width: 32vw;
  height: 32vw;
  max-width: 150px;
  max-height: 150px;
  margin-top: -20vh;
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;  
  height: 100%;
  border-radius: 50%;
  background: #2665fe;
  opacity: 0;
  animation: ${ripple} 3s infinite;
  animation-delay: ${(props) => props.delay}s;
`;

function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { estimation, modelName, location: userLocation } = location.state || {};

  // 5초 뒤 자동 이동 (state 같이 전달)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/estimate", { state: { estimation, modelName, location: userLocation } });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, estimation, modelName, userLocation]);

  return (
    <S.Container>
      {/* 헤더 */}
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
          <img
            src="/images/backbtn.svg"
            alt="logo"
            style={{ width: "20px", height: "auto" }}
          />
        </S.BackButton>
        <S.StepText></S.StepText>
      </S.Header>

      {/* 메시지 */}
      <S.Question>
        잠시만 기다려주세요. <br />
        Tech On이 제품을 진단 중입니다. <br />
        최적의 전문업체를 찾고 있어요!
      </S.Question>

      {/* 파동 모션 */}
      <S.Motion>
        <RippleWrapper>
          <Circle delay={0} />
          <Circle delay={1} />
          <Circle delay={2} />
        </RippleWrapper>
      </S.Motion>
    </S.Container>
  );
}

export default SearchPage;
