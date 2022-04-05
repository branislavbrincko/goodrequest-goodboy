import React from "react";
import { NUMBER_OF_STEPS } from "../constants";
import { isFormStepValid } from "../helpers/formValidation";

function ActionButtons({ currentStepId, setCurrentStepId }) {
  // Helpers and handlers
  const isFormStep = (stepId) => stepId === currentStepId;
  const goToPrevStep = () => {
    if (currentStepId > 0) setCurrentStepId(currentStepId - 1);
  };
  const goToNextStep = () => {
    if (currentStepId < NUMBER_OF_STEPS - 1) setCurrentStepId(currentStepId + 1);
  };

  const canContinue = (isFormStep(0) && isFormStepValid(0)) || (isFormStep(1) && isFormStepValid(1));
  const canSubmit = isFormStep(2) && isFormStepValid(2);

  // Component
  return (
    <div className="action-buttons-container">
      <button className="action-button action-button-back" type="button" onClick={goToPrevStep}>
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
