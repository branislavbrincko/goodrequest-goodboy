import * as yup from "yup";
import { store, updateFormErrors } from "../redux";

// ---------------------
// Yup validation schema
// ---------------------

let formValidationSchema = yup.object({
  // 1st step
  shelterID: yup.number(),
  value: yup.number().typeError("Zadajte sumu!").required("Zadajte sumu!").positive("Zadajte kladnú sumu!"),
  // 2nd step
  firstName: yup.string().trim().required("Meno je povinné pole!").min(2, "Meno musí mať aspoň 2 znaky!").max(20, "Meno musí mať maximálne 20 znakov!"),
  lastName: yup
    .string()
    .trim()
    .required("Priezvisko je povinné pole!")
    .min(2, "Priezvisko musí mať aspoň 2 znaky!")
    .max(30, "Priezvisko musí mať maximálne 30 znakov!"),
  email: yup.string().email("Email musí mať správny tvar!").required("Email je povinné pole!"),
  phone: yup
    .string()
    .trim()
    .matches(/^$|([0-9]{3} [0-9]{3} [0-9]{3})$/, "Zadajte telefónne číslo v tvare xxx xxx xxx"), // matches number in format "xxx xxx xxx" or empty string
  phonePrefix: yup.string(),
});

// ----------------
// Helper functions
// ----------------

const clearErrorField = (fieldName) => {
  const payload = { [fieldName]: "" };
  store.dispatch(updateFormErrors(payload));
};

const setErrorField = (errorField, errorMessage) => {
  const payload = { [errorField]: errorMessage };
  store.dispatch(updateFormErrors(payload));
};

export const areValidationErrors = (errors, fields = null) => {
  const keys = fields || Object.keys(errors);
  const errorMessages = keys.map((key) => errors[key]);
  return errorMessages.some((message) => !!message);
};

// --------------
// Main functions
// --------------

/**
 * Function for validating one field of the form.
 */
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

/**
 * Main logic for continuing between individual steps of the form.
 */
export const isFormStepValid = (stepId) => {
  const { form } = store.getState();
  const { errors, useShelterID, shelterID, useCustomValue, value, firstName, lastName, email, phone, consent } = form;

  switch (stepId) {
    case 0:
      if (useShelterID && shelterID === 0) return false;
      if (useCustomValue && !value) return false;
      return true;

    case 1:
      // following fields must be filled out
      if (!firstName || !lastName || !email) return false;
      // following fields must have correct values
      const stepFields = ["firstName", "lastName", "email", "phone"];
      const areErrors = areValidationErrors(errors, stepFields);
      if (areErrors) return false;
      return true;

    case 2:
      return consent;

    default:
      return false;
  }
};
