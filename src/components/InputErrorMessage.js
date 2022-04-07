import React from "react";
import { useSelector } from "react-redux";

function InputErrorMessage({ fieldName }) {
  const errors = useSelector((state) => state.form.errors);
  return <div className="input-error-message"> {errors[fieldName]} </div>;
}

export default InputErrorMessage;
