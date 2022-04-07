import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import FormStep from "./FormStep";
import FormSubmissionSuccess from "./FormSubmissionSuccess";
import FormSubmissionError from "./FormSubmissionError";

function FormStep4() {
  const { formSubmissionError, formSubmitting } = useSelector((state) => state.global);
  return <FormStep stepId={3}>{formSubmitting ? <Loader /> : formSubmissionError ? <FormSubmissionError /> : <FormSubmissionSuccess />}</FormStep>;
}

export default FormStep4;
