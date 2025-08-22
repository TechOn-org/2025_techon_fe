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

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  
  .highlight {
    color: #2665fe;
    font-weight: bold;
  }

  img {
    width: 80px;
    height: auto;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 10px 0;
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
  padding: 0 20px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;

  .date {
    font-size: 12px;
    color: #888;
  }
  .company {
    font-size: 14px;
    font-weight: bold;
  }
  .category {
    font-size: 12px;
    color: #aaa;
  }
  .price {
    font-size: 14px;
    font-weight: bold;
  }
  .discount {
    font-size: 12px;
    color: #888;
  }
`;

//mypage
export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  .id {
    font-size: 12px;
    color: #666;
  }
  .name {
    font-size: 16px;
    font-weight: bold;
    margin-top: 4px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  margin: 0 20px 12px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 16px;
    font-weight: bold;
  }
  span {
    font-size: 12px;
    color: #888;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  margin: 0 20px 12px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
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
    font-size: 12px;
    color: #444;
  }
`;

export const MenuBox = styled.div`
  margin: 12px 20px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
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
    font-size: 14px;
  }
`;