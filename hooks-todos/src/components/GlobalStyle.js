import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { defaultText, background } from '../colors'

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: ${background};
    font-family: 'Open Sans', sans-serif;
    color: ${defaultText};
  }
`

export default GlobalStyle
