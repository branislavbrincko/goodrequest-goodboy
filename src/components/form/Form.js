import StepIndicator from "../StepIndicator";
import FormStep1 from "./step1/FormStep1";
import FormStep2 from "./step2/FormStep2";
import FormStep3 from "./step3/FormStep3";
import FormStep4 from "./step4/FormStep4";

function Form() {
  return (
    <form autoComplete="off" className="form">
      <StepIndicator />
      <FormStep1 />
      <FormStep2 />
      <FormStep3 />
      <FormStep4 />
    </form>
  );
}

export default Form;
