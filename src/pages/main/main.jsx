import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import LocationBtn from "../../components/location/LocationBtn";
import "./main.css";

// public/images/... 에 둔 이미지는 import 대신 경로 문자열로 사용
const gps = "/images/gps.svg";
const alarm ="/images/alarm_button.svg";
const Logo = "/images/LOGO.svg";
const Laptop = "/images/picture.svg";
const asus = "/images/asus.svg";
const repair = "/images/repair.svg";
const diagnose = "/images/diagnosis_icon.svg";
const search = "/images/search_icon.svg";
const market = "/images/market_icon.svg";
const magnify = "/images/magnify.svg";
const vector = "/images/Vector.svg";
const upcycling = "/images/upcycling.svg";
const handshake = "/images/handshake.svg";
const homeGray = "/images/home-gray.svg";
const homeBlue = "/images/home-blue.svg";
const historyGray = "/images/history-gray.svg";
const historyBlue = "/images/history-blue.svg";
const recycleGray = "/images/recycle-gray.svg";
const recycleBlue = "/images/recycle-blue.svg";
const mypageGray = "/images/mypage-gray.svg";
const mypageBlue = "/images/mypage-blue.svg";

const UPCYCLE_BANNERS = [
  { id: 1, title: "업사이클링\n제품 추천드립니다!", img: "/images/upcycle.png", bg: "#f59e0b" }, // 주황
  { id: 2, title: "업사이클링\n제품 추천드립니다!", img: "/images/upcycle.png", bg: "#3b5bfd" }, // 블루
  { id: 3, title: "업사이클링\n제품 추천드립니다!", img: "/images/upcycle.png", bg: "#111827" }, // 다크
  { id: 4, title: "업사이클링\n제품 추천드립니다!", img: "/images/upcycle.png", bg: "#8b5cf6" }, // 퍼플
];

export default function MainPage() {
  const [tab, setTab] = useState("main");
  const navigate = useNavigate();

  return (
    <S.Wrap>
      {/* ===== Header ===== */}
      <Header />
      <S.Content>
        {/* ===== 결제 알림 배너 ===== */}
        <S.HeroCard>
          <S.HeroText>
            <S.Subtitle>김숭실님,</S.Subtitle>
            <S.Headline>
              총 <S.Primary>290,278원</S.Primary>
              <br />
              결제건이 있습니다
            </S.Headline>
          </S.HeroText>
          <S.HeroImage src={Laptop} alt="노트북 이미지" />
        </S.HeroCard>

        {/* ASUS 혜택 배너 */}
        <S.PromoCard className="card">
          <S.PromoLogo>
            <img src={asus} alt="ASUS 로고" />
          </S.PromoLogo>
          <S.PromoBody>
            <S.PromoTitle>ASUS 제품 수리비 10% 할인</S.PromoTitle>
            <S.PromoDesc>
              고장난 ASUS, 성능은 되찾고 비용은 아끼세요!
            </S.PromoDesc>
          </S.PromoBody>
        </S.PromoCard>

        {/* 수리 진행 상태 */}
        <S.NotificationCard className="card">
        <S.NotiTextCol>
          <S.NotiTitle>수리업체</S.NotiTitle>
          <S.NotiStatus>수리 진행 중</S.NotiStatus>
          <S.NotiMeta>2025.08.18(월) 오후 14:00</S.NotiMeta>
          <S.NotiDesc>업체에서 수리를 진행중입니다.</S.NotiDesc>
        </S.NotiTextCol>

        <S.NotiIconWrap>
          <img src={repair} alt="수리 진행 아이콘" />
        </S.NotiIconWrap>
      </S.NotificationCard>

      {/* 진행할 서비스 선택 */}
      <S.ServiceSection className="card">
        <S.ServiceHeader>진행할 서비스를 선택해주세요</S.ServiceHeader>

        <S.ServiceList>
          <S.ServiceItem>
            <S.ServiceIcon src={diagnose} alt="제품 진단하기"/>
            <S.ServiceTexts>
              <S.ServiceCaption>AI가 알려주는 제품 진단서</S.ServiceCaption>
              <S.ServiceHeading onClick={() => navigate("/select")}>
                제품 진단하기
              </S.ServiceHeading>
            </S.ServiceTexts>
          </S.ServiceItem>

          <S.ServiceItem>
            <S.ServiceIcon src={search} alt="전문가 매칭" />
            <S.ServiceTexts>
              <S.ServiceCaption>나에게 딱 맞는 전문가 찾기</S.ServiceCaption>
              <S.ServiceHeading onClick={() => navigate("/match")}>
                전문가 매칭</S.ServiceHeading>
            </S.ServiceTexts>
          </S.ServiceItem>

          <S.ServiceItem>
            <S.ServiceIcon src={market} alt="순환 마켓" />
            <S.ServiceTexts>
              <S.ServiceCaption>버려지는 부품 재활용하기</S.ServiceCaption>
              <S.ServiceHeading>순환 마켓</S.ServiceHeading>
            </S.ServiceTexts>
          </S.ServiceItem>
        </S.ServiceList>


      </S.ServiceSection>

      {/* 하단 필 버튼 2개 */}
      <S.PillRow>
        <S.PillButton className="card">
          내 주변 업체 둘러보기
          <img src={magnify} alt="돋보기 아이콘" width={18} height={18} />
        </S.PillButton>
        <S.PillButton className="card">
          중계 수수료 계산하기 
          <img src={vector} alt="계산기 아이콘" width={18} height={18} />
        </S.PillButton>
      </S.PillRow>

        {/* 업사이클링 제품 모아보기 - 가로 스크롤 */}
        <S.Section>
          <S.RowBetween>
            <S.SectionTitle>업사이클링 제품 모아보기</S.SectionTitle>
            <S.SmallLink>전체보기</S.SmallLink>
          </S.RowBetween>

          <S.HorizontalScroll role="list">
            {UPCYCLE_BANNERS.map((b) => (
              <S.UpcycleCard key={b.id} role="listitem" $bg={b.bg}>
                <S.UpcycleTitle>
                  {b.title.split("\n").map((t, i) => (
                    <div key={i}>{t}</div>
                  ))}
                </S.UpcycleTitle>

                <S.UpcycleThumbCircle>
                  <img src={upcycling} alt="업사이클링 추천 썸네일" />
                </S.UpcycleThumbCircle>
              </S.UpcycleCard>
            ))}
          </S.HorizontalScroll>


        </S.Section>
        {/* 업사이클링 섹션 아래 광고 배너 */}
        <S.AdBanner>
          <S.AdText>
            <S.AdTitle>
              LG 제품
              <br />
              중개수수료 할인
            </S.AdTitle>
            <S.AdSubtitle>
              오직 <S.Highlight>Tech</S.Highlight><S.Highlighting>On</S.Highlighting> 사용자에게
            </S.AdSubtitle>
          </S.AdText>

          <S.AdThumb className="ad-thumb" src={handshake} alt="제휴 혜택" />
          
        </S.AdBanner>


        <S.BottomSpacer />
      </S.Content>
      

      <S.BottomNav>
        <S.BottomNavInner>
          <Footer tab={tab} setTab={setTab} />
        </S.BottomNavInner>
      </S.BottomNav>

    </S.Wrap>
  );
}
