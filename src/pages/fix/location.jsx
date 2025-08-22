import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/PostButton";
import * as S from "./styled";

function LocationPage() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleNext = async () => {
    if (!location) {
      alert("지역을 입력해주세요!");
      return;
    }

    const payload = {
      location,
    };

    try {
      const response = await fetch("http://localhost:8080/api/repairs/location", {
        // 👉 실제 서버 API 주소로 교체
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

      // 성공 시 검색 페이지로 이동
      navigate("/search");
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
          placeholder="지역을 입력해주세요"
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
          onClick={handleNext} // ✅ 서버 전송 후 이동
        />
      </S.Footer>
    </S.Container>
  );
}

export default LocationPage;
