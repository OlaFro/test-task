import { GlobalStyle } from "./styled-components/GlobalStyle";
import Search from "./components/Search";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <Search />
    </React.Fragment>
  );
}

export default App;
