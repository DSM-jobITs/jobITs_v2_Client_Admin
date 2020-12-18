import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html, body {
    overflow: hidden;
    margin-top: 1.875rem; /* 헤더로 겹치는 부분만큼 margin */
    margin: 0;
    padding: 0;
    font-family: 'AppleSDGothic', 'sans-serif';
  }
  * {
    box-sizing: bordeer-box;
  }
`;

export default GlobalStyle;
