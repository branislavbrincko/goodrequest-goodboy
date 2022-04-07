import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NUMBER_OF_STEPS } from "../constants";
import { isFormStepValid } from "../helpers/formValidation";
import { createContribution, resetForm, setCurrentStep } from "../redux";

function ActionButtons() {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state.global);

  const setStep = (stepId) => {
    dispatch(setCurrentStep(stepId));
  };

  // Functions
  const goToPrevStep = () => {
    if (currentStep > 0) setStep(currentStep - 1);
  };

  const goToNextStep = () => {
    if (currentStep < NUMBER_OF_STEPS - 1) setStep(currentStep + 1);
  };

  const goToFirstStep = () => {
    dispatch(resetForm());
    setStep(0);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(createContribution());
    goToNextStep();
  };

  const isFormStep = (stepId) => stepId === currentStep;

  // Values
  const canContinue = (isFormStep(0) && isFormStepValid(0)) || (isFormStep(1) && isFormStepValid(1));
  const canSubmit = isFormStep(2) && isFormStepValid(2);

  // Classes
  const actionButtonsContainerClasses = classNames("action-buttons-container", {
    "justify-end": isFormStep(0),
    "justify-between": !isFormStep(0) && !isFormStep(3),
    "justify-center": isFormStep(3),
  });
  const actionButtonBackClasses = classNames("action-button", "action-button-back", {
    "d-hidden": isFormStep(0),
  });

  const ButtonBack = () => (
    <button className={actionButtonBackClasses} type="button" onClick={goToPrevStep}>
      Späť
    </button>
  );

  const ButtonAgain = () => (
    <button className="action-button action-button-next" type="button" onClick={goToFirstStep}>
      Vrátiť sa na začiatok
    </button>
  );

  const ButtonSubmit = () => (
    <button className="action-button action-button-next" type="submit" onClick={submitForm} disabled={!canSubmit}>
      Odoslať formulár
    </button>
  );

  const ButtonNext = () => (
    <button className="action-button action-button-next" type="button" onClick={goToNextStep} disabled={!canContinue}>
      Pokračovať
    </button>
  );

  // Component
  return (
    <div className={actionButtonsContainerClasses}>
      {isFormStep(0) && <ButtonNext />}
      {isFormStep(1) && (
        <>
          <ButtonBack />
          <ButtonNext />
        </>
      )}
      {isFormStep(2) && (
        <>
          <ButtonBack />
          <ButtonSubmit />
        </>
      )}
      {isFormStep(3) && <ButtonAgain />}
    </div>
  );
}

export default ActionButtons;
