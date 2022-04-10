import { useDispatch } from "react-redux";
import { updateForm } from "../../../redux/formSlice";
import { InputWrapper } from "../../InputWrapper.styled";
import RowButtonsStandard from "./RowButtonsStandard";
import RowButtonWithInput from "./RowButtonWithInput";

// Main component
function RowButtons() {
  const dispatch = useDispatch();

  const setUseCustomValue = (newValue) => dispatch(updateForm({ useCustomValue: newValue }));
  const setValue = (newValue) => dispatch(updateForm({ value: newValue }));

  return (
    <InputWrapper>
      <div className="row-buttons-container">
        <RowButtonsStandard setValue={setValue} setUseCustomValue={setUseCustomValue} />
        <RowButtonWithInput setValue={setValue} setUseCustomValue={setUseCustomValue} />
      </div>
    </InputWrapper>
  );
}

export default RowButtons;
