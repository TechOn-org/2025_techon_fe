// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp.jsx";
import MainPage from "./pages/main/main.jsx";
import SelectPage from "./pages/fix/select.jsx";
import WritePage from "./pages/fix/write.jsx";
import LocationPage from "./pages/fix/location.jsx";
import SearchPage from "./pages/fix/search.jsx";
import EstimatePage from "./pages/estimate/estimate.jsx";
import MatchPage from "./pages/matching/matching.jsx";
import MatchAPI from "./pages/match_API/match_API.jsx";
import SplashPage from "./pages/splash/splash.jsx";
import Login from "./pages/login/login.jsx";
import CompletePage from "./pages/complete/complete.jsx";
import RequestPage from "./pages/request/request.jsx";
import HistoryPage from "./pages/detail/history.jsx";
import MyPage from "./pages/detail/mypage.jsx";
import MarketPage from "./pages/detail/market.jsx";
import MarketDetail1 from "./pages/market_detail/marketdetail1.jsx";
import MarketDetail2 from "./pages/market_detail/marketdetail2.jsx";
import MarketDetail3 from "./pages/market_detail/marketdetail3.jsx";
import MarketDetail4 from "./pages/market_detail/marketdetail4.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/select" element={<SelectPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/estimate" element={<EstimatePage />} />
      <Route path="/match" element={<MatchPage />} />
      <Route path="/" element = {<SplashPage/>}/>
      <Route path="/complete" element={<CompletePage />} />
      <Route path="/request" element={<RequestPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="/match2" element={<MatchAPI />} />
      <Route path="/marketdetail1" element={<MarketDetail1 />} />
      <Route path="/marketdetail2" element={<MarketDetail2 />} />
      <Route path="/marketdetail3" element={<MarketDetail3 />} />
      <Route path="/marketdetail4" element={<MarketDetail4 />} />
    </Routes>
  );
}
