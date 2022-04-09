import { useDispatch } from "react-redux";
import { validateField } from "../components/form/formValidation";
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

  return { handleInputChange };
}

export default useForm;
