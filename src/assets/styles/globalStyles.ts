import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html, body {
    margin: 0;
    padding: 0;
    overflow : scroll;
    font-family: 'AppleSDGothic', 'sans-serif';
  }
  * {
    box-sizing: bordeer-box;
  }
`;

export default GlobalStyle;
