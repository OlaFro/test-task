import styled from "styled-components";

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
  }
`;
