import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

function MyPage() {
    const navigate = useNavigate();
    const [tab, setTab] = useState("mypage");

    return (
        <S.Container>
        <Header />

        {/* 프로필 영역 */}
        <S.ProfileSection>
            <S.Avatar src="/images/profile.svg" alt="프로필" />
            <S.Info>
            <p className="id">@gkxsodud._.05</p>
            <h3 className="name">김승실</h3>
            </S.Info>
        </S.ProfileSection>

        {/* 마일리지 / 쿠폰 / 할인 */}
        <S.InfoBox>
            <S.InfoItem>
            <strong>300M</strong>
            <span>마일리지</span>
            </S.InfoItem>
            <S.InfoItem>
            <strong>1</strong>
            <span>쿠폰</span>
            </S.InfoItem>
            <S.InfoItem>
            <strong>0</strong>
            <span>할인중</span>
            </S.InfoItem>
        </S.InfoBox>

        {/* 결제대기/멤버십카드/저장 */}
        <S.ActionBox>
            <S.ActionItem>
            <img src="/images/Coins.svg" alt="결제대기" />
            <span>결제대기</span>
            </S.ActionItem>
            <S.ActionItem>
            <img src="/images/Cardholder.svg" alt="멤버십카드" />
            <span>멤버십카드</span>
            </S.ActionItem>
            <S.ActionItem>
            <img src="/images/Disk.svg" alt="저장" />
            <span>저장</span>
            </S.ActionItem>
        </S.ActionBox>

        {/* 메뉴 리스트 */}
        <S.MenuBox>
            <S.MenuItem onClick={() => navigate("/history")}>
            <img src="/images/pay.svg" alt="결제내역" />
            <span>결제내역</span>
            </S.MenuItem>
            <S.MenuItem>
            <img src="/images/call.svg" alt="업사이클링" />
            <span>업사이클링 제품 문의</span>
            </S.MenuItem>
            <S.MenuItem>
            <img src="/images/fix.svg" alt="계정관리" />
            <span>계정 관리</span>
            </S.MenuItem>
        </S.MenuBox>

        <S.MenuBox>
            <S.MenuItem>
            <img src="/images/alarm.svg" alt="알람설정" />
            <span>알림 설정</span>
            </S.MenuItem>
            <S.MenuItem>
            <img src="/images/customer.svg" alt="고객센터" />
            <span>고객센터</span>
            </S.MenuItem>
        </S.MenuBox>

        <Footer tab={tab} setTab={setTab} />
        </S.Container>
    );
}

export default MyPage;
