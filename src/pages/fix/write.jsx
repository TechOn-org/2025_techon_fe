import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextInput from "../../components/common/inputs/TextInput";
import SingleLineInput from "../../components/common/inputs/SingleLineInput";
import Button from "../../components/common/buttons/PostButton";
import * as S from "./styled";
import axios from "axios";

function WritePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || {}; // ✅ SelectPage에서 받은 category

  const [modelName, setModelName] = useState("");
  const [issue, setIssue] = useState("");

  const handleNext = async () => {
    if (!modelName || !issue) {
      alert("모델명과 증상을 모두 입력해주세요!");
      return;
    }

    const payload = {
      category,
      modelName,
      text: issue, // 서버 요구사항에 맞게 필드명 text
    };

    try {
      const response = await axios.post("/api/estimation", payload);

      console.log("서버 응답:", response.data);

      // ✅ Estimate 페이지로 응답 데이터 전달
      navigate("/estimate", { 
        state: { 
          estimation: response.data, 
          modelName // 내가 입력한 값 같이 전달
        } 
      });

    } catch (error) {
      console.error("에러 발생:", error.response || error.message);
      alert(error.response?.data?.message || "서버 통신 중 문제가 발생했습니다.");
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
          <img src="/images/backbtn.svg" alt="logo" style={{ width: "20px" }} />
        </S.BackButton>
        <S.StepText><span className="step">2/3</span></S.StepText>
      </S.Header>

      <S.Question>
        수리할 제품 <span className="highlight">모델명</span>과 <br />
        어떤 <span className="highlight">증상</span>이 나타나는지 적어주세요!
      </S.Question>

      <S.Title>
        <S.Heading>제품 모델명을 입력해주세요</S.Heading>
        <SingleLineInput
          placeholder="모델명을 입력해주세요"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
      </S.Title>

      <S.Contents>
        <S.Heading>제품에서 어떤 증상이 나타나는지 입력해주세요</S.Heading>
        <TextInput
          height={264}
          placeholder="증상을 입력해주세요"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
      </S.Contents>

      <S.Footer>
        <Button
          height="48px"
          title="다음"
          backgroundColor="#2665FE"
          color="#fff"
          onClick={handleNext}
        />
      </S.Footer>
    </S.Container>
  );
}

export default WritePage;
