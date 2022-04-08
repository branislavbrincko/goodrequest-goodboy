import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

function InputErrorMessage({ fieldName }) {
  const errors = useSelector((state) => state.form.errors);

  const inputErrorMessageClasses = classNames("input-error-message", {
    "input-error-message-active": errors[fieldName],
  });

  return <div className={inputErrorMessageClasses}> {errors[fieldName]} </div>;
}

export default InputErrorMessage;
