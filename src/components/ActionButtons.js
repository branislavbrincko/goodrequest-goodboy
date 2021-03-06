import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { resetForm } from "../redux/formSlice";
import { createContribution, setCurrentStep } from "../redux/globalSlice";
import { ActionButtonBackStyled, ActionButtonNextStyled, ActionButtonsContainer } from "./ActionButtons.styled";
import { validateStep, isFormStepInvalid } from "./form/formValidation";

function ActionButtons() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currentStep } = useSelector((state) => state.global);
  const { consent } = useSelector((state) => state.form);
  const { form } = useSelector((state) => state);

  // Functions
  const setStep = (stepId) => {
    dispatch(setCurrentStep(stepId));
  };

  const goToPrevStep = () => {
    if (currentStep > 0) setStep(currentStep - 1);
  };

  const goToNextStep = () => {
    const stepValid = validateStep(currentStep);
    if (stepValid) setStep(currentStep + 1);
  };

  const goToFirstStep = () => {
    dispatch(resetForm());
    setStep(0);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(createContribution(form));
    goToNextStep();
  };

  const isFormStep = (stepId) => stepId === currentStep;

  // Values
  const submitButtonDisabled = consent;
  const nextButtonDisabled = isFormStepInvalid(currentStep);

  // Components
  const ButtonBack = () => (
    <ActionButtonBackStyled type="button" onClick={goToPrevStep}>
      {t("Back")}
    </ActionButtonBackStyled>
  );

  const ButtonAgain = () => (
    <ActionButtonNextStyled type="button" onClick={goToFirstStep}>
      {t("GoBackToBeginning")}
    </ActionButtonNextStyled>
  );

  const ButtonSubmit = () => (
    <ActionButtonNextStyled type="submit" onClick={submitForm} disabled={!submitButtonDisabled}>
      {t("SubmitForm")}
    </ActionButtonNextStyled>
  );

  const ButtonNext = () => (
    <ActionButtonNextStyled type="button" onClick={goToNextStep} disabled={nextButtonDisabled}>
      {t("Continue")}
    </ActionButtonNextStyled>
  );

  // Component
  return (
    <ActionButtonsContainer currentStep={currentStep}>
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
    </ActionButtonsContainer>
  );
}

export default ActionButtons;
