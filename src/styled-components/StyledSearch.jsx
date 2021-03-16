import styled from "styled-components";

import colors from "./colors";
import device from "./device";

export const StyledSearch = styled.section`
  width: 80%;

  background-color: ${colors.blue};
  color: white;
  display: flex;
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.tabletLandscape} {
    width: 40%;
    top: 80%;
    left: 50%;
  }

  @media ${device.desktop} {
    width: 100%;
    max-width: 1000px;
    flex-direction: row;
    left: 20%;
    top: 70%;
    transform: translateX(0);
    background-color: rgba(24, 63, 216, 0.85);
  }

  > .hero {
  }
  > div {
    margin: 20px;
    display: flex;
    flex-direction: column;
  }

  label {
    text-transform: uppercase;
  }

  > div > select,
  > div > input {
    font-family: "Rubik", sans-serif;
    font-size: 1rem;
    padding: 10px;
    border: none;
    margin-top: 15px;
    width: 180px;
    background-color: white;
    border-radius: 15px;
    color: ${colors.blue};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledButton = styled.button`
  background-color: white;
  color: ${colors.blue};
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  margin: 1rem;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  :hover {
    background-color: ${colors.blue};
    color: white;
  }
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;
