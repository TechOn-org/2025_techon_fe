// src/pages/signUp/styled.js
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 412px;
    height: 100dvh;
    margin: 0px auto;
    overflow: hidden;
    flex-direction: column;
    overscroll-behavior: none;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #ffffff 0%, #eef4ff 65%, #b9ccff 100%);
`;

/* 헤더/네비 영역 */
export const Nav = styled.nav`
  box-sizing: border-box; /* padding 포함해도 100% 초과 X */
  margin-top: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
`;

/* 본문 영역 */
export const Main = styled.main`
  box-sizing: border-box; /* padding 포함해도 100% 초과 X */
  width: 100%;
  padding: 0 20px 40px;
  flex: 1 1 auto;         /* 남는 세로 공간 채우기 */
  overflow-y: auto;       /* 내용 많으면 내부 스크롤 */
  overscroll-behavior: contain;
`;
/* ───────── 폼 ───────── */
export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const InputWithCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #262626;
  }
`;

export const InputField = styled.input`
  border: 1px solid #e5e7eb;
  background: #efefef;
  border-radius: 5px;
  padding: 14px 16px;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    background: #ffffff;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

export const ErrorMessage = styled.p`
  margin: 4px 2px 0;
  color: #ef4444;
  font-size: 12px;
`;

export const ButtonRow = styled.div`
  position: relative;
  bottom: 24px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;
