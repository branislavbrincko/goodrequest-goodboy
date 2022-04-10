import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import Checkbox from "../../Checkbox";
import { CheckboxContainer } from "../../Checkbox.styled";
import { MainHeading } from "../../MainHeading.styled";
import Summary from "../../Summary";
import FormStep from "../FormStep";

function FormStep3() {
  const { handleInputChange } = useForm();
  const { consent } = useSelector((state) => state.form);
  const { t } = useTranslation();

  return (
    <FormStep stepId={2}>
      <MainHeading>{t("CheckYourInformation")}</MainHeading>
      <Summary />
      <CheckboxContainer>
        <Checkbox name="consent" label={t("IgiveConsent")} checked={consent} onChange={handleInputChange} />
      </CheckboxContainer>
    </FormStep>
  );
}

export default FormStep3;
