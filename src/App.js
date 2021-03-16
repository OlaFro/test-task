import { GlobalStyle } from "./styled-components/GlobalStyle";
import Search from "./components/Search";
import React, { useState } from "react";
import { appContext } from "./components/Context";

function App() {
  const [hotels, setHotels] = useState([
    // {
    //   name: "",
    //   address: "",
    //   rating: "",
    //   amenities: [],
    // },
  ]);
  return (
    <appContext.Provider
      value={{
        hotels,
        setHotels,
      }}
    >
      <GlobalStyle />

      <Search />
    </appContext.Provider>
  );
}

export default App;
