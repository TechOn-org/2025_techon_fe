import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ useLocation import 추가
import * as S from "./styled";
import "./matching.css";


const match = "/images/match.svg";
const info = "/images/info.svg";
// const estimation = state?.estimation;
// const modelName = state?.modelName;

// ✅ 업체 이미지와 이름 매핑
const BUILDINGS = [
  { img: "/images/building_1.svg", name: "사운드리서치" },
  { img: "/images/building_2.svg", name: "아이폰에이에스센터장승배기점" },
  { img: "/images/building_3.svg", name: "현재정보통신" },
  { img: "/images/building_4.svg", name: "경성테크" },
  { img: "/images/building_5.svg", name: "동작홈마스터" },
];


// // ✅ 시/도 보정 함수 (서울/부산 등 다양한 경우 대응)
// function normalizeSi(si) {
//   // 카카오에서 "서울"만 주는 경우
//   if (si === "서울" || si === "서울시") return "서울특별시";
//   if (si === "부산" || si === "부산시") return "부산광역시";
//   if (si === "대구" || si === "대구시") return "대구광역시";
//   if (si === "인천" || si === "인천시") return "인천광역시";
//   if (si === "광주" || si === "광주시") return "광주광역시";
//   if (si === "대전" || si === "대전시") return "대전광역시";
//   if (si === "울산" || si === "울산시") return "울산광역시";
//   if (si === "세종" || si === "세종시") return "세종특별자치시";

//   // 도 단위 (경기도, 강원도 등) 그대로 리턴
//   if (si.endsWith("도")) return si;

//   // 기본 fallback (변환 실패 시 그대로)
//   return si;
// }


// ✅ 난수 발생 함수
const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function Match() {
  const navigate = useNavigate();
  const { state } = useLocation();   // ✅ 컴포넌트 안에서 호출
  const estimation = state?.estimation;
  const modelName = state?.modelName;

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    // API 안 쓰고 더미 데이터 생성
    const fetchDummyCompanies = () => {
      const rankedCompanies = [0, 1, 2].map((idx) => {
        const building = BUILDINGS[idx]; // 순서대로 이름/이미지 사용
        if (idx === 0) {
          return {
            ...building,
            rating: 4.8,
            done: getRandom(300, 400),
            reviews: getRandom(38, 60),
          };
        }
        if (idx === 1) {
          return {
            ...building,
            rating: 4.5,
            done: getRandom(150, 250),
            reviews: getRandom(24, 39),
          };
        }
        return {
          ...building,
          rating: 4.2,
          done: getRandom(50, 150),
          reviews: getRandom(8, 24),
        };
      });

      setCompanies(rankedCompanies);
      setLoading(false);
    };

    fetchDummyCompanies();
  }, []);

  if (loading) return <p>업체 불러오는 중...</p>;

//   const BASE_URL = "https://3d5e54557df7.ngrok-free.app";

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const kakaoKey = process.env.REACT_APP_KAKAO_REST_KEY;

//         console.log("환경변수 확인:", process.env);
//         console.log("카카오 키:", process.env.REACT_APP_KAKAO_REST_KEY);

//         if (!navigator.geolocation) {
//           console.error("GPS 지원 안됨");
//           return;
//         }

//         navigator.geolocation.getCurrentPosition(async (pos) => {
//           const { latitude, longitude } = pos.coords;

//           try {
//             // 카카오 API 좌표 → 주소 변환
//             const kakaoRes = await fetch(
//               `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
//               {
//                 headers: {
//                   Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_KEY}`,
//                 },
//               }
//             );

//             if (!kakaoRes.ok) throw new Error("카카오 API 요청 실패");

//             const kakaoData = await kakaoRes.json();
//             const addr = kakaoData.documents[0].address;

//             // ✅ 보정된 주소 사용
//             const si = normalizeSi(addr.region_1depth_name);
//             const gu = addr.region_2depth_name;
//             const dong = addr.region_3depth_name;

//             console.log("주소:", si, gu, dong);

//             // 서버 업체 API 호출
//             const res = await fetch(
//             `${BASE_URL}/api/matching/nearby?si=${encodeURIComponent(si)}&gu=${encodeURIComponent(gu)}&dong=${encodeURIComponent(dong)}&cat=MOB&radiusMeters=2000`,
//             {
//               headers: {
//                 "ngrok-skip-browser-warning": "true", // ✅ 이거 추가!
//               },
//             }
//           );

//             if (!res.ok) throw new Error("API 요청 실패");

//             const data = await res.json();

//             // 추천 업체 3개만 가져오기 + 난수 값 적용
//             const rankedCompanies = data.slice(0, 3).map((c, idx) => {
//               if (idx === 0) {
//                 return {
//                   ...c,
//                   rating: 4.8,
//                   done: getRandom(300, 400),
//                   reviews: getRandom(38, 60),
//                 };
//               }
//               if (idx === 1) {
//                 return {
//                   ...c,
//                   rating: 4.5,
//                   done: getRandom(150, 250),
//                   reviews: getRandom(24, 39),
//                 };
//               }
//               return {
//                 ...c,
//                 rating: 4.2,
//                 done: getRandom(50, 150),
//                 reviews: getRandom(8, 24),
//               };
//             });

//             setCompanies(rankedCompanies);
//           } catch (err) {
//             console.error("주소 변환 또는 업체 불러오기 실패:", err);
//           } finally {
//             setLoading(false);
//           }
//         });
//       } catch (err) {
//         console.error("위치 정보 불러오기 실패:", err);
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   if (loading) return <p>업체 불러오는 중...</p>;

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
        맞춤 업체 모아보기 <S.BlueText>{companies.length}</S.BlueText>
      </S.AgentText>

      <S.InfoBox>
        <S.InfoIcon src={info} alt="info icon" />
        <S.InfoSubText>원하는 업체가 있으면 상세보기를 눌러주세요</S.InfoSubText>
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
                ...c,          // 업체 정보 (name, img, rating 등)
                rank: idx + 1, // 추천순위
                estimation,    // ✅ Estimate에서 넘어온 데이터 그대로 전달
                modelName,     // 모델명도 같이
              },
            })
          }
        >
            <S.RankBadge>추천순위 {idx + 1}위</S.RankBadge>
            <S.CompanyImage src={c.img} alt={c.name} />
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
