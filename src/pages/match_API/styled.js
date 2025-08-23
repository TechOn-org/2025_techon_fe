import styled from "styled-components";

export const Container = styled.div`
  max-width: 412px;
  margin: 0 auto;
  padding: 60px 16px 20px;
  background-color: #f9fafb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BackButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const MatchBox = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  gap: 10px;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const MatchTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AgentText = styled.p`
  margin-top: 24px;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

export const CompanyAddr = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0 8px;
`;

export const BlueText = styled.span`
  color: #2665FE;
  font-weight: bold;
  font-size: 16px;
`;

export const SubTitle = styled.span`
  font-size: 12px;
  color: #888;
`;

export const MainTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #000;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  background: #f0f8ff; /* 연한 파란 배경 */
  border-radius: 8px;
  padding: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const InfoIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

export const InfoSubText = styled.div`
  color: #2665FE;
  font-size: 14px;
`;

export const InfoText = styled.p`
  margin-top: 24px;
  font-size: 16px;
  text-align: center;
  color: #CCCCCC;
`;


export const CardList = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 12px 4px 20px;
  scroll-snap-type: x mandatory;   /* 스크롤 시 카드 단위로 딱 맞게 */
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CompanyCard = styled.div`
  position: relative; 
  flex: 0 0 240px;
  padding: 40px 16px 20px;  
  text-align: center;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankBadge = styled.div`
  position: absolute;
  top: 12px;  
  left: 12px;
  background: #e8f0ff;
  color: #2665fe;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 2;   
`;


export const Card = styled.div`
  width: 200px;
  padding: 16px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;


export const CompanyImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 40px 0 12px;
`;

export const CompanyName = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const Rating = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #eee;
  margin-top: 12px;
  padding-top: 12px;
`;

export const InfoLabel = styled.div`
  font-size: 12px;
  color: #999;
`;

export const InfoValue = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 1px;
  background: #eee;
`;

export const StarIcon = styled.span`
  color: #2665fe;
  font-size: 24px;
`;


export const CompanyStats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto; 
  padding-top: 12px;
  border-top: 1px solid #eee;

  span {
    flex: 1;
    font-size: 14px;
    color: #CCCCCC;

    &:first-child {
      border-right: 1px solid #eee;
    }

    strong {
      display: block;
      font-size: 16px;
      font-weight: 700;
      color: #000;
      margin-top: 4px;
    }
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  margin-top: auto;
  background: #2665FE;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  height: 60px;

  &:hover {
    background: #1d4ed8;
  }
`;