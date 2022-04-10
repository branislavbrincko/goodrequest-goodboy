import React from "react";
import { useSelector } from "react-redux";
import InputSectionInfo from "../../InputSectionInfo";
import { MainHeading } from "../../MainHeading.styled";
import FormStep from "../FormStep";
import ContributionDoubleButton from "./ContributionDoubleButton";
import ContributionValueButtons from "./ContributionValueButtons";
import ShelterSelect from "./ShelterSelect";

function FormStep1() {
  const { useShelterID } = useSelector((state) => state.form);

  return (
    <FormStep stepId={0}>
      <MainHeading smallBottomMargin>Vyberte si možnosť, ako chcete prispieť</MainHeading>
      <ContributionDoubleButton />
      <InputSectionInfo title="O projekte" required={useShelterID} />
      <ShelterSelect />
      <InputSectionInfo title="Suma, ktorou chcem prispieť" />
      <ContributionValueButtons />
    </FormStep>
  );
}

export default FormStep1;
