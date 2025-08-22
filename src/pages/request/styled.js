import styled from "styled-components";

export const Container = styled.div`
  max-width: 412px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  font-family: Pretendard, sans-serif;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: transparent;
  color: #fff;
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  position: absolute;
  bottom: -40px; /* 헤더 아래 겹치게 */
  right: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #fff;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 30px 20px 20px; /* 프로필 이미지 공간 확보 */
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  background: #e6f0ff;
  color: #2665fe;
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;

  span {
    color: #2665fe;
  }
`;

export const SubInfo = styled.div`
  font-size: 14px;
  color: #2665FE;
  margin-top: 8px;

  .score {
    color: #CCCCCC;
    margin-right: 4px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #666666;
  margin-top: 8px;
  line-height: 1.5;
`;


export const ReviewSection = styled.div`
  padding: 16px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  span {
    font-size: 16px;
    font-weight: 600;
  }

  a {
    margin-left: 5px;
    color: #CCCCCC;
  }
`;

export const MoreButton = styled.button`
  border: none;
  background: none;
  color: #CCCCCC;
  font-size: 16px;
  cursor: pointer;
`;

export const ReviewSlider = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ReviewCard = styled.div`
  min-width: 240px;
  background: #fff;
  padding: 16px;
`;

export const ReviewTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const ReviewScore = styled.div`
  font-size: 14px;
  color: #2665fe;
  margin-bottom: 6px;

  span{
   color: #000000;
  }
`;

export const ReviewContent = styled.p`
  font-size: 13px;
  color: #444;
  line-height: 1.4;
`;

export const EstimateCard = styled.div`
  background: #fff;
  border-radius: 12px;
  margin: 16px;
  padding: 0 0 16px;
  overflow: hidden;
`;

export const RequestButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #2665fe;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const EstimateGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 16px;
`;

export const EstimateRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EstimateLabel = styled.span`
  font-size: 13px;
  color: #999;
  margin-bottom: 4px;
`;

export const EstimateValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

export const EstimatePrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;

export const NoticeText = styled.p`
  text-align: center;
  font-size: 13px;
  color: #999;
  margin-top: 8px;
`;
