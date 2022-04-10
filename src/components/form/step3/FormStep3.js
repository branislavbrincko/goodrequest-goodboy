import React from "react";
import { useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import Checkbox from "../../Checkbox";
import { CheckboxContainer } from "../../Checkbox.styled";
import { MainHeading } from "../../MainHeading.styled";
import Summary from "../../Summary";
import FormStep from "../FormStep";

function FormStep3() {
  const { handleInputChange } = useForm();
  const { consent } = useSelector((state) => state.form);

  return (
    <FormStep stepId={2}>
      <MainHeading>Skontrolujte si zadané údaje</MainHeading>
      <Summary />
      <CheckboxContainer>
        <Checkbox name="consent" label="Súhlasím so spracovaním mojich osobných údajov" checked={consent} onChange={handleInputChange} />
      </CheckboxContainer>
    </FormStep>
  );
}

export default FormStep3;
