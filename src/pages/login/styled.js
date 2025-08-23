// src/pages/login/styled.js
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
    background: linear-gradient(180deg, #FFF 62.5%, #88BDFF 100%);
`;

export const LoginContainer = styled.div`
  padding: 0px 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 64px;

  img {
    margin: 8px 0;
    max-width: 200px;
    height: auto;
  }
`;

export const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px 40px;
  flex: 1 1 auto;
  overflow-y: auto;
  overscroll-behavior: contain;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;

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

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const SignInButton = styled.button`
  background-color: #2665fe;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1e4ecc;
  }
`;

export const SignUpButton = styled.button`
  background-color: #fff;
  border: 2px solid #2665fe;
  color: #2665fe;
  font-size: 14px;
  font-weight: bold;
  padding: 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2665fe;
    color: #fff;
  }
`;
