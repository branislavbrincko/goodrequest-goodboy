import ActionButtons from "../ActionButtons";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";

function Form() {
  return (
    <form>
      <FormStep1 />
      <FormStep2 />
      <FormStep3 />
      <FormStep4 />
      <ActionButtons />
    </form>
  );
}

export default Form;
