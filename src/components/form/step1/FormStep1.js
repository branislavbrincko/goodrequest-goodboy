import React from "react";
import { useSelector } from "react-redux";
import ContributionDoubleButton from "./ContributionDoubleButton";
import InputSectionInfo from "../../InputSectionInfo";
import ContributionValueButtons from "./ContributionValueButtons";
import ShelterSelect from "./ShelterSelect";
import FormStep from "../FormStep";
import { MainHeading } from "../../MainHeading.styled";

function FormStep1() {
  const { useShelterID } = useSelector((state) => state.form);

  return (
    <FormStep stepId={0}>
      <MainHeading smallBottomMargin>Vyberte si možnosť, ako chcete prispieť</MainHeading>
      <ContributionDoubleButton />
      <InputSectionInfo title="O projekte" required={useShelterID} />
      <ShelterSelect />
      <InputSectionInfo title="Suma, ktorou chcem prispieť" />
      <div className="input-wrapper">
        <ContributionValueButtons />
      </div>
    </FormStep>
  );
}

export default FormStep1;
