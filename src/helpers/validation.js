import * as yup from "yup";
import { store, updateFormErrors } from "../redux";

let formValidationSchema = yup.object({
  firstName: yup.string().required("Meno je povinné pole!"),
  lastName: yup.string().required("Priezvisko je povinné pole!"),
  email: yup.string().email("Email musí mať správny tvar!").required("Email je povinné pole!"),
  phone: yup.string().required("Telefónne číslo je povinné pole!"),
  value: yup.number().typeError("Zadajte sumu!").required("Zadajte sumu!").positive("Zadajte kladnú sumu!"),
  shelterID: yup.number(),
});

const clearErrorField = (fieldName) => {
  const payload = { [fieldName]: "" };
  store.dispatch(updateFormErrors(payload));
};

const setErrorField = (errorField, errorMessage) => {
  const payload = { [errorField]: errorMessage };
  store.dispatch(updateFormErrors(payload));
};

export const validateField = (fieldName, value) => {
  try {
    const objectToValidate = { [fieldName]: value };
    formValidationSchema.validateSyncAt(fieldName, objectToValidate);
    clearErrorField(fieldName);
  } catch (error) {
    if (error.name === "ValidationError") {
      setErrorField(error.path, error.message);
    } else {
      throw new Error(error);
    }
  }
};
