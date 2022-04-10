import styled from "styled-components";

export const FormStepStyled = styled.div`
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  opacity: ${({ active }) => (active ? 1 : 0)};
  position: absolute;
  transition: all var(--transition-long-ms);
  width: 100%;
`;
