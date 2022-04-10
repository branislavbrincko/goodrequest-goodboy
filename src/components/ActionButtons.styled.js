import styled from "styled-components";

export const ActionButtonsContainer = styled.div`
  display: flex;
  margin-top: 8rem;

  justify-content: ${({ currentStep }) => {
    if (currentStep === 0) return "flex-end";
    if (currentStep === 3) return "center";
    return "space-between";
  }};
`;

export const ActionButtonStyled = styled.button`
  height: 6rem;
  padding: 2rem 2.5rem;
  border-radius: 1000px;
  font-size: 1.4rem;
  font-weight: 800;
  box-shadow: var(--box-shadow-2);
  transition: all var(--transition-base-ms);

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--box-shadow-3);
  }

  &:focus {
    outline: 1px solid var(--primary-color-dark);
    border-color: var(--primary-color);
  }
`;

export const ActionButtonNextStyled = styled(ActionButtonStyled)`
  background-color: var(--primary-color);
  color: var(--white);

  &:disabled {
    background-color: var(--secondary-text-color);
    transform: none;
    cursor: not-allowed;
  }
`;

export const ActionButtonBackStyled = styled(ActionButtonStyled)`
  background-color: var(--primay-color-light);
  display: ${({ currentStep }) => currentStep === 0 && "hidden"};
`;
