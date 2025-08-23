import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styled";
import "../matching/matching.css";

const match = "/images/match.svg";
const info = "/images/info.svg";

const BUILDINGS = [
  { img: "/images/building_1.svg"},
  { img: "/images/building_2.svg"},
  { img: "/images/building_3.svg"},
  { img: "/images/building_4.svg"},
  { img: "/images/building_5.svg"},
];

// ✅ 배열 셔플 함수 (Fisher-Yates)
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// 난수 함수들
const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(1);

function MatchAPI() {
  const navigate = useNavigate();
  const routerLocation = useLocation();

  // LocationPage → SearchPage → EstimatePage → MatchPage 로 이어서 전달된 값
  const { estimation, modelName, si, gu, dong } = routerLocation.state || {};

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ 최초에만 셔플된 이미지 세트 고정
  const shuffledBuildingsRef = useRef(shuffleArray(BUILDINGS).slice(0, 3));

  // ✅ 업체 데이터 불러오기
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        if (!si || !gu || !dong) {
          console.error("지역 정보 없음:", si, gu, dong);
          setLoading(false);
          return;
        }

        const res = await fetch(
          `/api/matching/nearby?si=${encodeURIComponent(
            si
          )}&gu=${encodeURIComponent(gu)}&dong=${encodeURIComponent(
            dong
          )}&cat=${estimation?.category || "MOB"}&radiusMeters=2000`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (!res.ok) throw new Error("API 요청 실패");

        const data = await res.json();
        console.log("업체 데이터:", data);

        // ✅ 최초 셔플된 이미지 세트 고정 사용
        const rankedCompanies = data.slice(0, 3).map((c, idx) => {
          const building = shuffledBuildingsRef.current[idx]; // 고정된 이미지 사용
          if (idx === 0) {
            return {
              ...c,
              img: building.img,
              rating: getRandomFloat(4.3, 4.8),
              done: getRandom(300, 400),
              reviews: getRandom(38, 60),
            };
          }
          if (idx === 1) {
            return {
              ...c,
              img: building.img,
              rating: getRandomFloat(4.0, 4.3),
              done: getRandom(150, 250),
              reviews: getRandom(24, 39),
            };
          }
          return {
            ...c,
            img: building.img,
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


  return (
    <S.Container>
      {/* 헤더 */}
      <S.Header>
        <S.BackButton onClick={() => navigate("/estimate")}>←</S.BackButton>
      </S.Header>

      {/* 매칭 아이콘 */}
      <S.MatchBox>
        <img src={match} alt="매칭 아이콘" />
        <S.MatchTextBox>
          <S.SubTitle>고객님에게 딱 맞는</S.SubTitle>
          <S.MainTitle>업체 추천 해드릴게요!</S.MainTitle>
        </S.MatchTextBox>
      </S.MatchBox>

      {/* 업체 개수 */}
      <S.AgentText>
        맞춤 업체 모아보기 <S.BlueText>{companies.length}</S.BlueText>
      </S.AgentText>

      {/* 안내 박스 */}
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
            key={idx}
            className="matching_card"
            onClick={() =>
              navigate("/request", {
                state: {
                  ...c,
                  name: c.bizesNm,
                  rank: idx + 1,
                  estimation,
                  modelName,
                  si,
                  gu,
                  dong,
                },
              })
            }
          >

            <S.RankBadge>추천순위 {idx + 1}위</S.RankBadge>
            <S.CompanyImage src={c.img} alt={`업체${idx + 1}`} />
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

      {/* 버튼 */}
      <S.InfoText>원하는 업체가 아니신가요?</S.InfoText>
      <S.Button onClick={() => navigate("/select")}>
        새로운 견적 받기
      </S.Button>
    </S.Container>
  );
}

export default MatchAPI;