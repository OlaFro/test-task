import React, { useState } from "react";
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { appContext } from "./components/Context";

import Hero from "./components/Hero";
import Search from "./components/Search";
import List from "./components/List";

function App() {
  const [hotels, setHotels] = useState([]);
  return (
    <appContext.Provider
      value={{
        hotels,
        setHotels,
      }}
    >
      <GlobalStyle />
      <Hero />

      <Search />
      {hotels ? <List /> : null}
    </appContext.Provider>
  );
}

export default App;
