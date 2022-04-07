import React from "react";
import InputSectionInfo from "../../InputSectionInfo";
import UserInfoSubform from "./UserInfoSubform";
import FormStep from "../FormStep";

function FormStep2() {
  return (
    <FormStep stepId={1}>
      <h1 className="main-heading">Potrebujeme od Vás zopár informácií</h1>
      <InputSectionInfo title="O vás" />
      <UserInfoSubform />
    </FormStep>
  );
}

export default FormStep2;
