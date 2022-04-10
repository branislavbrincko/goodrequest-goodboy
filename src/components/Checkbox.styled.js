import styled from "styled-components";

export const CheckboxContainer = styled.div`
  margin-top: 4.5rem;
`;

export const CheckboxStyled = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
`;

export const CheckboxInput = styled.input`
  width: 0; /* hack to hide element */
  opacity: 0;

  & + .checkbox-box {
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid var(--light-grey);
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    flex-shrink: 0;
    transition: all var(--transition-base-ms);
  }

  & + .checkbox-box > svg {
    fill: none;
    stroke: transparent;
    stroke-width: 30;
    transition: all var(--transition-base-ms);
  }

  &:checked + .checkbox-box {
    border-color: var(--primary-color);
  }

  &:focus + .checkbox-box {
    border-color: var(--primary-color);
  }

  &:hover + .checkbox-box {
    border-color: var(--primary-color);
  }

  &:checked + .checkbox-box > svg {
    stroke: var(--primary-color);
  }
`;
