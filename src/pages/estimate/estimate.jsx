import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import "./estimate.css";

const diagnose = "/images/diagnose.svg";

function Estimate() {
    const navigate = useNavigate();

  return (
    <S.Container>
      {/* 헤더 */}
       <S.Header>
        <S.BackButton onClick={() => navigate("/main")}>←</S.BackButton>
      </S.Header>

      {/* 아이콘 + 텍스트 */}
      <S.DiagnoseBox>
        <img src={diagnose} alt="진단 아이콘" />
        <S.DiagnoseTextBox>
          <S.SubTitle>AI가 알려주는 제품 진단서</S.SubTitle>
          <S.MainTitle>진단 결과가 나왔습니다!</S.MainTitle>
        </S.DiagnoseTextBox>
      </S.DiagnoseBox>

      {/* 기본 정보 */}
      <S.Section>
        <S.SectionTitle>기본 정보</S.SectionTitle>
        <S.InfoBox className="estimate_card">
            <span className="label">제품모델명</span><br />iPhone 15 Pro
        </S.InfoBox>
        <S.InfoBox className="estimate_card">
            <span className="label">분류</span><br />휴대폰/태블릿
        </S.InfoBox>
    </S.Section>

      {/* 제품 상태 */}
      <S.Section>
        <S.SectionTitle>제품 상태</S.SectionTitle>
        <S.InfoBox className="estimate_card">
            <span className="label">진단결과</span><br />액정 교체
        </S.InfoBox>
        <S.InfoBox className="estimate_card">
            <span className="label">교체가 필요한 부품</span><br />액정 디스플레이
        </S.InfoBox>
      </S.Section>

      {/* 예상 견적 */}
      <S.Section>
        <S.SectionTitle>예상 견적</S.SectionTitle>
        
        <S.PriceBox className="estimate_card">
          <S.Row>
            <S.Label>수수료율</S.Label>
            <S.Value bold>
            ~ 5.5<S.Highlight> %</S.Highlight>
            </S.Value>
        </S.Row>

          <S.Row>
            <S.Label>금액</S.Label>
            <S.Value bold>
            350,000 ~ 450,000<S.Highlight> 원</S.Highlight>
            </S.Value>
        </S.Row>
        </S.PriceBox>
      </S.Section>

      <S.Button onClick={() => navigate("/match")}>
        전문가 매칭하기
      </S.Button>
    </S.Container>
  );
}

export default Estimate;