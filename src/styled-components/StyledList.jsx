import styled from "styled-components";
import device from "./device";

export const StyledList = styled.main`
  width: 90%;
  max-width: 1000px;
  margin: 40rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tabletLandscape} {
    margin: calc(4 * var(--space-m)) auto;
  }
`;
