import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { InputErrorMessageStyled } from "./InputErrorMessage.styled";

function InputErrorMessage({ fieldName }) {
  const errors = useSelector((state) => state.form.errors);
  const { t } = useTranslation();

  const error = errors[fieldName];
  const active = !!error;

  return <InputErrorMessageStyled active={active}>{t(error)}</InputErrorMessageStyled>;
}

export default InputErrorMessage;
