// src/pages/login/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });

      console.log("로그인 성공:", response.data);

      // JWT 토큰이 있다면 localStorage/sessionStorage에 저장
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      if (response.data.nickname) {
        localStorage.setItem("nickname", response.data.nickname);
      }
      if (username) {
        localStorage.setItem("username", username);
      }



      alert("로그인 성공!");
      navigate("/main"); // 로그인 후 메인 페이지 등으로 이동
    } catch (error) {
      console.error("로그인 실패:", error.response || error.message);
      alert(error.response?.data?.message || "로그인에 실패했습니다.");
    }
  };

  return (
    <S.Container>
      {/* 로고 영역 */}
      <S.LogoContainer>
        <img 
          src="/images/logo_icon.svg" 
          alt="logo" 
          style={{ width: "109px", height: "auto" }} 
        />
      </S.LogoContainer>

      {/* 로그인 폼 */}
      <S.FormGroup>
        <label>아이디 입력</label>
        <S.InputField
          type="text"
          placeholder="아이디를 입력해주세요."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </S.FormGroup>

      <S.FormGroup>
        <label>비밀번호 입력</label>
        <S.InputField
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.FormGroup>

      {/* 버튼 영역 */}
      <S.ButtonRow>
        <S.SignInButton onClick={handleLogin}>
          로그인
        </S.SignInButton>
        <S.SignUpButton onClick={() => navigate("/signup")}>
          회원가입
        </S.SignUpButton>
      </S.ButtonRow>
    </S.Container>
  );
}
