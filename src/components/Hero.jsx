import React from "react";

import Search from "./Search";
import { StyledHero } from "../styled-components/StyledHero";

import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <StyledHero>
      <img src={hero} alt="developer-tours" />
      <div>
        <h1>developer tours</h1>
        <h2>so where do you want to go?</h2>
      </div>
      <Search />
    </StyledHero>
  );
}
