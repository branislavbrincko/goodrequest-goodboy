import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { NUMBER_OF_STEPS } from "./form/formDefinition";

function StepIndicator() {
  const { currentStep } = useSelector((state) => state.global);

  const getClasses = (stepId) =>
    classNames("step-indicator-item", {
      "step-indicator-item-active": currentStep === stepId,
      // when on form submission summary page, we take the last indicator item and animate it as final one
      "step-indicator-item-final": stepId === NUMBER_OF_STEPS - 1 && currentStep === NUMBER_OF_STEPS,
    });

  return (
    <div className="step-indicator">
      {Array.from(Array(NUMBER_OF_STEPS), (_l, i) => {
        return <div key={i} className={getClasses(i)}></div>;
      })}
    </div>
  );
}

export default StepIndicator;
