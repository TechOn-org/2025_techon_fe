import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/PostButton";
import * as S from "./styled";

function WritePage() {
  const navigate = useNavigate();

  // 입력값 상태 관리
  const [modelName, setModelName] = useState("");
  const [issue, setIssue] = useState("");

  // 서버 전송 함수
  const handleNext = async () => {
    if (!modelName || !issue) {
      alert("모델명과 증상을 모두 입력해주세요!");
      return;
    }

    const payload = {
      modelName,
      issue,
    };

    try {
      const response = await fetch("http://localhost:8080/api/repairs", {
        // 👉 실제 백엔드 엔드포인트로 교체
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("서버 전송 실패");
      }

      const result = await response.json();
      console.log("서버 응답:", result);

      // 성공 시 다음 페이지로 이동
      navigate("/location");
    } catch (error) {
      console.error("에러 발생:", error);
      alert("서버 통신 중 문제가 발생했습니다.");
    }
  };

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

      {/* 모델명 입력 */}
      <S.Title>
        <S.Heading>제품 모델명을 입력해주세요</S.Heading>
        <TextInput
          height={16}
          placeholder="모델명을 입력해주세요"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
      </S.Title>

      {/* 증상 입력 */}
      <S.Contents>
        <S.Heading>제품에서 어떤 증상이 나타나는지 입력해주세요</S.Heading>
        <TextInput
          height={264}
          placeholder="증상을 입력해주세요"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
      </S.Contents>

      {/* 다음 버튼 */}
      <S.Footer>
        <Button
          height="48px"
          title="다음"
          backgroundColor="#2665FE"
          color="#fff"
          onClick={handleNext} // ✅ 서버 전송 후 이동
        />
      </S.Footer>
    </S.Container>
  );
}

export default WritePage;
