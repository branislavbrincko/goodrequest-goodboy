import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stepValueFromLocalStorage, updateStepInLocalStorage } from "../helpers/localStorage";
import { updateFormErrors } from "./formSlice";

const defaultGlobalValues = {
  currentStep: stepValueFromLocalStorage || 0,
  shelters: [],
  formSubmitting: false,
  formSubmissionError: null,
  nextButtonDisabled: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState: defaultGlobalValues,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
      updateStepInLocalStorage(action.payload);
    },
    setShelters: (state, action) => {
      state.shelters = action.payload;
    },
    setFormSubmitting: (state, action) => {
      state.formSubmitting = action.payload;
    },
    setFormSubmissionError: (state, action) => {
      state.formSubmissionError = action.payload;
    },
    setNextButtonDisabled: (state, action) => {
      state.nextButtonDisabled = action.payload;
    },
  },
});

export const { setCurrentStep, setShelters, setFormSubmitting, setFormSubmissionError, setNextButtonDisabled } = globalSlice.actions;

export default globalSlice.reducer;

export function getShelters() {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters");
      const { shelters } = response.data;
      dispatch(setShelters(shelters));
    } catch (error) {
      console.error({ error }); // TODO: for testing, delete this
      // NOTE: some better handling would probably be needed for this situation
      const errorMessage = "Nepodarilo sa načítať zoznam útulkov. Skúste to neskôr alebo zvoľte možnosť prispieť celej organizácii.";
      const payload = { shelterID: errorMessage };
      dispatch(updateFormErrors(payload));
    }
  };
}

function prepareDataForSubmission(formState) {
  const dataForSubmission = {
    // required
    firstName: formState.firstName,
    lastName: formState.lastName,
    email: formState.email,
    value: parseInt(formState.value),
    // optional
    phone: formState.phone ? `${formState.phonePrefix} ${formState.phone}` : null,
    shelderID: formState.shelterID > 0 ? formState.shelterID : null,
  };
  return dataForSubmission;
}

export function createContribution(form) {
  return async (dispatch) => {
    dispatch(setFormSubmitting(true));
    const dataForSubmission = prepareDataForSubmission(form);
    console.log({ dataForSubmission }); // TODO: for testing, delete this
    try {
      await axios.post("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute", dataForSubmission);
    } catch (error) {
      console.error({ error }); // TODO: for testing, delete this
      dispatch(setFormSubmissionError(true));
    }
    dispatch(setFormSubmitting(false));
  };
}
