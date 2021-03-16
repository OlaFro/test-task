import React, { useState, useContext } from "react";
import { StyledCard } from "../styled-components/StyledCard";

import { appContext } from "./Context";

export default function Card(props) {
  const { hotels } = useContext(appContext);
  const [amenities, setAmenities] = useState([]);

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

  function renderAmenities(obj) {
    for (const key in obj) {
      console.log(key);
      // if (obj[key]) {
      //   amenities.push(key.replace("_", " "));
      //   setAmenities([...amenities]);
      // }
      // setAmenities(amenities);
      <p>{`${key}: ${obj[key]}`}</p>;
    }
  }

  return (
    <StyledCard>
      <figure>
        <img src={hotels[0].img} alt={hotels.name} />
      </figure>
      <div className="textContainer">
        <h2>{hotels[0].name}</h2>

        {hotels[0].rating ? renderSwitch(hotels[0].rating) : null}

        {/* <p>{hotels[0].address}</p> */}

        <p>{hotels[0].desc}</p>
        {renderAmenities(hotels[0].amenities)}
      </div>

      {/* <p>name: {props.hotel.name}</p>
      <p>address: {props.hotel.address}</p>
      <p>rating: {props.hotel.rating}</p> */}
    </StyledCard>
  );
}
