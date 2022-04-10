import React from "react";
import { useSelector } from "react-redux";
import { NUMBER_OF_STEPS } from "./form/formDefinition";
import { StepIndicatorItemStyled, StepIndicatorStyled } from "./StepIndicator.styled";

function StepIndicator() {
  const { currentStep } = useSelector((state) => state.global);

  return (
    <StepIndicatorStyled>
      {Array.from(Array(NUMBER_OF_STEPS), (_l, i) => {
        return <StepIndicatorItemStyled key={i} active={currentStep === i} final={i === NUMBER_OF_STEPS - 1 && currentStep === NUMBER_OF_STEPS} />;
      })}
    </StepIndicatorStyled>
  );
}

export default StepIndicator;
