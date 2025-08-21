import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const match = "/images/match.svg";

function Match() {
    const navigate = useNavigate();

  return (
    <S.Container>
      {/* 헤더 */}
       <S.Header>
        <S.BackButton onClick={() => navigate("/estimate")}>←</S.BackButton>
      </S.Header>

      {/* 아이콘 + 텍스트 */}
      <S.MatchBox>
        <img src={match} alt="매칭 아이콘" />
        <S.MatchTextBox>
          <S.SubTitle>고객님에게 딱 맞는</S.SubTitle>
          <S.MainTitle>업체 추천 해드릴게요!</S.MainTitle>
        </S.MatchTextBox>
      </S.MatchBox>

      {/* 기본 정보 */}
      <S.Section>
        <S.SectionTitle>맞춤 업체 모아보기</S.SectionTitle>
        
    </S.Section>

      

    </S.Container>
  );
}

export default Match;