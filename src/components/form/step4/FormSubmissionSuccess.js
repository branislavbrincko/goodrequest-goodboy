import React from "react";
import { MainHeading } from "../../MainHeading.styled";
import Summary from "../../Summary";
import { FormSubmissionResult } from "./FormSubmissionResult.styled";

function FormSubmissionSuccess() {
  return (
    <>
      <MainHeading>Hotovo!</MainHeading>
      <FormSubmissionResult success>Ďakujeme za Váš príspevok.</FormSubmissionResult>
      <Summary />
    </>
  );
}

export default FormSubmissionSuccess;
