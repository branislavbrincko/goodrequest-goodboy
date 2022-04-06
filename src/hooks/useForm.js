import { useDispatch } from "react-redux";
import { validateField } from "../helpers/formValidation";
import { updateForm } from "../redux";

function useForm(options = { shouldParseToInt: false }) {
  const { shouldParseToInt } = options;
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const fieldName = e.target.id;
    const value = e.target.value;

    // update input field in store
    const valueForPayload = shouldParseToInt ? parseInt(value) : value;
    const payload = { [fieldName]: valueForPayload };
    dispatch(updateForm(payload));
  };

  const handleInputBlur = (e) => {
    const fieldName = e.target.id;
    const value = e.target.value;
    validateField(fieldName, value);
  };

  return { handleInputChange, handleInputBlur };
}

export default useForm;
