import React, { useState } from "react";
import * as S from "./styled";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

function HistoryPage() {
    const [tab, setTab] = useState("history");

    // 더미 데이터 (API 연동 시 교체)
    const historyData = [
        { id: 1, date: "8.22", company: "경성테크", category: "휴대폰/태블릿", price: 330000, discount: "-5.5%" },
        { id: 2, date: "8.22", company: "경성테크", category: "휴대폰/태블릿", price: 330000, discount: "-5.5%" },
        { id: 3, date: "8.22", company: "경성테크", category: "휴대폰/태블릿", price: 330000, discount: "-5.5%" },
        { id: 4, date: "8.22", company: "경성테크", category: "휴대폰/태블릿", price: 330000, discount: "-5.5%" },
        { id: 5, date: "8.22", company: "경성테크", category: "휴대폰/태블릿", price: 330000, discount: "-5.5%" },
    ];

    return (
        <S.Container>
        <Header />

        {/* 상단 요약 영역 */}
        <S.Summary>
            <div>
            <p><strong>김승실님,</strong></p>
            <p>
                <span className="highlight">총 5건</span>의 수리를 <br /> 진행했어요!
            </p>
            </div>
            <img src="/images/laptop.png" alt="summary-img" />
        </S.Summary>

        {/* 필터 + 검색 */}
        <S.FilterRow>
            <S.FilterBtn>전체 ▾</S.FilterBtn>
            <S.SearchBtn>
            <img src="/images/magnify.svg" alt="검색" />
            </S.SearchBtn>
        </S.FilterRow>

        {/* 내역 리스트 */}
        <S.List>
            {historyData.map((item) => (
            <S.ListItem key={item.id}>
                <div className="left">
                <p className="date">{item.date}</p>
                <p className="company">{item.company}</p>
                <p className="category">{item.category}</p>
                </div>
                <div className="right">
                <p className="price">{item.price.toLocaleString()}원</p>
                <p className="discount">{item.discount}</p>
                </div>
            </S.ListItem>
            ))}
        </S.List>

        <Footer tab={tab} setTab={setTab} />
        </S.Container>
    );
}

export default HistoryPage;
