const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`

:root {
  --space-xs: 0.5em;
  --space-s: 1em;
  --space-m: 2em; 
  --space-l: 3em;
  --space-xl:4em;

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

h1 {
 text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  margin: 5vh;
}
h2 {
  font-weight: 500;
}
`;
