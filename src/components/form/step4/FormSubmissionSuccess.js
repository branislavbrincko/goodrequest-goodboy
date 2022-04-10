import React from "react";
import Summary from "../../Summary";

function FormSubmissionSuccess() {
  const style = { marginBottom: "5rem" };

  return (
    <>
      <h1 className="main-heading" style={style}>
        Hotovo!
      </h1>
      <div className="submission-result submission-result-success">Ďakujeme za Váš príspevok.</div>
      <Summary />
    </>
  );
}

export default FormSubmissionSuccess;
