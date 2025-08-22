import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/PostButton";
import * as S from "./styled";

function WritePage() {
  const navigate = useNavigate();

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
        <S.StepText>
          <span className="step">2/3</span>
        </S.StepText>
      </S.Header>

      {/* 질문 */}
      <S.Question>
        수리할 제품 <span className="highlight">모델명</span>과 <br />
        어떤 <span className="highlight">증상</span>이 나타나는지 적어주세요!
      </S.Question>

    <S.Title>
        <S.Heading>제품 모델명을 입력해주세요</S.Heading>
            <TextInput
                        height={16}
                        placeholder="모델명을 입력해주세요"
                        
                        
                    />
    </S.Title>
    <S.Contents>
        <S.Heading>제품에서 어떤 증상이 나타나는지 입력해주세요</S.Heading>
        <TextInput
                        height={264}
                        placeholder="증상을 입력해주세요"
                        
        />
    </S.Contents>
    <S.Footer>
    <Button
        height="48px"
        title="다음"
        backgroundColor="#2665FE"
        color="#fff"
        onClick={() => navigate("/location")}
        />
    </S.Footer>
    </S.Container>
  );
}

export default WritePage;
