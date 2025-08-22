// src/services/kakaoMap.js
export async function getAddressFromCoords(latitude, longitude) {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

  const res = await fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
    {
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
    }
  );

  if (!res.ok) throw new Error("카카오 API 요청 실패");

  const data = await res.json();

  if (!data.documents || data.documents.length === 0) {
    throw new Error("주소 정보 없음");
  }

  const addr = data.documents[0].address;
  return `${addr.region_1depth_name} ${addr.region_2depth_name} ${addr.region_3depth_name}`;
}
