import styled from "styled-components";
import hero from "../assets/hero.jpg";

export const StyledHero = styled.header`
  width: 80%;
  //max-width: 1200px;
  margin: auto;
  position: relative;

  > img {
    width: 100%;
  }

  > div {
    position: absolute;
    color: white;
    top: 60%;
    left: 28%;
    transform: translateX(-50%);
    h1 {
      margin: 0 0 5px 0;
      text-decoration: underline;
      letter-spacing: 1px;
      text-align: left;
    }
    h2 {
      margin-top: 0;
    }
  }
`;
