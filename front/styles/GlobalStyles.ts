import { createGlobalStyle } from "styled-components"

/**
 * Applies global styles to /pages/_app.js
 *
 * https://www.styled-components.com/docs/api#createglobalstyle
 */
export default createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
}

* {
  box-sizing: border-box;
  transition: all 0.2s linear;
  transition-property: color, background-color, border-color;
}
`
