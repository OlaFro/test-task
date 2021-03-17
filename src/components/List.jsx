import React, { useContext } from "react";
import { appContext } from "./Context";

import Card from "./Card";

import { StyledList, StyledFiltering } from "../styled-components/StyledList";

export default function List() {
  const { hotels, noItemsFlag } = useContext(appContext);

  return (
    <StyledList>
      <StyledFiltering>
        <div>
          <input type="checkbox" name="breakfast" id="breakfast" />
          <label htmlFor="breakfast">breakfast included</label>
        </div>
        <div>
          <input type="checkbox" name="cancellation" id="cancellation" />
          <label htmlFor="cancellation">free cancellation</label>
        </div>
        <div>
          <input type="checkbox" name="parking" id="parking" />
          <label htmlFor="parking">free parking</label>
        </div>
        <div>
          <input type="checkbox" name="fitness" id="fitness" />
          <label htmlFor="fitness">fitness</label>
        </div>
        <div>
          <input type="checkbox" name="pool" id="pool" />
          <label htmlFor="pool">pool</label>
        </div>
        <div>
          <input type="checkbox" name="wifi" id="wifi" />
          <label htmlFor="wifi">free wifi</label>
        </div>
      </StyledFiltering>
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
