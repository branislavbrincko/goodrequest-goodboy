import React from "react";
import { MainHeading } from "../../MainHeading.styled";
import Summary from "../../Summary";

function FormSubmissionSuccess() {
  return (
    <>
      <MainHeading>Hotovo!</MainHeading>
      <div className="submission-result submission-result-success">Ďakujeme za Váš príspevok.</div>
      <Summary />
    </>
  );
}

export default FormSubmissionSuccess;
