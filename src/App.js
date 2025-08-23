import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  );
}
