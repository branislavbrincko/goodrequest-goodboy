import { createSlice } from "@reduxjs/toolkit";
import { defaultFormValues } from "../components/form/formDefinition";
import { clearFormValuesFromLocalStorage, formValuesFromLocalStorage, updateFormValuesInLocalStorage } from "../helpers/localStorage";

export const formSlice = createSlice({
  name: "form",
  initialState: formValuesFromLocalStorage || defaultFormValues,
  reducers: {
    updateForm: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
      updateFormValuesInLocalStorage(state);
    },
    updateFormErrors: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state.errors[key] = action.payload[key];
      });
      updateFormValuesInLocalStorage(state);
    },
    resetForm: () => {
      clearFormValuesFromLocalStorage();
      return defaultFormValues;
    },
  },
});

export const { updateForm, updateFormErrors, resetForm } = formSlice.actions;

export default formSlice.reducer;

export const clearErrorField = (fieldName) => {
  return (dispatch) => {
    const payload = { [fieldName]: "" };
    dispatch(updateFormErrors(payload));
  };
};

export const setErrorField = (errorField, errorMessage) => {
  return (dispatch) => {
    const payload = { [errorField]: errorMessage };
    dispatch(updateFormErrors(payload));
  };
};
