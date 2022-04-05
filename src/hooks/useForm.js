import { useDispatch } from "react-redux";
import { updateForm } from "../redux";

function useForm(options = { shouldParseToInt: false }) {
  const { shouldParseToInt } = options;
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = shouldParseToInt ? parseInt(e.target.value) : e.target.value;
    const payload = { [e.target.id]: value };
    dispatch(updateForm(payload));
  };

  return { handleInputChange };
}

export default useForm;
