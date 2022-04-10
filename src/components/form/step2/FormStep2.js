import React from "react";
import InputSectionInfo from "../../InputSectionInfo";
import UserInfoInputs from "./UserInfoInputs";
import FormStep from "../FormStep";

function FormStep2() {
  const style = { marginBottom: "5rem" };

  return (
    <FormStep stepId={1}>
      <h1 className="main-heading" style={style}>
        Potrebujeme od Vás zopár informácií
      </h1>
      <InputSectionInfo title="O vás" />
      <UserInfoInputs />
    </FormStep>
  );
}

export default FormStep2;
