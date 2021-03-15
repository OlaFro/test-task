import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

export const StyledSearch = styled.section`
  width: 80%;
  margin: 15vh auto 5vh auto;
  background-color: #d5cabd;
  display: flex;
  align-items: flex-start;
  border-radius: 5px;

  > div {
    margin: 20px;
  }
  > div > label {
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  > div > input,
  > div > select {
    font-family: "Rubik", sans-serif;
    font-size: 1rem;
    padding: 10px;
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
    background-color: #4e8397;
  }
  align-self: center;
`;
