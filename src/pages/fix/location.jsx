import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/PostButton";
import * as S from "./styled";

function LocationPage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      {/* 헤더 */}
      <S.Header>
        <S.BackButton>
          <img
            src="/images/backbtn.svg"
            alt="logo"
            style={{ width: "20px", height: "auto" }}
          />
        </S.BackButton>
        <S.StepText>
          <span className="step">3/3</span>
        </S.StepText>
      </S.Header>

      {/* 질문 */}
      <S.Question>
        수리 업체로 <br />
        찾고 계신 <span className="highlight">지역</span>은 어디인가요?
      </S.Question>

      <S.Title>
        <S.Heading>시, 구, 등을 입력해주세요.</S.Heading>
            <TextInput
                        height={16}
                        placeholder="제목을 작성해주세요(공백 포함 30자 제한)"
                        
                        
                    />
      </S.Title>
      <S.Footer>
        <Button
          height="48px"
          title="다음"
          backgroundColor="#2665FE"
          color="#fff"
          onClick={() => navigate("/next")}
        />
      </S.Footer>
    </S.Container>
  );
}

export default LocationPage;
