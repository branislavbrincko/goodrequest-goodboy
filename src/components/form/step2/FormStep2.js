import React from "react";
import InputSectionInfo from "../../InputSectionInfo";
import UserInfoInputs from "./UserInfoInputs";
import FormStep from "../FormStep";
import { MainHeading } from "../../MainHeading.styled";

function FormStep2() {
  return (
    <FormStep stepId={1}>
      <MainHeading>Potrebujeme od Vás zopár informácií</MainHeading>
      <InputSectionInfo title="O vás" />
      <UserInfoInputs />
    </FormStep>
  );
}

export default FormStep2;
