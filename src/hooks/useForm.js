import { useDispatch } from "react-redux";
import { updateForm } from "../redux";

function useForm() {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const payload = { [e.target.id]: e.target.value };
    dispatch(updateForm(payload));
  };

  return { handleInputChange };
}

export default useForm;
