import styled, { css } from "styled-components";
import { darken } from "polished";
import colors from "./colors";

export const StyledSearch = styled.section`
  width: 40%;
  margin: 0 auto 5vh auto;
  background-color: ${colors.blue};
  color: white;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1240px) {
    width: 80%;
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
  :hover {
    background-color: ${darken(0.2, "#845ec2")};
  }
  align-self: center;

  cursor: pointer;
`;
