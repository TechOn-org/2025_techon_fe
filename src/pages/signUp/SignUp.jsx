import React, { useState } from "react";
import Button from "../../components/common/buttons/PostButton";
import { useNavigate } from "react-router-dom";
import * as S from "./styled.js";
import axios from "axios";

function SignUp() {
  const [memberId, setMemberId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const isIdValid = /^[A-Za-z0-9]{8,}$/.test(memberId);
  const isNicknameValid = nickname.length <= 10 && nickname.length > 0;
  const isPasswordValid =
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 10;
  const isPasswordMismatch = passwordConfirm && password !== passwordConfirm;

  const handleSignUp = async () => {
    if (!isIdValid || !isNicknameValid || !isPasswordValid || isPasswordMismatch) {
      alert("입력값을 확인해주세요.");
      return;
    }

    try {
  const response = await axios.post("/api/auth/signup", {
    username: memberId,   // 여기서 username으로 보냄
    nickname,
    password
  });

  console.log("회원가입 성공:", response.data);
  alert("회원가입이 완료되었습니다!");
  navigate("/login");
} catch (error) {
  console.error("회원가입 실패:", error.response || error.message);
  alert(error.response?.data?.message || "회원가입에 실패했습니다.");
}

  };

  return (
    <S.Container>
      <S.Main>
        <S.Nav>
          <img
            src="/images/logo_icon.svg"
            alt="logo"
            style={{ width: "109px", height: "auto" }}
          />
        </S.Nav>

        <>
          <S.FormGroup>
            <label htmlFor="username">아이디 입력</label>
            <S.InputField
              type="text"
              id="username"
              placeholder="아이디를 입력해주세요."
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
            {!isIdValid && memberId && (
              <S.ErrorMessage>
                아이디는 영문과 숫자를 조합한 8자 이상이어야 합니다.
              </S.ErrorMessage>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <label htmlFor="nickname">닉네임 입력</label>
            <S.InputField
              type="text"
              id="nickname"
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              maxLength={10}
              onChange={(e) => setNickname(e.target.value)}
            />
            {!isNicknameValid && (
              <S.ErrorMessage>
                닉네임은 최대 10자까지 입력 가능합니다.
              </S.ErrorMessage>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <label htmlFor="password">비밀번호 입력</label>
            <S.InputField
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isPasswordValid && password && (
              <S.ErrorMessage>
                비밀번호는 영문 대소문자, 숫자를 포함하여 10자 이상이어야 합니다.
              </S.ErrorMessage>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <S.InputField
              type="password"
              id="passwordConfirm"
              placeholder="비밀번호를 입력해주세요."
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            {isPasswordMismatch && (
              <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
            )}
          </S.FormGroup>

          <S.ButtonRow>
            <Button
              height="41px"
              title={"회원가입"}
              color="#EEEEEE"
              backgroundColor="#2665FE"
              onClick={handleSignUp}
            />
          </S.ButtonRow>
        </>
      </S.Main>
    </S.Container>
  );
}

export default SignUp;
