import React, { useState } from "react";
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { appContext } from "./components/Context";

import Hero from "./components/Hero";
import List from "./components/List";

function App() {
  const [hotels, setHotels] = useState([]);
  const [noItemsFlag, setNoItemsFlag] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    breakfast_included: false,
    free_cancellation: false,
    free_parking: false,
    fitness: false,
    pool: false,
    free_wifi: false,
  });
  return (
    <appContext.Provider
      value={{
        hotels,
        setHotels,
        noItemsFlag,
        setNoItemsFlag,
        checkedItems,
        setCheckedItems,
      }}
    >
      <GlobalStyle />
      <Hero />

      {/* <Search /> */}
      {hotels.length ? <List /> : null}
    </appContext.Provider>
  );
}

export default App;
