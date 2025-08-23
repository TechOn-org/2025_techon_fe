import styled from "styled-components";

export const Container = styled.div`
  max-width: 412px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background: #f9f9f9;
`;

export const ProductImage = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 8px;
`;

export const MarketRow = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  color: #999999;
  border-bottom: 1px solid #eee;

  span {
    margin-left: 4px;
  }
`;

export const InfoSection = styled.div`
  padding: 16px;
`;

export const ProductTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const ProductDesc = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0;
`;

export const DetailRow = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

export const Label = styled.span`
  width: 60px;
  color: #999;
  font-size: 14px;
`;

export const Value = styled.span`
  font-size: 14px;
  color: #222;
`;

export const PointRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin: 8px 0;
  background: #f8faff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #222;
`;

export const PointIcon = styled.span`
  font-size: 18px;
  margin-right: 8px;
`;

export const PointText = styled.div`
  flex: 1;
  strong {
    color: #2665fe;
  }
`;

export const Arrow = styled.span`
  color: #888;
`;

export const Footer = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  border-top: 1px solid #eee;
  background: #fff;
  padding: 10px;
  gap: 10px;
`;

export const CartButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: 8px;
  border: none;
  background: #e6f0ff;
  color: #2665fe;
  font-size: 16px;
  font-weight: 600;
`;

export const BuyButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: 8px;
  border: none;
  background: #2665fe;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;