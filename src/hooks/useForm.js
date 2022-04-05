import { useDispatch } from "react-redux";
import { validateField } from "../helpers/validation";
import { updateForm } from "../redux";

function useForm(options = { shouldParseToInt: false }) {
  const { shouldParseToInt } = options;
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const fieldName = e.target.id;
    const value = e.target.value;

    // validate input field
    validateField(fieldName, value);

    // update input field in store
    const valueForPayload = shouldParseToInt ? parseInt(value) : value;
    const payload = { [fieldName]: valueForPayload };
    dispatch(updateForm(payload));
  };

  return { handleInputChange };
}

export default useForm;
