import React, { useState } from "react";
import * as S from "./styled";
import "./complete.css";

const diagnose = "/images/diagnose.svg";
const upIcon = "/images/up.svg";
const downIcon = "/images/down.svg";

const Complete = () => {
  const [tab, setTab] = useState("전체");
  const [openCards, setOpenCards] = useState([]);

  const tabs = ["전체", "진행중", "완료", "만료/취소"];

  const data = [
    {
      id: 1,
      status: "접수중",
      date: "8월 22일 (금)",
      category: "휴대폰/태블릿",
      message: "업체에서 고객님의 견적서를 확인중입니다!",
      step: 1,
    },
    {
      id: 2,
      status: "결제대기",
      date: "8월 10일 (일)",
      category: "노트북/PC",
      message: "업체에서 고객님의 견적서를 확인중입니다!",
      step: 2,
    },
  ];

  const toggleCard = (id) => {
  setOpenCards((prev) =>
    prev.includes(id) 
      ? prev.filter((cardId) => cardId !== id) // 이미 열려있으면 닫기
      : [...prev, id] // 없으면 추가
  );
};

  return (
    <S.Container>
      <S.Header>
        <S.Title>예약완료</S.Title>
        <S.ReviewButton className="complete_card">리뷰관리</S.ReviewButton>
      </S.Header>

      <S.TabMenu>
        {tabs.map((t) => (
          <S.Tab key={t} active={tab === t} onClick={() => setTab(t)}>
            {t}
          </S.Tab>
        ))}
      </S.TabMenu>

      <S.CardList>
        {data.map((item) => (
          <S.Card key={item.id} className="complete_card">
            <S.CardHeader>
              <S.Status $status={item.status}>{item.status}</S.Status>
              <S.DetailButton>상세정보</S.DetailButton>
            </S.CardHeader>

            <S.TopBox>
                <S.ItemImage src={diagnose} alt="기기 이미지" />
                <S.Info>
                    <S.Date>{item.date}</S.Date>
                    <S.Category>{item.category}</S.Category>
                </S.Info>
            </S.TopBox>

            <S.ToggleButtonWrapper>
            <S.ToggleButton onClick={() => toggleCard(item.id)}>
                <img
                src={openCards.includes(item.id) ? upIcon : downIcon}
                alt="toggle"
                />
            </S.ToggleButton>
            </S.ToggleButtonWrapper>

            {/* 열렸을 때만 보이도록 */}
            {openCards.includes(item.id) && (
              <>
                {item.message && <S.Message>{item.message}</S.Message>}

                <S.Progress>
                  {["접수", "상담", "계약", "결제"].map((label, idx) => (
                    <React.Fragment key={label}>
                      <S.StepCircle active={item.step >= idx + 1}>
                        {label}
                      </S.StepCircle>
                      {idx < 3 && <S.StepLine />} 
                    </React.Fragment>
                  ))}
                </S.Progress>

                
                <S.DisabledButton>결제하기</S.DisabledButton>                
                <S.NoticeText>
                  접수 후 확인은 영업일 기준 1~2일 소요됩니다.
                </S.NoticeText>
              </>
            )}
          </S.Card>
          
        ))}
      </S.CardList>
    </S.Container>
  );
};

export default Complete;
