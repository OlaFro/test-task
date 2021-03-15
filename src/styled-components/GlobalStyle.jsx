const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`

:root {
 

}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;;
  color: #4A4A4A;
}
`;
