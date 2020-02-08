import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-kerning: normal;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    overflow: scroll;
    overflow-x: hidden; 
    background-color: #fff !important;
  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: #FF0000;
  }
}
`

export default GlobalStyles
