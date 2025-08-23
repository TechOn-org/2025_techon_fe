import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styled";
import "../matching/matching.css";

const match = "/images/match.svg";
const info = "/images/info.svg";

// ✅ 난수 함수
const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// ✅ 소수점 한 자리 난수 (별점용)
const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(1);

function MatchAPI() {
  const navigate = useNavigate();
  const routerLocation = useLocation();

  // LocationPage → SearchPage → EstimatePage → MatchPage 로 이어서 전달된 값
  const { estimation, modelName, si, gu, dong } = routerLocation.state || {};

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        if (!si || !gu || !dong) {
          console.error("지역 정보 없음:", si, gu, dong);
          setLoading(false);
          return;
        }

        // 프록시(/api) 기반 요청
        const res = await fetch(
          `/api/matching/nearby?si=${encodeURIComponent(si)}&gu=${encodeURIComponent(gu)}&dong=${encodeURIComponent(dong)}&cat=${estimation?.category || "MOB"}&radiusMeters=2000`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (!res.ok) throw new Error("API 요청 실패");

        const data = await res.json();
        console.log("업체 데이터:", data);

        // 추천 업체 3개만 가져오기
        const rankedCompanies = data.slice(0, 3).map((c, idx) => {
          if (idx === 0) {
            return {
              ...c,
              rating: getRandomFloat(4.3, 4.8),
              done: getRandom(300, 400),
              reviews: getRandom(38, 60),
            };
          }
          if (idx === 1) {
            return {
              ...c,
              rating: getRandomFloat(4.0, 4.3),
              done: getRandom(150, 250),
              reviews: getRandom(24, 39),
            };
          }
          return {
            ...c,
            rating: getRandomFloat(3.8, 4.0),
            done: getRandom(50, 150),
            reviews: getRandom(8, 24),
          };
        });

        setCompanies(rankedCompanies);
      } catch (err) {
        console.error("업체 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [si, gu, dong, estimation]);

  if (loading) return <p>업체 불러오는 중...</p>;

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={() => navigate("/estimate")}>←</S.BackButton>
      </S.Header>

      <S.MatchBox>
        <img src={match} alt="매칭 아이콘" />
        <S.MatchTextBox>
          <S.SubTitle>고객님에게 딱 맞는</S.SubTitle>
          <S.MainTitle>업체 추천 해드릴게요!</S.MainTitle>
        </S.MatchTextBox>
      </S.MatchBox>

      <S.AgentText>
        맞춤 업체 모아보기 <S.BlueText>{companies.length}</S.BlueText>
      </S.AgentText>

      <S.InfoBox>
        <S.InfoIcon src={info} alt="info icon" />
        <S.InfoSubText>원하는 업체가 있으면 상세보기를 눌러주세요</S.InfoSubText>
      </S.InfoBox>

      <S.CardList>
        {companies.map((c, idx) => (
          <S.CompanyCard
            key={c.bizesId}
            className="matching_card"
            onClick={() => navigate("/request")}
          >
            <S.RankBadge>추천순위 {idx + 1}위</S.RankBadge>
            <S.CompanyName>{c.bizesNm}</S.CompanyName>
            <S.CompanyAddr>{c.rdnmAdr}</S.CompanyAddr>
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

export default MatchAPI;
