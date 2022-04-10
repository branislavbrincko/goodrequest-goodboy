import React from "react";
import { MainHeading } from "../../MainHeading.styled";

function FormSubmissionError() {
  return (
    <>
      <MainHeading>Chyba :( </MainHeading>
      <div className="submission-result submission-result-error">Pri odosielaní formulára nastala chyba. Skúste to neskôr...</div>
    </>
  );
}

export default FormSubmissionError;
