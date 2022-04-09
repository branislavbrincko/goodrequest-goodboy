import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../redux/formSlice";
import RowButtonsStandard from "./RowButtonsStandard";
import RowButtonWithInput from "./RowButtonWithInput";

// Main component
function RowButtons() {
  const dispatch = useDispatch();
  const useCustomValue = useSelector((state) => state.form.useCustomValue);

  const setUseCustomValue = (newValue) => dispatch(updateForm({ useCustomValue: newValue }));
  const setValue = (newValue) => dispatch(updateForm({ value: newValue }));

  return (
    <div className="row-buttons-container">
      <RowButtonsStandard setValue={setValue} usingCustomValue={useCustomValue} setUseCustomValue={setUseCustomValue} />
      <RowButtonWithInput useCustomValue={useCustomValue} setValue={setValue} setUseCustomValue={setUseCustomValue} />
    </div>
  );
}

export default RowButtons;
