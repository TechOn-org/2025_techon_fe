import React from "react";
import * as S from "./styled";

// public/images/... 에 둔 이미지는 import 대신 경로 문자열로 사용
const Logo = "/images/logo.png";
const Laptop = "/images/laptop.png";

// 샘플 가로 스크롤 카드 데이터 (업사이클링 제품)
const UPCYCLED_ITEMS = [
  { id: 1, title: "케이블 키트", badge: "오늘의 특가", price: "₩12,900" },
  { id: 2, title: "리퍼 마우스", badge: "리퍼 · A급", price: "₩19,900" },
  { id: 3, title: "리퍼 키보드", badge: "베스트", price: "₩29,900" },
  { id: 4, title: "배터리 팩", badge: "한정수량", price: "₩24,900" },
  { id: 5, title: "USB 허브", badge: "인기", price: "₩9,900" },
];

export default function MainPage() {
  return (
    <S.Wrap>
      {/* ===== Header ===== */}
      <S.Header>
        <S.HeaderTop>
          <S.TogglePill aria-label="모드 토글" />
          <S.BellBtn aria-label="알림">🔔</S.BellBtn>
        </S.HeaderTop>

        <S.HeaderBottom>
          <S.Logo src={Logo} alt="Techon 로고" />
          <S.LocationBtn>
            <S.LocationIcon />
            경기 서울시 동작구 상도로 ▾
          </S.LocationBtn>
        </S.HeaderBottom>
      </S.Header>

      <S.Content>
        {/* ===== 결제 알림 배너 ===== */}
        <S.HeroCard>
          <S.HeroText>
            <S.Subtle>김숭실님,</S.Subtle>
            <S.Headline>
              총 <S.Primary>290,278원</S.Primary>
              <br />
              결제건이 있습니다
            </S.Headline>
          </S.HeroText>
          <S.HeroImage src={Laptop} alt="노트북 이미지" />
        </S.HeroCard>

        {/* ASUS 혜택 배너 */}
        <S.PromoCard>
          <S.PromoLogo>ASUS</S.PromoLogo>
          <S.PromoBody>
            <S.PromoTitle>ASUS 제품 수리비 10% 할인</S.PromoTitle>
            <S.PromoDesc>
              고장난 ASUS, 성능은 되찾고 비용은 아끼세요!
            </S.PromoDesc>
          </S.PromoBody>
        </S.PromoCard>

        {/* 수리 진행 상태 */}
        <S.Section>
          <S.SectionTitle>수리진행</S.SectionTitle>
          <S.StatusCard>
            <S.StatusLeft>
              <S.StatusBadge>진행 중</S.StatusBadge>
              <S.StatusTitle>노트북 수리</S.StatusTitle>
              <S.StatusMeta>
                2025.08.19 (월) 14:00 · 알림톡 수신 완료
              </S.StatusMeta>
            </S.StatusLeft>
            <S.StatusIcon aria-hidden />
          </S.StatusCard>
        </S.Section>

        {/* 바로가기 - 서비스 */}
        <S.Section>
          <S.SectionTitle>간편한 서비스</S.SectionTitle>
          <S.ActionGrid>
            <S.ActionButton>
              <S.ActionIcon>🔎</S.ActionIcon>
              <S.ActionLabel>제품 진단하기</S.ActionLabel>
            </S.ActionButton>
            <S.ActionButton>
              <S.ActionIcon>🧰</S.ActionIcon>
              <S.ActionLabel>전문가 매칭</S.ActionLabel>
            </S.ActionButton>
            <S.ActionButton>
              <S.ActionIcon>♻️</S.ActionIcon>
              <S.ActionLabel>순환 마켓</S.ActionLabel>
            </S.ActionButton>
          </S.ActionGrid>
        </S.Section>

        {/* 필터/드롭다운 바 */}
        <S.FilterBar>
          <S.FilterPill>내 주변 업체 둘러보기</S.FilterPill>
          <S.FilterDivider />
          <S.FilterPill>중계 수수료 제로 ▾</S.FilterPill>
        </S.FilterBar>

        {/* 업사이클링 제품 모아보기 - 가로 스크롤 */}
        <S.Section>
          <S.RowBetween>
            <S.SectionTitle>업사이클링 제품 모아보기</S.SectionTitle>
            <S.SmallLink>전체보기</S.SmallLink>
          </S.RowBetween>

          <S.HorizontalScroll role="list">
            {UPCYCLED_ITEMS.map((item) => (
              <S.ProductCard key={item.id} role="listitem">
                <S.ProductThumb />
                <S.ProductBody>
                  <S.ProductBadge>{item.badge}</S.ProductBadge>
                  <S.ProductTitle>{item.title}</S.ProductTitle>
                  <S.ProductPrice>{item.price}</S.ProductPrice>
                </S.ProductBody>
              </S.ProductCard>
            ))}
          </S.HorizontalScroll>
        </S.Section>

        <S.BottomSpacer />
      </S.Content>
    </S.Wrap>
  );
}
