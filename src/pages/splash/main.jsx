
import React from "react";
import './style.css';

export default function Login() {

  return (
    <div>
      <div className="wrap">
        {/* <div>
          <h1 className="title">AI로 고치고, 지구를 살리다</h1>
        </div> */}
        <div>
          <div className="logo-container">
            <img className="logo" src="/image/LOGO.png" alt="Tech On 로고" />
            <img className="logo" src="/image/Tech On.png" alt="" />
          </div> 
        </div>
          {/* <div className="signin-form">
            <label className="signin-label">아이디 입력</label>
            <input type="text" placeholder="아이디를 입력해주세요."/>
            <label className="signin-label">비밀번호 입력</label>
            <input type="text" placeholder="비밀번호를 입력해주세요." />
            <input type="button" value="로그인" id="signin"/>
            <input type="button" value="회원가입" id="signup"/>
          </div> */}
      </div>
    </div>
  );
}