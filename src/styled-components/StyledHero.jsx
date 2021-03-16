import styled from "styled-components";
import device from "./device";

export const StyledHero = styled.header`
  //width: 80%;
  max-width: 1800px;
  margin: auto;
  position: relative;

  > img {
    width: 100%;
  }

  > div {
    position: absolute;
    color: white;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    @media ${device.desktop} {
      left: 20%;
      transform: translateX(0);
    }

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
