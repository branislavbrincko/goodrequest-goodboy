import { useDispatch } from "react-redux";
import { validateField } from "../components/form/formValidation";
import { formatPhoneNumber, onlyPhoneNumberCharacters } from "../helpers/phoneNumber";
import { updateForm } from "../redux/formSlice";

function useForm() {
  const dispatch = useDispatch();

  const handleInputChange = (e, fieldName = null, value = null) => {
    // get fieldName and value from event if it exists
    if (e) {
      fieldName = e.target.id;
      value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    }

    // update input field in store
    const payload = { [fieldName]: value };
    dispatch(updateForm(payload));

    // validate field which sets errors fields in store
    validateField(fieldName, value);
  };

  const handlePhoneInputChange = (e) => {
    const inputValue = e.target.value;

    // input is of type string, but we don't want to allow user
    // to enter any letters, only numbers and empty character
    const valueOk = onlyPhoneNumberCharacters(inputValue);
    if (!valueOk) return;

    // format number ("123123123" -> "123 123 123")
    e.target.value = formatPhoneNumber(inputValue);
    handleInputChange(e);
  };

  return { handleInputChange, handlePhoneInputChange };
}

export default useForm;
