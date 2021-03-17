import styled from "styled-components";
import colors from "./colors";

export const StyledCard = styled.article`
  width: 80%;
  max-width: 600px;
  margin: var(--space-m);
  background-color: #ececec;
  border-radius: 30px;
  overflow: hidden;

  > figure {
    width: 600px;
    margin: 0;

    > img {
      width: inherit;
    }
  }
  > .textContainer {
    width: 80%;
    margin: var(--space-m);

    > .amenities {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 0.8rem;
      > .amenity {
        color: ${colors.blue};
        padding: 0 5px;
      }
    }
  }
`;
