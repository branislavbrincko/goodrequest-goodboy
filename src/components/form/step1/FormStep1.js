import React from "react";
import { useSelector } from "react-redux";
import ContributionDoubleButton from "./ContributionDoubleButton";
import InputSectionInfo from "../../InputSectionInfo";
import ContributionValueButtons from "./ContributionValueButtons";
import ShelterSelect from "./ShelterSelect";
import FormStep from "../FormStep";

function FormStep1() {
  const { useShelterID } = useSelector((state) => state.form);

  return (
    <FormStep stepId={0}>
      <h1 className="main-heading">Vyberte si možnosť, ako chcete prispieť</h1>
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
