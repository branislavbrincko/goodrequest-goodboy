import styled from "styled-components";

const DOUBLE_BUTTON_BORDER_RADIUS = "2.5rem";

export const DoubleButtonContainer = styled.div`
  display: flex;
  height: 18.5rem;
  margin-bottom: 6rem;
  border-radius: ${DOUBLE_BUTTON_BORDER_RADIUS};
`;

export const DoubleButtonStyled = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 1.6rem;
  padding: 2.5rem;
  text-align: left;
  font-weight: 600;

  transition: all var(--transition-base-ms);

  &:first-child {
    border-top-left-radius: ${DOUBLE_BUTTON_BORDER_RADIUS};
    border-bottom-left-radius: ${DOUBLE_BUTTON_BORDER_RADIUS};
  }

  &:last-child {
    border-top-right-radius: ${DOUBLE_BUTTON_BORDER_RADIUS};
    border-bottom-right-radius: ${DOUBLE_BUTTON_BORDER_RADIUS};
  }

  &:hover {
    transform: scale(1.015);
    box-shadow: var(--box-shadow-1);
    z-index: 10;
  }

  &:focus {
    outline: 1px solid var(--primary-color-dark);
    z-index: 15;
  }

  /* TODO: find out if following cannot be done better */
  ${({ active }) =>
    active &&
    ` 
      color: var(--white);
      background-image: linear-gradient(to bottom right, var(--primary-color), var(--primary-color-dark));
      box-shadow: var(--box-shadow-1);
      z-index: 5;
    `}

  .double-button-icon {
    color: ${(props) => (props.active ? "var(--white)" : "var(--secondary-text-color)")};
  }
`;
