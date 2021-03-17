import styled from "styled-components";
import device from "./device";
import colors from "./colors";
import { lighten } from "polished";

export const StyledList = styled.main`
  width: 90%;
  max-width: 1000px;
  margin: 40rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    @media ${device.tabletLandscape} {
      margin: calc(4 * var(--space-m)) auto;
    }
    @media ${device.desktop} {
      margin: var(--space-m) auto;
    }
  }

  @media ${device.tabletLandscape} {
    margin: calc(4 * var(--space-m)) auto;
  }
`;

export const StyledFiltering = styled.section`
  background-color: ${lighten(0.28, colors.bgBlue)};
  border-radius: 10px;
  width: 80%;
  display: flex;
  padding: var(--space-m);
  justify-content: space-between;

  label {
    padding-left: 5px;
  }
`;
