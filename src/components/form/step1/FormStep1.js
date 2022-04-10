import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import InputSectionInfo from "../../InputSectionInfo";
import { MainHeading } from "../../MainHeading.styled";
import FormStep from "../FormStep";
import ContributionDoubleButton from "./ContributionDoubleButton";
import ContributionValueButtons from "./ContributionValueButtons";
import ShelterSelect from "./ShelterSelect";

function FormStep1() {
  const { useShelterID } = useSelector((state) => state.form);
  const { t } = useTranslation();

  return (
    <FormStep stepId={0}>
      <MainHeading smallBottomMargin>{t("ChooseHowToContribute")}</MainHeading>
      <ContributionDoubleButton />
      <InputSectionInfo title={t("AboutProject")} required={useShelterID} />
      <ShelterSelect />
      <InputSectionInfo title={t("AmountIwantToContribute")} />
      <ContributionValueButtons />
    </FormStep>
  );
}

export default FormStep1;
