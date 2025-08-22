import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

function MarketPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("market");

  return (
        <S.Container>
            <Header />
            <Footer tab={tab} setTab={setTab} />
        </S.Container>
  );
}

export default MarketPage;
