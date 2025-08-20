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
export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;