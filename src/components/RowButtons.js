import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_VALUES } from "../formDefinition";
import { validateField } from "../helpers/formValidation";
import { updateForm } from "../store";

// Helpers
const setValueToId = (value) => `value-${value}`;
const getValueFromId = (id) => id.split("-")[1];
const getActiveClass = (isActive) => (isActive ? " row-button-active" : "");

// Components
function InputButton({ setValue, useCustomValue, setUseCustomValue }) {
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

function StandardButtons({ setValue, useCustomValue, setUseCustomValue }) {
  const { value } = useSelector((state) => state.form);

  const handleRowButtonClick = (e) => {
    setUseCustomValue(false);
    const targetId = e.target.id;
    const newValue = getValueFromId(targetId);
    setValue(newValue);
  };

  const standardButtons = DEFAULT_VALUES.map((val) => {
    const isActive = val === value && !useCustomValue;
    if (isActive && useCustomValue) setUseCustomValue(false);

    return (
      <button key={val} className={"row-button" + getActiveClass(isActive)} id={setValueToId(val)} type="button" onClick={handleRowButtonClick}>
        {val} €
      </button>
    );
  });

  return standardButtons;
}

// Main component
function RowButtons() {
  const dispatch = useDispatch();
  const useCustomValue = useSelector((state) => state.form.useCustomValue);

  const setUseCustomValue = (newValue) => dispatch(updateForm({ useCustomValue: newValue }));
  const setValue = (newValue) => dispatch(updateForm({ value: newValue }));

  return (
    <div className="row-buttons-container">
      <StandardButtons setValue={setValue} usingCustomValue={useCustomValue} setUseCustomValue={setUseCustomValue} />
      <InputButton useCustomValue={useCustomValue} setValue={setValue} setUseCustomValue={setUseCustomValue} />
    </div>
  );
}

export default RowButtons;
