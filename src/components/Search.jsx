import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [data, setData] = useState("");
  const [cities, setCities] = useState([]);

  function handleClick() {
    axios
      .get(
        "https://afrecruitingfront-webapi-prod.azurewebsites.net/api/Location",
        {
          headers: {
            ContentType: "application/json",
            "X-DevTours-Developer": "Ola",
          },
        }
      )
      .then((res) => {
        setData(res.data);
        let cities = [];
        for (const entry of data) {
          cities.push(entry.name);
        }
        setCities(cities);
      })
      .catch((err) => {
        throw err;
      });
  }

  function showOptions() {
    return cities.map((elem) => (
      <option value={elem} key={elem}>
        {elem}
      </option>
    ));
  }

  return (
    <div>
      <select>
        Choose city
        <option>-------</option>
        {cities ? showOptions() : null}
      </select>
      <button onClick={handleClick}> Search</button>
    </div>
  );
}
