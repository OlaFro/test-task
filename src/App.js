import React, { useState } from "react";
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { appContext } from "./components/Context";

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

      <Search />
      <List />
    </appContext.Provider>
  );
}

export default App;
