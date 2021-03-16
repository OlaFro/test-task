import styled, { css } from "styled-components";
import { darken } from "polished";

export const StyledSearch = styled.section`
  width: 40%;

  margin: 10vh auto 5vh auto;
  background-color: #d5cabd;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1240px) {
    width: 80%;
    max-width: 1000px;
    flex-direction: row;
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
  }
`;

export const StyledButton = styled.button`
  background-color: #845ec2;
  color: white;
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
