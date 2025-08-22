export const getAddress = async (lat, lng) => {
  const response = await fetch(
    `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${lng},${lat}&orders=addr&output=json`,
    {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVER_CLIENT_ID,
        "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVER_CLIENT_SECRET,
      },
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API 호출 실패: ${errText}`);
  }

  return response.json();
};
