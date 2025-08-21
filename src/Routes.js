// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp.jsx";
import MainPage from "./pages/main/main.jsx";
import SelectPage from "./pages/fix/select.jsx";
import WritePage from "./pages/fix/write.jsx";
import LocationPage from "./pages/fix/location.jsx";
import EstimatePage from "./pages/estimate/estimate.jsx";
import MatchPage from "./pages/matching/matching.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/select" element={<SelectPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/estimate" element={<EstimatePage />} />
      <Route path="/match" element={<MatchPage />} />
    </Routes>
  );
}
