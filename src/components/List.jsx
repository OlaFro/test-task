import React, { useContext, useState, useEffect } from "react";
import { appContext } from "./Context";

import Card from "./Card";

import { StyledList, StyledFiltering } from "../styled-components/StyledList";

export default function List() {
  const { hotels, noItemsFlag, checkedItems, setCheckedItems } = useContext(
    appContext
  );

  const amenities = [
    {
      name: "breakfast_included",
      key: "breakfast",
      label: "breakfast included",
    },
    {
      name: "free_cancellation",
      key: "cancellation",
      label: "free cancellation",
    },
    { name: "free_parking", key: "parking", label: "free parking" },
    { name: "fitness", key: "fitness", label: "fitness" },
    { name: "pool", key: "pool", label: "pool" },
    { name: "free_wifi", key: "wifi", label: "free wifi" },
  ];

  const handleChange = (e) => {
    setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    //console.log(checkedItems);
  }, [checkedItems]);

  return (
    <StyledList>
      <StyledFiltering>
        {amenities.map((item) => (
          <div key={item.key}>
            <input
              name={item.name}
              type="checkbox"
              checked={checkedItems[item.name]}
              value={checkedItems[item.name]}
              onChange={handleChange}
            />
            <label>{item.label}</label>
          </div>
        ))}
      </StyledFiltering>

      {noItemsFlag ? (
        <p>
          Oops! It looks like there are no available offers in this time. Try to
          change the date.
        </p>
      ) : (
        hotels.map((elem, index) => {
          let checkboxArray = Object.values(checkedItems);
          let offerArray = Object.values(elem.amenities);

          return <Card hotel={elem} key={index} />;
        })
      )}
    </StyledList>
  );
}
