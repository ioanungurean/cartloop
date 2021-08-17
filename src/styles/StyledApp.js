import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,
  body,
  #root {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const StyledApp = styled.div`
  display: flex;

  height: 100%;

  background-color: #eef2f7;

  justify-content: center;
  align-items: center;
`;
