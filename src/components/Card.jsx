import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <p>name: {props.hotel.name}</p>
      <p>address: {props.hotel.address}</p>
      <p>rating: {props.hotel.rating}</p>

      {/* <p>amenities: {props.hotel.amenities}</p> */}
    </div>
  );
}
