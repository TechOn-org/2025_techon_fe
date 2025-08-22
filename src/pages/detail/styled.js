import styled from "styled-components";

export const Container = styled.div`
  max-width: 412px;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overscroll-behavior: none;
  background: #f9fafd;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: #000;
  font-weight: 500;
  margin: 0;
`;

export const Headline = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
`;

export const Primary = styled.span`
  color: #2665fe;
  font-size: 24px;
`;

export const HeroImage = styled.img`
  width: 100px;
  height: auto;
  flex-shrink: 0;
`;

export const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const FilterBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
`;

export const SearchBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const List = styled.div`
  flex: 1;
  padding: 0;
  margin-top: 12px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #eee;

  .date {
    font-size: 12px;
    margin: 0;
    color: #888;
  }
  .company {
    font-size: 16px;
    font-weight: bold;  
    margin: 0;
  }
  .category {
    font-size: 12px;
    color: #aaa;
    margin: 0;
  }
  .price {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    margin-top: 7px;
  }
  .discount {
    font-size: 12px;
    color: #888;
    margin: 0;
    text-align: right;
}

`;

//mypage
export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 20px;

  .id {
    font-size: 12px;
    margin: 0;
    margin: 5px 0;
    color: #666;
  }
  .name {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Info = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 50%;
  margin-right: 12px;
`;


export const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px 0;
  margin: 12px 20px 20px;
  border-radius: 8px;
background: #FFF;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 20px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
    color: #888;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px 0;
  margin: 0 20px 12px;
  border-radius: 8px;
background: #FFF;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
`;

export const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
  }
  span {
    font-size: 14px;
    color: #888;
  }
`;

export const MenuBox = styled.div`
  margin: 12px 20px;
  border-radius: 10px;
  overflow: hidden;
  border-radius: 8px;
background: #FFF;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 18px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
  span {
    font-size: 16px;
  }
`;