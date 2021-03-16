import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  StyledSearch,
  StyledButton,
  StyledDates,
} from "../styled-components/StyledSearch";
export default function Search() {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState({
    region: "",
    start: "",
    end: "",
    rating: "",
  });
  const [hotels, setHotels] = useState([]);

  var URL = "https://afrecruitingfront-webapi-prod.azurewebsites.net/";

  useEffect(() => {
    axios
      .get(URL + "api/Location", {
        headers: {
          ContentType: "application/json",
          "X-DevTours-Developer": "Ola",
        },
      })
      .then((res) => {
        for (const entry of res.data) {
          setCities((prevCities) => {
            return [...prevCities, entry.name];
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  function showOptions() {
    return cities.map((elem) => (
      <option value={elem} key={elem}>
        {elem}
      </option>
    ));
  }

  function readInputs(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  function handleQuery() {
    axios
      .get(
        //`$https://afrecruitingfront-webapi-prod.azurewebsites.net/api/Availabilities?startDate={query.start}&endDate={query.end}&skip=0&top=10}`,

        // "api/Availabilities?location=&startDate=&endDate=&skip=0&top=10",

        // "api/Availabilities?startDate={query.start}&endDate={query.end}&skip=0&top=10",

        //"api/Availabilities?startDate=2021-09-12&endDate=2021-10-12&rating=1&skip=0&top=10",

        // "api/Availabilities?startDate=2021-01-20&endDate=2021-03-30&skip=0&top=10",

        "https://afrecruitingfront-webapi-prod.azurewebsites.net/api/Availabilities?startDate=2020-09-12T19%3A59%3A16&endDate=%202020-09-12T19%3A59%3A16&skip=0&top=10",

        {
          headers: {
            ContentType: "application/json",
            "X-DevTours-Developer": "Ola",
          },
        }
      )
      .then((res) => console.log(res.data));
  }

  return (
    <>
      <StyledSearch>
        <div>
          <label id="region">Region</label>
          <select onChange={(e) => readInputs(e)} name="region" id="region">
            <option>Choose city</option>
            {cities ? showOptions() : null}
          </select>
        </div>

        <div>
          <label id="start">Day of Arrival</label>
          <input
            onChange={(e) => readInputs(e)}
            type="date"
            id="start"
            name="start"
          />
        </div>
        <div>
          <label id="end">Day of Departure</label>
          <input
            onChange={(e) => readInputs(e)}
            type="date"
            id="end"
            name="end"
          />
        </div>

        <div>
          <label id="rating">Rating</label>
          <select onChange={(e) => readInputs(e)} name="rating" id="rating">
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
