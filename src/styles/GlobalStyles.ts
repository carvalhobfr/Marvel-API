import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --snow: #F5F5F5;
    --dark-snow: #E5E5E5;
    --smoke: #8E8E8E;
    --dark-smoke: #555555;
    --dark-blue: #167ABC;
    --black-transparent: #00000033;

    --red: #ED1D24;
    --dark-red: #CE0106;
    --black: #151515;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--dark-snow);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;