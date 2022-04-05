import classNames from "classnames";
import React from "react";
import { NUMBER_OF_STEPS } from "../constants";
import { isFormStepValid } from "../helpers/formValidation";

function ActionButtons({ currentStepId, setCurrentStepId }) {
  // Functions
  const goToPrevStep = () => {
    if (currentStepId > 0) setCurrentStepId(currentStepId - 1);
  };

  const goToNextStep = () => {
    if (currentStepId < NUMBER_OF_STEPS - 1) setCurrentStepId(currentStepId + 1);
  };

  const isFormStep = (stepId) => stepId === currentStepId;

  // Values
  const canContinue = (isFormStep(0) && isFormStepValid(0)) || (isFormStep(1) && isFormStepValid(1));
  const canSubmit = isFormStep(2) && isFormStepValid(2);

  // Classes
  const actionButtonsContainerClasses = classNames("action-buttons-container", {
    "justify-end": isFormStep(0),
    "justify-between": !isFormStep(0),
  });

  const actionButtonBackClasses = classNames("action-button", "action-button-back", {
    "d-hidden": isFormStep(0),
  });

  // Component
  return (
    <div className={actionButtonsContainerClasses}>
      <button className={actionButtonBackClasses} type="button" onClick={goToPrevStep}>
        Späť
      </button>
      {isFormStep(2) ? (
        <button className="action-button action-button-next" type="submit" disabled={!canSubmit}>
          Odoslať formulár
        </button>
      ) : (
        <button className="action-button action-button-next" type="button" onClick={goToNextStep} disabled={!canContinue}>
          Pokračovať
        </button>
      )}
    </div>
  );
}

export default ActionButtons;
