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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const ReviewButton = styled.button`
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  color: #CCCCCC;
`;

export const TabMenu = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const Tab = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  color: ${(props) => (props.active ? "#2665FE" : "#666")};
  cursor: pointer;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Status = styled.span`
  display: inline-block;
  background: #e6f0ff;
  color: #2665fe;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  color: "#2665FE";
`;

export const DetailButton = styled.span`
  font-size: 12px;
  color: #999;
  cursor: pointer;
`;

export const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;  /* 가로 가운데 정렬 */
  margin-top: 8px;          /* 카드 내용과의 간격 */
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #999;
  padding: 0;
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Info = styled.div`
  margin-bottom: 10px;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Date = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const Category = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const Message = styled.p`
  background: #eef5ff;
  color: #2665fe;
  padding: 3px 12px;
  font-size: 14px;
  font-weight: semi-bold;
  border-radius: 8px;
  margin: 10px auto;
  text-align: center;
  width: fit-content;
  max-width: 80%;
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px auto;
  max-width: 70%; 
`;

export const StepCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#E4F2FF" : "#eee")};
  color: ${(props) => (props.active ? "#2665FE" : "#999")};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StepLine = styled.div`
  flex: 1;
  border-top: 2px dashed #d9d9d9;
  margin: 0 4px; 
`;

export const DisabledButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #eee;
  color: #aaa;
  font-size: 14px;
`;

export const NoticeText = styled.p`
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color: #999;
`;

export const BackHome = styled.p`
  color: var(--light-text, #CCC);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;