import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  StyledSearch,
  StyledButton,
  StyledDates,
} from "../styled-components/StyledSearch";
export default function Search() {
  const [data, setData] = useState("");
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState({
    region: "",
    start: "",
    end: "",
    rating: "",
  });

  function getData() {
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

  function handleQuery() {}

  return (
    <>
      <button onClick={getData}>get data</button>
      <StyledSearch>
        <div>
          <label id="region">Region</label>
          <select
            onChange={(e) =>
              setQuery({ ...query, [e.target.name]: e.target.value })
            }
            name="region"
            id="region"
          >
            <option>Choose city</option>
            {cities ? showOptions() : null}
          </select>
        </div>

        <div>
          <label id="start">Day of Arrival</label>
          <input
            onChange={(e) =>
              setQuery({ ...query, [e.target.name]: e.target.value })
            }
            type="date"
            id="start"
            name="start"
          />
        </div>
        <div>
          <label id="end">Day of Departure</label>
          <input
            onChange={(e) =>
              setQuery({ ...query, [e.target.name]: e.target.value })
            }
            type="date"
            id="end"
            name="end"
          />
        </div>

        <div>
          <label id="rating">Rating</label>
          <select
            onChange={(e) =>
              setQuery({ ...query, [e.target.name]: e.target.value })
            }
            name="rating"
            id="rating"
          >
            <option>Choose rating</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>
        </div>
        <StyledButton onClick={handleQuery}> Search</StyledButton>
      </StyledSearch>
    </>
  );
}
