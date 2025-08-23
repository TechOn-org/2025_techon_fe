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

export const DiagnoseBox = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  gap: 10px;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const DiagnoseTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  color: #888;
`;

export const MainTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #000;
`;

export const Title = styled.div`
  font-size: 14px;
  color: #8a8a8a;
`;

export const ResultTitle = styled.h2`
  margin: 16px 0;
  font-size: 18px;
  font-weight: bold;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Info = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 12px;
  font-color: #CCCCCC;
  font-size: 12px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

export const InfoBox = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 8px;

  .label {
    color: #cccccc;  
    font-size: 14px;
`;

export const PriceBox = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
`;

export const Fee = styled.div`
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Label = styled.span`
  color: #a0a0a0;   /* 연한 회색 */
  font-size: 14px;
`;

export const Value = styled.span`
  font-size: 16px;
  font-weight: ${props => (props.bold ? "600" : "400")};
  color: #000;
`;

export const Highlight = styled.span`
  color: #2665FE;   /* 파란색 */
  font-weight: ${props => (props.bold ? "600" : "400")};
`;