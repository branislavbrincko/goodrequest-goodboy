import React from "react";
import { MainHeading } from "../../MainHeading.styled";
import { FormSubmissionResult } from "./FormSubmissionResult.styled";

function FormSubmissionError() {
  return (
    <>
      <MainHeading>Chyba :( </MainHeading>
      <FormSubmissionResult error>Pri odosielaní formulára nastala chyba. Skúste to neskôr...</FormSubmissionResult>
    </>
  );
}

export default FormSubmissionError;
