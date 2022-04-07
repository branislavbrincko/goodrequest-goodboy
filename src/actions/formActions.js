import { store, updateFormErrors } from "../store";

export const clearErrorField = (fieldName) => {
  const payload = { [fieldName]: "" };
  store.dispatch(updateFormErrors(payload));
};

export const setErrorField = (errorField, errorMessage) => {
  const payload = { [errorField]: errorMessage };
  store.dispatch(updateFormErrors(payload));
};
