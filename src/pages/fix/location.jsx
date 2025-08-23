import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/common/buttons/PostButton";
import * as S from "./styled";
import SingleLineInput from "../../components/common/inputs/SingleLineInput";

function LocationPage() {
  const navigate = useNavigate();
  const routerLocation = useLocation(); // ✅ 라우터에서 전달된 state
  const { estimation, modelName } = routerLocation.state || {}; // WritePage → 전달받은 값

  const [location, setLocation] = useState(""); // 사용자가 입력하는 지역 값

  const handleNext = () => {
  if (!location) {
    alert("지역을 입력해주세요!");
    return;
  }

  const parts = location.trim().split(" ");
  if (parts.length < 3) {
    alert("주소 형식이 잘못되었습니다. (시 구 동 순서로 입력해주세요)");
    return;
  }

  const [si, gu, dong] = parts;

  navigate("/search", {
    state: { 
      estimation,
      modelName,
      si,
      gu,
      dong
    },
  });
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
        <SingleLineInput
          placeholder="위치를 입력해주세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </S.Title>

      {/* 다음 버튼 */}
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

export default LocationPage;
