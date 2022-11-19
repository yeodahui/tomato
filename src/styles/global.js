import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
${reset}

  html, body, #root, .App {
    width: 100%;
    height: 100%;
  }
`;
