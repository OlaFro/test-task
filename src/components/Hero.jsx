import React from "react";
import hero from "../assets/hero.jpg";

import { StyledHero } from "../styled-components/StyledHero";

export default function Hero() {
  return (
    <StyledHero>
      <figure className="hero">
        <img src={hero} alt="developer-tours" />
      </figure>
      {/* <h1>developer-tours</h1> */}
    </StyledHero>
  );
}
