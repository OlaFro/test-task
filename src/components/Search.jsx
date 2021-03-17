import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { appContext } from "./Context";

import { StyledSearch, StyledButton } from "../styled-components/StyledSearch";

export default function Search() {
  const { setHotels, noItemsFlag, setNoItemsFlag } = useContext(appContext);
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState({
    region: "",
    start: "",
    end: "",
    rating: "",
  });
  const [dateFlag, setDateFlag] = useState({ start: false, end: false });

  var URL = "https://afrecruitingfront-webapi-prod.azurewebsites.net/";

  // fetching the list of the locations on load
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

  //rendering options of select based on fetched cities
  function showOptions() {
    return cities.map((elem, index) => (
      <option value={elem} key={index}>
        {elem}
      </option>
    ));
  }

  //reading the user inputs for query
  function readInputs(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
    if (e.target.name === "start") {
      setDateFlag({ ...dateFlag, start: false });
    } else if (e.target.name === "end") {
      setDateFlag({ ...dateFlag, end: false });
    }
  }

  //sending the query
  function handleQuery() {
    if (query.start && query.end) {
      axios
        .get(
          `${URL}/api/Availabilities?startDate=${query.start}&endDate=${query.end}&skip=0&top=10`,

          {
            headers: {
              ContentType: "application/json",
              "X-DevTours-Developer": "Ola",
            },
          }
        )

        // getting available offers in the giving time
        .then((res) => {
          if (res.data.items.length) {
            setNoItemsFlag(false);
            for (const entry of res.data.items) {
              // sending request for details for each of the hotel
              axios
                .get(`${URL}/api/Hotel/${entry.hotelId}`, {
                  headers: {
                    ContentType: "application/json",
                    "X-DevTours-Developer": "Ola",
                  },
                })
                .then((res) => {
                  //console.log(res.data);

                  setHotels((prevHotel) => {
                    return [
                      ...prevHotel,
                      {
                        name: res.data.name,
                        rating: res.data.rating,
                        amenities: res.data.amenities,
                        address: res.data.address,
                        img: res.data.images[0].lowres,
                        desc: res.data.description,
                      },
                    ];
                  });
                });
            }
          } else {
            setNoItemsFlag(true);
          }
        })
        .catch((err) => {
          throw err;
        });
    } else {
      setDateFlag({ start: true, end: true });
    }
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
          <label id="start">Day of Arrival*</label>
          <input
            onChange={(e) => readInputs(e)}
            type="date"
            id="start"
            name="start"
            required
          />
          {dateFlag.start ? <small>Required</small> : null}
        </div>
        <div>
          <label id="end">Day of Departure*</label>
          <input
            onChange={(e) => readInputs(e)}
            type="date"
            id="end"
            name="end"
            required
          />
          {dateFlag.end ? <small>Required</small> : null}
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
