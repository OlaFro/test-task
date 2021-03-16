import styled from "styled-components";
import device from "./device";

export const StyledHero = styled.header`
  max-width: 1800px;
  margin: 0 auto 50vh auto;

  @media ${device.desktop} {
    margin: 0 auto;
  }

  position: relative;

  > img {
    width: 100%;
  }

  > div {
    position: absolute;
    color: white;
    top: 65%;
    left: 20%;
    transform: translateX(-20%);
    @media ${device.tabletLandscape} {
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
    }
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
