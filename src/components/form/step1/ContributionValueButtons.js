import { useDispatch } from "react-redux";
import { updateForm } from "../../../redux/formSlice";
import RowButtonsStandard from "./RowButtonsStandard";
import RowButtonWithInput from "./RowButtonWithInput";

// Main component
function RowButtons() {
  const dispatch = useDispatch();

  const setUseCustomValue = (newValue) => dispatch(updateForm({ useCustomValue: newValue }));
  const setValue = (newValue) => dispatch(updateForm({ value: newValue }));

  return (
    <div className="row-buttons-container">
      <RowButtonsStandard setValue={setValue} setUseCustomValue={setUseCustomValue} />
      <RowButtonWithInput setValue={setValue} setUseCustomValue={setUseCustomValue} />
    </div>
  );
}

export default RowButtons;
