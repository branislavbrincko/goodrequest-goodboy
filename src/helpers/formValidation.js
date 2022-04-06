import * as yup from "yup";
import { store, updateFormErrors } from "../redux";

let formValidationSchema = yup.object({
  // 1st step
  shelterID: yup.number(),
  value: yup.number().typeError("Zadajte sumu!").required("Zadajte sumu!").positive("Zadajte kladnú sumu!"),

  // 2nd step
  firstName: yup.string().required("Meno je povinné pole!"),
  lastName: yup.string().required("Priezvisko je povinné pole!"),
  email: yup.string().email("Email musí mať správny tvar!").required("Email je povinné pole!"),
  phone: yup
    .string()
    .required("Telefónne číslo je povinné pole!")
    .matches(/^[0-9]{3} [0-9]{3} [0-9]{3}$/, "Zadajte telefónne číslo v tvare xxx xxx xxx"),
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

export const isFormStepValid = (stepId) => {
  const { form } = store.getState();
  const { errors, useShelterID, shelterID, useCustomValue, value, firstName, lastName, email, phone } = form;

  switch (stepId) {
    case 0:
      if (useShelterID && shelterID == 0) return false;
      if (useCustomValue && !value) return false;
      return true;

    case 1:
      if (!firstName || !lastName || !email || !phone) return false;
      const areErrors = areValidationErrors(errors, ["firstName", "lastName", "email", "phone"]);
      if (areErrors) return false;
      return true;

    case 2:
      return false;

    default:
      return false;
  }
};

export const areValidationErrors = (errors, fields = null) => {
  const keys = fields || Object.keys(errors);
  const errorMessages = keys.map((key) => errors[key]);
  return errorMessages.some((message) => !!message);
};
