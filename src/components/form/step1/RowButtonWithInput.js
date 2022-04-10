import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { validateField } from "../../form/formValidation";
import { RowInputButton, RowInputButtonError, RowInputButtonInput, RowInputButtonWrapper } from "./RowButton.styled";

function RowButtonWithInput({ setValue, setUseCustomValue }) {
  const [prevCustomValue, setPrevCustomValue] = useState("");
  const { useCustomValue } = useSelector((state) => state.form);
  const valueError = useSelector((state) => state.form.errors.value);
  const { t } = useTranslation();

  const handleInputBtnChange = (e) => {
    setUseCustomValue(true);
    let value = e.target.value;
    validateField("value", value);
    setValue(value);
    setPrevCustomValue(value);
  };

  const handleInputBtnFocus = () => {
    setUseCustomValue(true);
  };

  const handleInputBtnClick = (e) => {
    setUseCustomValue(true);
    setValue(prevCustomValue);
    // if users clicks on button, but not inside the input, validation is run
    // so the error message is shown, so the user notices to fill out the input
    if (e.target.nodeName === "BUTTON") validateField("value", prevCustomValue);
  };

  const handleInputBtnBlur = (e) => {
    let value = e.target.value;
    validateField("value", value);
  };

  const showError = valueError && useCustomValue;

  return (
    <RowInputButtonWrapper>
      <RowInputButton type="button" onClick={handleInputBtnClick} active={useCustomValue} error={showError}>
        <RowInputButtonInput
          type="number"
          onChange={handleInputBtnChange}
          onFocus={handleInputBtnFocus}
          onBlur={handleInputBtnBlur}
          value={prevCustomValue ? prevCustomValue : ""}
        ></RowInputButtonInput>
        <span>€</span>
      </RowInputButton>
      <RowInputButtonError isError={showError}>{t(valueError)}</RowInputButtonError>
    </RowInputButtonWrapper>
  );
}

export default RowButtonWithInput;
