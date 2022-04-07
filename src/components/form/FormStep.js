import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

function FormStep({ stepId, children }) {
  const { currentStep } = useSelector((state) => state.global);

  const stepClasses = classNames("step", {
    "step-active": stepId === currentStep,
  });

  return <div className={stepClasses}>{children}</div>;
}

export default FormStep;
