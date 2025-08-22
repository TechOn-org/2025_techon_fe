import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import "./matching.css";

const match = "/images/match.svg";
const sampleImg = "/images/sample_building.svg";
const info = "/images/info.svg";

function Match() {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    const fetchCompanies = async () => {
      try {
        // ✅ 요청 파라미터 (임시값: 실제로는 location 페이지/estimate 페이지에서 받아와야 함)
        const params = new URLSearchParams({
          si: "서울시",
          gu: "동작구",
          dong: "상도동",
          cat: "MOB", // 카테고리: MOB, COM, APP, DEV
          radiusMeters: 2000, // 최대 반경
        });

        const res = await fetch("/api/matching?radiusMeters=2000")


        if (!res.ok) throw new Error("API 요청 실패");

        const data = await res.json();
        setCompanies(data);
      } catch (err) {
        console.error("업체 목록 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) return <p>업체 불러오는 중...</p>;

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
          <S.CompanyImage src={sampleImg} alt={c.bizesNm} />
          <S.CompanyName>{c.bizesNm}</S.CompanyName>
          <S.Rating>
            <S.StarIcon>★</S.StarIcon> ({c.indsScls})
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