import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorField } from "../../../redux/formSlice";
import { DEFAULT_VALUES } from "../../form/formDefinition";

const setValueToId = (value) => `value-${value}`;
const getValueFromId = (id) => id.split("-")[1];

function RowButtonsStandard({ setValue, useCustomValue, setUseCustomValue }) {
  const { value } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleRowButtonClick = (e) => {
    dispatch(clearErrorField("value"));
    setUseCustomValue(false);
    const targetId = e.target.id;
    const newValue = getValueFromId(targetId);
    setValue(newValue);
  };

  const standardButtons = DEFAULT_VALUES.map((val) => {
    const isActive = val === value && !useCustomValue;
    if (isActive && useCustomValue) setUseCustomValue(false);

    const standardButtonClasses = classNames("row-button", { "row-button-active": isActive });

    return (
      <button key={val} className={standardButtonClasses} id={setValueToId(val)} type="button" onClick={handleRowButtonClick}>
        {val} €
      </button>
    );
  });

  return standardButtons;
}

export default RowButtonsStandard;
