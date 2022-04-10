import React from "react";
import { useTranslation } from "react-i18next";
import InputSectionInfo from "../../InputSectionInfo";
import { MainHeading } from "../../MainHeading.styled";
import FormStep from "../FormStep";
import UserInfoInputs from "./UserInfoInputs";

function FormStep2() {
  const { t } = useTranslation();

  return (
    <FormStep stepId={1}>
      <MainHeading>{t("WeNeedSomeInformationAboutYou")}</MainHeading>
      <InputSectionInfo title="O vás" />
      <UserInfoInputs />
    </FormStep>
  );
}

export default FormStep2;
