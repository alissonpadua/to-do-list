import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #000;
    color: #fff;
    -webkit-font-smoothing: antialised;
  }
  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
`;
