import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

const BANNER_IMG = "/images/market.svg"; // 배너 아이콘
const PRODUCTS = [
  { id: 1, img: "/images/item1.svg", name: "Wi-Fi & 블루투스 개발 보드", price: 11700 },
  { id: 2, img: "/images/item2.svg", name: "리튬 폴리머 배터리", price: 6450 },
  { id: 3, img: "/images/item3.svg", name: "마이크로비트 전용 키트", price: 25000 },
  { id: 4, img: "/images/item4.svg", name: "라즈베리파이 5", price: 119500 },
];

function MarketPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("market");
  const [activeTab, setActiveTab] = useState("home");

    const [nickname, setNickname] = useState("");


    useEffect(() => {
        const savedNickname = localStorage.getItem("nickname");
        if (savedNickname) {
          setNickname(savedNickname);
        }
      }, []);


  return (
    <S.Container>
      <Header />

      {/* 배너 */}
      <S.Banner>
        <S.BannerText>
          <strong>{nickname ? `${nickname}님` : "회원님,"}을 위한 포인트</strong>
          <span>알림 받아보세요</span>
        </S.BannerText>
        <img src={BANNER_IMG} alt="배너" />
      </S.Banner>

      {/* 탭 메뉴 */}
      <S.Tabs>
        <S.Tab active={activeTab === "home"} onClick={() => setActiveTab("home")}>
          마켓 홈
        </S.Tab>
        <S.Tab active={activeTab === "new"} onClick={() => setActiveTab("new")}>
          새 제품
        </S.Tab>
        <S.Tab active={activeTab === "upcycle"} onClick={() => setActiveTab("upcycle")}>
          업사이클링
        </S.Tab>
        <S.Tab active={activeTab === "share"} onClick={() => setActiveTab("share")}>
          재료/나눔
        </S.Tab>
      </S.Tabs>

      {/* 상품 리스트 */}
        <S.Grid>
          {PRODUCTS.map((item) => (
            <S.Card 
              key={item.id} 
              onClick={() => navigate(`/marketdetail${item.id}`)}
            >
              <div className="img-wrap">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="text-wrap">
                <p className="name">{item.name}</p>
                <p className="price">{item.price.toLocaleString()}원</p>
              </div>
            </S.Card>
          ))}
        </S.Grid>



      <Footer tab={tab} setTab={setTab} />
    </S.Container>
  );
}

export default MarketPage;
