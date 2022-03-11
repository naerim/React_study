import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// styled-reset - 글로벌 스타일 적용
export const GlobalStyle = createGlobalStyle`
${reset}
body{
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 1.5;
    margin: 0 auto;
}
`;
