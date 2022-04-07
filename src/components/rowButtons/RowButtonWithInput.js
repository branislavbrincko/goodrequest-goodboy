import React, { useState } from "react";
import { useSelector } from "react-redux";
import { validateField } from "../form/formValidation";

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
  let inputBtnClasses = "row-button row-input-button";
  if (useCustomValue) inputBtnClasses += " row-button-active";
  if (showError) inputBtnClasses += " row-button-error";

  return (
    <button className={inputBtnClasses} type="button" onClick={handleInputBtnClick}>
      <input
        type="number"
        className="row-input-button-input"
        onChange={handleInputBtnChange}
        onFocus={handleInputBtnFocus}
        onBlur={handleInputBtnBlur}
        value={prevCustomValue ? prevCustomValue : ""}
      ></input>
      <span>€</span>
      {showError && <span className="row-input-button-error">{valueError} </span>}
    </button>
  );
}

export default RowButtonWithInput;
