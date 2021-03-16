import React, { useContext } from "react";
import { appContext } from "./Context";

import Card from "./Card";

import { StyledList } from "../styled-components/StyledList";

export default function List() {
  const { hotels } = useContext(appContext);

  return (
    <StyledList>
      {hotels.length
        ? hotels.map((elem, index) => {
            return <Card hotel={elem} key={index} />;
          })
        : null}
    </StyledList>
  );
}
