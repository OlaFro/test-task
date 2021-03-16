import React, { useContext } from "react";
import { StyledCard } from "../styled-components/StyledCard";

import { appContext } from "./Context";

export default function Card(props) {
  const { hotels } = useContext(appContext);

  function renderSwitch(rating) {
    switch (rating) {
      case 5:
        return <p>⭐⭐⭐⭐⭐</p>;
      case 4:
        return <p>⭐⭐⭐⭐</p>;
      case 3:
        return <p>⭐⭐⭐</p>;
      case 2:
        return <p>⭐⭐</p>;
      case 1:
        return <p>⭐</p>;
      default:
        return <p>rating</p>;
    }
  }

  return (
    <StyledCard>
      <figure>
        <img src={hotels[0].img} alt={hotels.name} />
      </figure>
      <div className="textContainer">
        <h2>{hotels[0].name}</h2>

        {hotels[0].rating ? renderSwitch(hotels[0].rating) : 0}

        <p>{hotels[0].address}</p>

        <p>{hotels[0].desc}</p>
      </div>

      {/* <p>name: {props.hotel.name}</p>
      <p>address: {props.hotel.address}</p>
      <p>rating: {props.hotel.rating}</p> */}
    </StyledCard>
  );
}
