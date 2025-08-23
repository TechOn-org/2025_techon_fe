import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Splash() {
  const [phase, setPhase] = useState("text"); // text -> fading -> logo
  useEffect(() => {
    const TEXT_HOLD = 1500, FADE = 700, GAP = 500;
    const t1 = setTimeout(() => setPhase("fading"), TEXT_HOLD);
    const t2 = setTimeout(() => setPhase("logo"), TEXT_HOLD + FADE + GAP);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="splash-wrap">
      <div className="phone-bg">
        <section className={`layer ${phase === "text" ? "textshow" : phase === "fading" ? "fadeout" : "hide"}`}>
          <h1 className="slogan">AI로 고치고, 지구를 살리다.</h1>
        </section>
        <section className={`layer ${phase === "logo" ? "show" : "hide"}`}>
          <div className="logo-container">
            <img className="logo" src="/images/logo_icon.svg" alt="Tech On 로고" />
          </div>
        </section>
      </div>
    </div>
  );
}