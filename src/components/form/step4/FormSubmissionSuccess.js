import React from "react";
import { useTranslation } from "react-i18next";
import { MainHeading } from "../../MainHeading.styled";
import Summary from "../../Summary";
import { FormSubmissionResult } from "./FormSubmissionResult.styled";

function FormSubmissionSuccess() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeading>{t("Done")}</MainHeading>
      <FormSubmissionResult success>{t("ThankYouForContribution")}</FormSubmissionResult>
      <Summary />
    </>
  );
}

export default FormSubmissionSuccess;
