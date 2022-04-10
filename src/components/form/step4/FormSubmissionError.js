import React from "react";
import { useTranslation } from "react-i18next";
import { MainHeading } from "../../MainHeading.styled";
import { FormSubmissionResult } from "./FormSubmissionResult.styled";

function FormSubmissionError() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeading>{t("Error")} :( </MainHeading>
      <FormSubmissionResult error>{t("ErrorWhileSubmittingTryAgain")}</FormSubmissionResult>
    </>
  );
}

export default FormSubmissionError;
