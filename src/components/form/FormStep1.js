import React from "react";
import { useSelector } from "react-redux";
import DoubleButton from "../DoubleButton";
import InputSectionInfo from "../InputSectionInfo";
import RowButtons from "../RowButtons";
import SelectInput from "../SelectInput";
import FormStep from "./FormStep";

function FormStep1() {
  const { useShelterID } = useSelector((state) => state.form);

  return (
    <FormStep stepId={0}>
      <h1 className="main-heading">Vyberte si možnosť, ako chcete prispieť</h1>
      <DoubleButton />
      <InputSectionInfo title="O projekte" required={useShelterID} />
      <SelectInput />
      <InputSectionInfo title="Suma, ktorou chcem prispieť" />
      <div className="input-wrapper">
        <RowButtons />
      </div>
    </FormStep>
  );
}

export default FormStep1;
