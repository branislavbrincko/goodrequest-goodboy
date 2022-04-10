import styled from "styled-components";

export const StepIndicatorStyled = styled.div`
  display: flex;
  margin-bottom: 2.8rem;
  position: relative;
`;

export const StepIndicatorItemStyled = styled.div`
  height: 0.6rem;
  border-radius: 10px;
  margin-right: 0.5rem;
  transition: all var(--transition-base-ms);
  /* Props  */
  width: ${(props) => (props.active ? "4.4rem" : props.final ? "8rem" : "2.6rem")};
  position: ${(props) => (props.final ? "absolute" : "")};
  background: ${({ active, final }) => {
    if (active || final) return "linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), var(--primary-color)";
    return "var(--light-grey)";
  }};
`;
