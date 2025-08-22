import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/buttons/PostButton";
import * as S from "./styled";

function SelectPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null); // 선택된 카드 인덱스 저장

  const cards = [
    { id: 0, img: "/images/select_phone.svg", label: "휴대폰/태블릿" },
    { id: 1, img: "/images/select_laptop.svg", label: "노트북/PC" },
    { id: 2, img: "/images/select_micro.svg", label: "생활가전" },
    { id: 3, img: "/images/select_game.svg", label: "주변기기/기타" },
  ];

  // 서버 전송 함수
  const handleNext = async () => {
    if (selected === null) {
      alert("제품을 선택해주세요!");
      return;
    }

    const selectedCard = cards.find((card) => card.id === selected);

    try {
      const response = await fetch("http://localhost:8080/api/cards", {
        // 👉 실제 백엔드 주소/엔드포인트로 교체하세요
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedCard),
      });

      if (!response.ok) {
        throw new Error("서버 전송 실패");
      }

      const result = await response.json();
      console.log("서버 응답:", result);

      // 성공 시 다음 페이지로 이동
      navigate("/write");
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
          <span className="step">1/3</span>
        </S.StepText>
      </S.Header>

      {/* 질문 */}
      <S.Question>
        어떤 <span className="highlight">제품</span>을 <br />
        수리하실지 선택해주세요.
      </S.Question>

      {/* 선택 카드 */}
      <S.Grid>
        {cards.map((card) => (
          <S.Card
            key={card.id}
            onClick={() => setSelected(card.id)}
            className={selected === card.id ? "selected" : ""}
          >
            <img src={card.img} alt={card.label} />
            <p>{card.label}</p>
          </S.Card>
        ))}
      </S.Grid>

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

export default SelectPage;
