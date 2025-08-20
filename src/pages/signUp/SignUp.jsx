import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/common/buttons/PostButton";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "./styled.js";

function SignUp() {
  const [memberId, setMemberId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 🔎 간단한 유효성 예시 (원하는 규칙에 맞춰 수정)
  const isIdValid = /^[A-Za-z0-9]{8,}$/.test(memberId);
  const isNicknameValid = nickname.length <= 10 && nickname.length > 0;
  const isPasswordValid =
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 10;
  const isPasswordMismatch = passwordConfirm && password !== passwordConfirm;

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
            <S.InputWithCheck>
              <label htmlFor="username">아이디 입력</label>
            </S.InputWithCheck>
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
                비밀번호는 영문 대소문자, 숫자를 포함하여 10자 이상이어야
                합니다.
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
                    title={"다음"}
                    color="#EEEEEE"
                    backgroundColor="#2665FE"
                    
          />
          </S.ButtonRow>
        </>
      </S.Main>
    </S.Container>
  );
}
export default SignUp;
