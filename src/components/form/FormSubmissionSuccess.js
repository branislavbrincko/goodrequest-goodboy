import React from "react";
import Summary from "../Summary";

function FormSubmissionSuccess() {
  return (
    <>
      <h1 className="main-heading">Hotovo!</h1>
      <div className="submission-result submission-result-success">Ďakujeme za Váš príspevok.</div>
      <Summary />
    </>
  );
}

export default FormSubmissionSuccess;
