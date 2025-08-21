import styled from "styled-components";

export const Container = styled.div`
  max-width: 412px;
  min-height: 100dvh;
  margin: 0 auto;
  padding-left: 20px; /* 왼쪽 */
  padding-right: 20px; /* 오른쪽 */
  display: flex;
  flex-direction: column;
  overscroll-behavior: none;
  background: #f9fafd;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 62px;
  gap: 30px;
`;

export const BackButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const StepText = styled.div`
  color: #2665fe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  .step {
    font-weight: 600;
  }
`;

export const Question = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;

  .highlight {
    color: #2563eb;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Card = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  border: 1px solid var(--light-text, #eeeeeeff);
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 가운데 정렬 */
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px); /* 위로 살짝 이동 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* 그림자 강조 */
  }

  &.selected {
    border: 2px solid #2665fe;

    p {
      color: #2665fe;
      font-weight: 600; /* 글씨 두껍게 하고 싶으면 추가 */
    }
  }

  img {
    width: 55%;
    height: auto;
    object-fit: contain;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #ccc;
    font-weight: 600;
    margin: 0;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  margin-bottom: 35px;
`;


//write페이지
export const Heading = styled.div`
    color: var(--light-text, #CCC);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 12px;
`;

export const Title = styled.div`
    color: var(--light-text, #CCC);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Contents = styled.div`
    color: var(--light-text, #CCC);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 25px;
`;