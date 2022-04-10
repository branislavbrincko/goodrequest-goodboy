import styled from "styled-components";

export const RowButton = styled.button`
  flex-grow: 1;
  height: 5rem;
  font-size: 1.6rem;
  border: 1px solid var(--light-grey);
  background-color: transparent;
  padding: 1rem;
  border-radius: 0.8rem;
  font-weight: 800;
  transition: all var(--transition-base-ms);
  position: relative;
  margin: 0.2rem;

  /* Based on props */
  color: ${({ active }) => (active ? "var(--white)" : "var(--black)")};
  background-color: ${({ active }) => (active ? "var(--primary-color)" : "transparent")};

  &:hover {
    border-color: var(--primary-color);
  }

  &:focus {
    border-color: ${({ active }) => (active ? "var(--primary-color-dark)" : "var(--primary-color)")};
    outline: none;
  }
`;

export const RowInputButton = styled(RowButton)`
  display: flex;
  align-items: center;
  width: 8.5rem;
  max-width: 20rem;

  border-color: ${({ error }) => (error ? "var(--error-color)" : "var(--light-grey)")};
`;

export const RowInputButtonWrapper = styled.div`
  position: relative;
`;

export const RowInputButtonInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--light-grey);
  background-color: transparent;
  max-width: 85%;
  font-weight: 800;
  margin-right: 4px;
  margin-top: 2px;
  text-align: center;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus {
    /* outline: 1px solid var(--white); */
    outline: none;
    border: 1px solid var(--white);
    border-radius: 0.4rem;
  }
`;

export const RowInputButtonError = styled.div`
  font-size: 1.4rem;
  position: absolute;
  bottom: 0rem;
  right: 0;
  top: 120%;
  width: 50rem;
  text-align: right;
  transition: all var(--transition-long-ms);
  color: ${({ isError }) => (isError ? "var(--error-color)" : "transparent")};
`;
