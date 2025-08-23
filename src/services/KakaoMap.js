export async function getAddressFromCoords(lat, lon) {
  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_KEY}`, // 반드시 REST API 키
        },
      }
    );

    if (!res.ok) throw new Error("카카오 API 요청 실패");

    const data = await res.json();
    const addr = data.documents?.[0]?.address?.address_name 
              || data.documents?.[0]?.road_address?.address_name 
              || "주소 없음";
    return addr;
  } catch (err) {
    console.error("카카오 API 에러:", err);
    throw err;
  }
}
