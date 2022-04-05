import { useState } from "react";

const defaultValues = [5, 10, 20, 30, 50, 100];

const setValueToId = (value) => `value-${value}`;
const getValueFromId = (id) => parseInt(id.split("-")[1]);

function RowButtons() {
  const [usingCustomValue, setUsingCustomValue] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValues[0]);
  const [prevCustomValue, setPrevCustomValue] = useState("");

  const handleRowButtonClick = (e) => {
    setUsingCustomValue(false);
    const targetId = e.target.id;
    const newValue = getValueFromId(targetId);
    setSelectedValue(newValue);
  };

  const rowOfButtons = defaultValues.map((val) => {
    let classes = "row-button";
    const isActive = val === selectedValue && !usingCustomValue;
    if (isActive) {
      classes += " row-button-active";
      if (usingCustomValue) setUsingCustomValue(false);
    }
    const id = setValueToId(val);

    return (
      <button key={val} className={classes} id={id} type="button" onClick={handleRowButtonClick}>
        {val} $
      </button>
    );
  });

  const handleInputBtnChange = (e) => {
    setUsingCustomValue(true);
    const value = e.target.value;
    setSelectedValue(value);
    setPrevCustomValue(value);
  };

  const handleInputBtnFocus = () => {
    setUsingCustomValue(true);
  };

  const handleInputBtnClick = () => {
    setUsingCustomValue(true);
    if (prevCustomValue) setSelectedValue(prevCustomValue);
  };

  const inputBtnClasses = usingCustomValue ? "row-button row-input-button row-button-active" : "row-button row-input-button";

  const inputButton = (
    <button className={inputBtnClasses} type="button" onClick={handleInputBtnClick} style={{}}>
      <input type="number" className="row-input-button-input" onChange={handleInputBtnChange} onFocus={handleInputBtnFocus} value={prevCustomValue ? prevCustomValue : ""}></input>
      <span>$</span>
    </button>
  );

  return (
    <div className="row-buttons-container">
      {rowOfButtons}
      {inputButton}
    </div>
  );
}

export default RowButtons;
