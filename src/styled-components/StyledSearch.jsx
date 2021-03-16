import styled, { css } from "styled-components";
import { darken } from "polished";
import colors from "./colors";

export const StyledSearch = styled.section`
  width: 40%;

  background-color: rgba(24, 63, 216, 0.85);
  color: white;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1240px) {
    width: 100%;
    max-width: 1000px;
    flex-direction: row;
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
