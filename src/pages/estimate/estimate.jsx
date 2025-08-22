import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import "./estimate.css";

const diagnose = "/images/diagnose.svg";

function Estimate() {
    const navigate = useNavigate();
    const [estimate, setEstimate] = useState(null);

    useEffect(() => {
    const fetchEstimate = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/estimation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: "화면이 깨져서 액정이 파손됐어요", // ✅ 테스트용 증상
            modelName: "iPhone 15 Pro",            // ✅ 테스트용 모델명
            category: "MOB",                       // ✅ 카테고리 (MOB/COM/APP/DEV)
          }),
        });

        if (!res.ok) throw new Error("API 요청 실패");

        const data = await res.json();
        setEstimate(data);
      } catch (error) {
        console.error("Estimate 불러오기 실패:", error);
      }
    };

    fetchEstimate();
  }, []);

  if (!estimate) return <p>로딩 중...</p>;


  return (
    <S.Container>
      {/* 헤더 */}
       <S.Header>
        <S.BackButton onClick={() => navigate("/location")}>←</S.BackButton>
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
            <span className="label">제품모델명</span><br />{estimate.modelName}
        </S.InfoBox>
        <S.InfoBox className="estimate_card">
            <span className="label">분류</span><br />{estimate.category}
        </S.InfoBox>
    </S.Section>

      {/* 제품 상태 */}
      <S.Section>
        <S.SectionTitle>제품 상태</S.SectionTitle>
        <S.InfoBox className="estimate_card">
            <span className="label">진단결과</span><br />{estimate.diagnosis}
        </S.InfoBox>
        <S.InfoBox className="estimate_card">
            <span className="label">교체가 필요한 부품</span><br />{estimate.requiredParts.join(", ")}
        </S.InfoBox>
      </S.Section>

      {/* 예상 견적 */}
      <S.Section>
        <S.SectionTitle>예상 견적</S.SectionTitle>
        
        <S.PriceBox className="estimate_card">
          <S.Row>
            <S.Label>수수료율</S.Label>
            <S.Value bold>
              ~ 5.5 <S.Highlight> %</S.Highlight>
            </S.Value>
        </S.Row>

          <S.Row>
            <S.Label>금액</S.Label>
            <S.Value bold>
            {estimate.estimateMin.toLocaleString()} ~{" "}
              {estimate.estimateMax.toLocaleString()}
            <S.Highlight> 원</S.Highlight>
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