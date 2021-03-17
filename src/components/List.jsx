import React, { useContext, useState, useEffect } from "react";
import { appContext } from "./Context";

import Card from "./Card";

import { StyledList, StyledFiltering } from "../styled-components/StyledList";

export default function List() {
  const { hotels, noItemsFlag } = useContext(appContext);
  const [checkedItems, setCheckedItems] = useState({
    breakfast: "",
    cancellation: "",
    parking: "",
    fitness: "",
    pool: "",
    wifi: "",
  });

  const amenities = [
    { name: "breakfast", key: "breakfast", label: "breakfast included" },
    { name: "cancellation", key: "cancellation", label: "free cancellation" },
    { name: "parking", key: "parking", label: "parking" },
    { name: "fitness", key: "fitness", label: "fitness" },
    { name: "pool", key: "pool", label: "pool" },
    { name: "wifi", key: "wifi", label: "wifi" },
  ];

  const handleChange = (e) => {
    setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    console.log(checkedItems);
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
            <label>{item.name}</label>
          </div>
        ))}
      </StyledFiltering>

      {/* <StyledFiltering>
        <div>
          <input
            type="checkbox"
            name="breakfast"
            id="breakfast"
            value="breakfast_included"
            onChange={handleChange}
          />
          <label htmlFor="breakfast">breakfast included</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="cancellation"
            id="cancellation"
            value="free_cancellation"
            onChange={handleChange}
          />
          <label htmlFor="cancellation">free cancellation</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="parking"
            id="parking"
            value="free_parking"
            onChange={handleChange}
          />
          <label htmlFor="parking">free parking</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="fitness"
            id="fitness"
            value="fitness"
            onChange={handleChange}
          />
          <label htmlFor="fitness">fitness</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="pool"
            id="pool"
            value="pool"
            onChange={handleChange}
          />
          <label htmlFor="pool">pool</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="wifi"
            id="wifi"
            value="wifi"
            onChange={handleChange}
          />
          <label htmlFor="wifi">free wifi</label>
        </div>
      </StyledFiltering> */}
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
