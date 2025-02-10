import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import DoHyeonRegular from 'assets/fonts/DoHyeon-Regular.ttf';
import PretendardVariable from 'assets/fonts/PretendardVariable.ttf';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 375px; 
    /* height: 768px;  */
    height: 100%; 
    margin: 0 auto;
    background-color: #fff; 
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative; 
  }

  body {
    background-color: #fff5d1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  input[type="date"]{
    appearance:none ;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  @font-face {
    font-family: 'Do Hyeon';
    src: url(${DoHyeonRegular}) format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    src: url(${PretendardVariable}) format("truetype");
    font-style: normal;
  }
`;

export default GlobalStyle;
