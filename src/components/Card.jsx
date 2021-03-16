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
        <img src={props.hotel.img} alt={props.hotel.name} />
      </figure>
      <div className="textContainer">
        <h2>{props.hotel.name}</h2>

        {renderSwitch(props.hotel.rating)}

        {/* <p>{hotels[0].address}</p> */}

        <p>{props.hotel.desc}</p>
        {renderAmenities(props.hotel.amenities)}
      </div>
    </StyledCard>
  );
}
