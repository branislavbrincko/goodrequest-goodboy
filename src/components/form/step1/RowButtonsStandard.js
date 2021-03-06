import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorField } from "../../../redux/formSlice";
import { DEFAULT_VALUES } from "../../form/formDefinition";
import { RowButton } from "./RowButton.styled";

const setValueToId = (value) => `value-${value}`;
const getValueFromId = (id) => id.split("-")[1];

function RowButtonsStandard({ setValue, setUseCustomValue }) {
  const { value, useCustomValue } = useSelector((state) => state.form);
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

    return (
      <RowButton key={val} id={setValueToId(val)} type="button" onClick={handleRowButtonClick} active={isActive}>
        {val} €
      </RowButton>
    );
  });

  return standardButtons;
}

export default RowButtonsStandard;
