import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

function HistoryPage() {
  const [tab, setTab] = useState("history");
  const [nickname, setNickname] = useState("");
  const Laptop = "/images/picture.svg";

  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const historyData = [
    { id: 1, date: "8.22", company: "경성테크", category: "휴대폰/태블릿 수리", price: 330000, discount: "-5.5%" },
    { id: 2, date: "8.22", company: "순환마켓", category: "다채널 무선 수신 모듈", price: 14000, discount: "-3.3%" },
    { id: 3, date: "8.22", company: "순환마켓", category: "AHRS, 모션센서, 자이로3축", price: 94000, discount: "-5.5%" },
    { id: 4, date: "8.22", company: "엠케이모바일", category: "휴대폰/태블릿", price: 210000, discount: "-5.5%" },
    { id: 5, date: "8.22", company: "순환마켓", category: "리튬 폴리머 배터리 CR14250", price: 6450, discount: "-3.3%" },
  ];

  return (
    <S.Container>
      <Header />
      <S.Summary>
        <S.HeroText>
          <S.Subtitle>{nickname ? `${nickname}님,` : "회원님,"}</S.Subtitle>
          <S.Headline>
            총 <S.Primary>5건의 수리를</S.Primary>
            <br />
            진행했어요!
          </S.Headline>
        </S.HeroText>
        <S.HeroImage src={Laptop} alt="노트북 이미지" />
      </S.Summary>

      <S.FilterRow>
        <S.FilterBtn>전체 ▾</S.FilterBtn>
        <S.SearchBtn>
          <img src="/images/magnify.svg" alt="검색" />
        </S.SearchBtn>
      </S.FilterRow>

      <S.List>
        {historyData.map((item) => (
          <S.ListItem key={item.id}>
            <div className="left">
              <p className="date">{item.date}</p>
              <p className="company">{item.company}</p>
              <p className="category">{item.category}</p>
            </div>
            <div className="right">
              <p className="price">{item.price.toLocaleString()}원</p>
              <p className="discount">{item.discount}</p>
            </div>
          </S.ListItem>
        ))}
      </S.List>

      <Footer tab={tab} setTab={setTab} />
    </S.Container>
  );
}

export default HistoryPage;
