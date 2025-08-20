// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp.jsx";
import MainPage from "./pages/main/main.jsx";
import EstimatePage from "./pages/estimate/estimate.jsx";

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/estimate" element={<EstimatePage />} />
      </Routes>
     );
}
