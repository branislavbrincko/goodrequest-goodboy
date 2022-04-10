import React from "react";
import { useSelector } from "react-redux";
import { InputErrorMessageStyled } from "./InputErrorMessage.styled";

function InputErrorMessage({ fieldName }) {
  const errors = useSelector((state) => state.form.errors);
  const error = errors[fieldName];
  const active = !!error;

  return <InputErrorMessageStyled active={active}>{error}</InputErrorMessageStyled>;
}

export default InputErrorMessage;
