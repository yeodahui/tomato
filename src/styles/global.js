import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}

    * { box-sizing: border-box }

    .a11y-hidden {
        overflow: hidden;
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
    }

    html, body, #root, .App {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.background};
        font-size: 10px;
        font-family: ${({ theme }) => theme.font};
    }
`;
