import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateField } from "../helpers/validation";
import { updateForm } from "../redux";

// Constants
export const DEFAULT_VALUES = ["5", "10", "20", "30", "50", "100"];

// Helpers
const setValueToId = (value) => `value-${value}`;
const getValueFromId = (id) => id.split("-")[1];
const getActiveClass = (isActive) => (isActive ? " row-button-active" : "");

// Components
function InputButton({ usingCustomValue, setValue, setUsingCustomValue }) {
  const [prevCustomValue, setPrevCustomValue] = useState("");
  const valueError = useSelector((state) => state.form.errors.value);

  const handleInputBtnChange = (e) => {
    setUsingCustomValue(true);
    let value = e.target.value;
    validateField("value", value);
    setValue(value);
    setPrevCustomValue(value);
  };

  const handleInputBtnFocus = () => {
    setUsingCustomValue(true);
  };

  const handleInputBtnClick = () => {
    setUsingCustomValue(true);
    setValue(prevCustomValue);
  };

  const showError = valueError && usingCustomValue;
  let inputBtnClasses = "row-button row-input-button";
  if (usingCustomValue) inputBtnClasses += " row-button-active";
  if (showError) inputBtnClasses += " row-button-error";

  return (
    <button className={inputBtnClasses} type="button" onClick={handleInputBtnClick}>
      <input
        type="number"
        className="row-input-button-input"
        onChange={handleInputBtnChange}
        onFocus={handleInputBtnFocus}
        value={prevCustomValue ? prevCustomValue : ""}
      ></input>
      <span>$</span>
      {showError && <span className="row-input-button-error">{valueError} </span>}
    </button>
  );
}

function StandardButtons({ setValue, usingCustomValue, setUsingCustomValue }) {
  const { value } = useSelector((state) => state.form);

  const handleRowButtonClick = (e) => {
    setUsingCustomValue(false);
    const targetId = e.target.id;
    const newValue = getValueFromId(targetId);
    setValue(newValue);
  };

  const standardButtons = DEFAULT_VALUES.map((val) => {
    const isActive = val === value && !usingCustomValue;
    if (isActive && usingCustomValue) setUsingCustomValue(false);

    return (
      <button key={val} className={"row-button" + getActiveClass(isActive)} id={setValueToId(val)} type="button" onClick={handleRowButtonClick}>
        {val} $
      </button>
    );
  });

  return standardButtons;
}

// Main component
function RowButtons() {
  const dispatch = useDispatch();
  const [usingCustomValue, setUsingCustomValue] = useState(false);

  const setValue = (newValue) => {
    const payload = { value: newValue };
    dispatch(updateForm(payload));
  };

  return (
    <div className="row-buttons-container">
      <StandardButtons setValue={setValue} usingCustomValue={usingCustomValue} setUsingCustomValue={setUsingCustomValue} />
      <InputButton usingCustomValue={usingCustomValue} setValue={setValue} setUsingCustomValue={setUsingCustomValue} />
    </div>
  );
}

export default RowButtons;
