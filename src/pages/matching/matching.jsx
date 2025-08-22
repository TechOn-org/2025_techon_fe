import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import "./matching.css";

const match = "/images/match.svg";
const sampleImg = "/images/sample_building.svg";
const info = "/images/info.svg";

function Match() {
    const navigate = useNavigate();

    // 업체 목록 상태 관리
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
      // 🚨 백엔드 API 연결 시 수정
      // 예시: fetch("/api/match/companies")
      //   .then(res => res.json())
      //   .then(data => setCompanies(data))
      //   .catch(err => console.error(err));

      // --- 임시 더미 데이터 (백엔드 붙기 전까지) ---
      setCompanies([
        { id: 1, name: "경성테크", rating: 4.8, done: 355, reviews: 59 },
        { id: 2, name: "에이스리페어", rating: 4.5, done: 280, reviews: 41 },
        { id: 3, name: "스마트수리센터", rating: 4.7, done: 300, reviews: 52 },
      ]);
    }, []);

  return (
    <S.Container>
      {/* 헤더 */}
       <S.Header>
        <S.BackButton onClick={() => navigate("/estimate")}>←</S.BackButton>
      </S.Header>

      {/* 아이콘 + 텍스트 */}
      <S.MatchBox>
        <img src={match} alt="매칭 아이콘" />
        <S.MatchTextBox>
          <S.SubTitle>고객님에게 딱 맞는</S.SubTitle>
          <S.MainTitle>업체 추천 해드릴게요!</S.MainTitle>
        </S.MatchTextBox>
      </S.MatchBox>

      {/* 안내문 */}
      <S.AgentText>
      맞춤 업체 모아보기{" "}
       <S.BlueText>{companies.length}</S.BlueText>
      </S.AgentText>

      <S.InfoBox>
        <S.InfoIcon src={info} alt="info icon" />
        <S.InfoSubText>
          원하는 업체가 있으면 상세보기를 눌러주세요
        </S.InfoSubText>
      </S.InfoBox>

      {/* 업체 카드 리스트 */}
      <S.CardList>
      {companies.map((c, idx) => (
        <S.CompanyCard
          key={c.id}
          className="matching_card"
          onClick={() => navigate("/request")}
        >
          <S.RankBadge>추천순위 {idx + 1}위</S.RankBadge>
          <S.CompanyImage src={c.imageUrl || sampleImg} alt={c.name} />
          <S.CompanyName>{c.name}</S.CompanyName>
          <S.Rating>
            <S.StarIcon>★</S.StarIcon> ({c.rating})
          </S.Rating>
          <S.CompanyStats>
            <span>
              수리 완료<strong>{c.done}건</strong>
            </span>
            <span>
              리뷰<strong>{c.reviews}개</strong>
            </span>
          </S.CompanyStats>
        </S.CompanyCard>
      ))}
    </S.CardList>
    
    <S.InfoText>원하는 업체가 아니신가요?</S.InfoText>

      <S.Button onClick={() => navigate("/select")}>
        새로운 견적 받기
      </S.Button>
   </S.Container>
  );
}

export default Match;