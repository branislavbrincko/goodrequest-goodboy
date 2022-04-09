import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { validateField } from "../../form/formValidation";

function RowButtonWithInput({ setValue, useCustomValue, setUseCustomValue }) {
  const [prevCustomValue, setPrevCustomValue] = useState("");
  const valueError = useSelector((state) => state.form.errors.value);

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

  const inputButtonClasses = classNames("row-button", "row-input-button", {
    "row-button-active": useCustomValue,
    "row-button-error": showError,
  });

  const errorClasses = classNames("row-input-button-error", {
    "row-input-button-error-active": showError,
  });

  return (
    <>
      <button className={inputButtonClasses} type="button" onClick={handleInputBtnClick}>
        <input
          type="number"
          className="row-input-button-input"
          onChange={handleInputBtnChange}
          onFocus={handleInputBtnFocus}
          onBlur={handleInputBtnBlur}
          value={prevCustomValue ? prevCustomValue : ""}
        ></input>
        <span>€</span>
      </button>
      <div className={errorClasses}>{valueError}</div>
    </>
  );
}

export default RowButtonWithInput;
