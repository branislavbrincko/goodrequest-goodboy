import styled from "styled-components";

export const InputLabelStyled = styled.label`
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 800;

  position: absolute;
  left: 0;
  right: 0;
  top: 15px;
  margin-left: 1px;
  padding-left: 2.5rem;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  padding-top: 2.4rem;
  border-radius: 0.8rem;
  transition: border-color var(--transition-base-ms);
  border: 1px solid var(--light-grey);

  /* Based on props */
  padding-left: ${({ isPhone }) => (isPhone ? "9.4rem" : "2.5rem")};
  border-color: ${({ error }) => (error ? "var(--error-color)" : "var(--light-grey)")};

  &:focus {
    border-color: ${({ error }) => (error ? "var(--error-color)" : "var(--primary-color)")};
    outline: none;
  }
`;
