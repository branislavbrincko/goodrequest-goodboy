import styled from "styled-components";

export const MainHeading = styled.h1`
  font-size: 4.6rem;
  color: var(--black);
  font-weight: 700;

  margin-bottom: ${({ smallBottomMargin }) => (smallBottomMargin ? "3.25rem" : "5rem")};
`;
