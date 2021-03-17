import React, { useState } from "react";
import { StyledCard } from "../styled-components/StyledCard";

export default function Card(props) {
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
    let amenities = [];
    for (let key of Object.keys(obj)) {
      if (obj[key]) {
        amenities.push(key.replace("_", " "));
      }
    }

    return amenities.map((elem) => {
      return (
        <p className="amenity" key={elem}>
          {elem}
        </p>
      );
    });
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
        <div className="amenities">
          {renderAmenities(props.hotel.amenities)}
        </div>
      </div>
    </StyledCard>
  );
}
