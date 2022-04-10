import React from "react";
import { useSelector } from "react-redux";
import { FormStepStyled } from "./FormStep.styled";

function FormStep({ stepId, children }) {
  const { currentStep } = useSelector((state) => state.global);

  return <FormStepStyled active={stepId === currentStep}>{children}</FormStepStyled>;
}

export default FormStep;
