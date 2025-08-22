import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

export const Footer = ({ tab, setTab }) => {
  const homeGray = "/images/home-gray.svg";
  const homeBlue = "/images/home-blue.svg";
  const historyGray = "/images/history-gray.svg";
  const historyBlue = "/images/history-blue.svg";
  const recycleGray = "/images/recycle-gray.svg";
  const recycleBlue = "/images/recycle-blue.svg";
  const mypageGray = "/images/mypage-gray.svg";
  const mypageBlue = "/images/mypage-blue.svg";

  const navigate = useNavigate();

  return (
    <S.BottomNav>
      <S.BottomNavInner>
        <S.NavButton
          onClick={() => {
            setTab("main");
            navigate("/main");
          }}
          className={tab === "main" ? "active" : ""}
        >
          <img
            src={tab === "main" ? homeBlue : homeGray}
            width={20}
            height={20}
            alt="홈"
          />
          홈
        </S.NavButton>

        <S.NavButton
          onClick={() => {
            setTab("history");
            navigate("/history");
          }}
          className={tab === "history" ? "active" : ""}
        >
          <img
            src={tab === "history" ? historyBlue : historyGray}
            width={20}
            height={20}
            alt="결제내역"
          />
          결제내역
        </S.NavButton>

        <S.NavButton
          onClick={() => {
            setTab("market");
            navigate("/market");
          }}
          className={tab === "market" ? "active" : ""}
        >
          <img
            src={tab === "market" ? recycleBlue : recycleGray}
            width={20}
            height={20}
            alt="순환마켓"
          />
          순환마켓
        </S.NavButton>

        <S.NavButton
          onClick={() => {
            setTab("mypage");
            navigate("/mypage");
          }}
          className={tab === "mypage" ? "active" : ""}
        >
          <img
            src={tab === "mypage" ? mypageBlue : mypageGray}
            width={20}
            height={20}
            alt="마이페이지"
          />
          마이페이지
        </S.NavButton>
      </S.BottomNavInner>
    </S.BottomNav>
  );
};

export default Footer;
