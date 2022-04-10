import styled from "styled-components";

export const InputErrorMessageStyled = styled.div`
  color: var(--error-color);
  font-size: 1.6rem;
  padding-left: 2.4rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  transition: all var(--transition-base-ms);
  /* Based on props */
  height: ${({ active }) => (active ? "1.8rem" : "0")};
`;
