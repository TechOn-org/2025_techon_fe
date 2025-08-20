
import React from "react";
import './style.css';

export default function Login() {
  return (
    <div>
      <div className="wrap">
        {/* <div>
          <h1 className="title">AI로 고치고, 지구를 살리다</h1>
        </div> */}
        {/* <div>
          <div>
            <img className="logo" src="/image/LOGO.png" alt="Tech On 로고" />
            <img className="logo" src="/image/Tech On.png" alt="" />
          </div> 
        </div> */}
          {/* <div className="signin-form">
            <label className="signin-label">아이디 입력</label>
            <input type="text" placeholder="아이디를 입력해주세요."/>
            <label className="signin-label">비밀번호 입력</label>
            <input type="text" placeholder="비밀번호를 입력해주세요." />
            <input type="button" value="로그인" id="signin"/>
            <input type="button" value="회원가입" id="signup"/>
          </div> */}
        <div className="signup-form">
          <div className="signup-label-space">
            <label className="signup-label">아이디 입력</label>
            <input type="button" value="중복확인" className="checkid"/>
          </div>
          <input type="text" placeholder="아이디를 입력해주세요." className="userinput"/>
          <div className="signup-label-space">
            <label className="signup-label">닉네임 입력</label>
          </div>
          <input type="text" placeholder="춤추는 개구리" className="userinput"/>
          <div className="signup-label-space">
            <label className="signup-label">비밀번호 입력</label>
          </div>
          <input type="password" placeholder="비밀번호를 입력해주세요." className="userinput"/>
          <div className="signup-message">영문, 숫자, 특수문자(!@#$%^&*) 조합 8자 입력 필요</div>
          <div className="signup-label-space">
            <label className="signup-label">비밀번호 확인</label>
          </div>
          <input type="password" placeholder="비밀번호를 확인해주세요." className="userinput"/>
          <div className="signup-message">비밀번호가 일치하지 않습니다.</div>
          <div className="signup-label-space">
            <label className="signup-label">주소</label>
          </div>
          <div className="signup-address">
            <div className="code-space">
              <input type="text" placeholder="우편번호" className="userinput postcode"/>
              <input type="button" onClick="openPostcode()" value="우편번호 찾기" className="userinput findbuttn"/>
            </div>
            <input type="text" placeholder="도로명 주소" className="userinput roadaddress"/>
          </div>
          <input type="button" value="가입하기" className="userinput" id="signup"/>
        </div>
      </div>
    </div>
  );
}