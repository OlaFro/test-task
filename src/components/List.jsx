import React, { useContext } from "react";
import { appContext } from "./Context";

import Card from "./Card";

import { StyledList } from "../styled-components/StyledList";

export default function List() {
  const { hotels, noItemsFlag } = useContext(appContext);

  return (
    <StyledList>
      {noItemsFlag ? (
        <p>
          Oops! It looks like there are no available offers in this time. Try to
          change the date.
        </p>
      ) : (
        hotels.map((elem, index) => {
          return <Card hotel={elem} key={index} />;
        })
      )}
    </StyledList>
  );
}
