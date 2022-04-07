import { createSlice } from "@reduxjs/toolkit";
import { stepValueFromLocalStorage, updateStepInLocalStorage } from "../helpers/localStorage";

const defaultGlobalValues = {
  currentStep: stepValueFromLocalStorage || 0,
  shelters: [],
  sheltersLoading: false,
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
    setSheltersLoading: (state, action) => {
      state.sheltersLoading = action.payload;
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

export const { setCurrentStep, setShelters, setSheltersLoading, setFormSubmitting, setFormSubmissionError, setNextButtonDisabled } = globalSlice.actions;

export default globalSlice.reducer;

export function getShelters() {
  return async (dispatch) => {
    dispatch(setSheltersLoading(true));
    try {
      // const response = await axios.get("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters");
      // const { shelters } = response.data;
      const shelters = [
        { id: 1, name: "Utulok 1" },
        { id: 2, name: "Utulok 2" },
      ];
      dispatch(setShelters(shelters));
      dispatch(setSheltersLoading(false));
    } catch (error) {
      // TODO: handler error
    }
  };
}

export function createContribution(form) {
  return async (dispatch) => {
    dispatch(setFormSubmitting(true));
    const dataForSubmission = {
      // required
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      value: parseInt(form.value),
      phone: `${form.phonePrefix} ${form.phone}`,
      // optional
      shelderID: form.shelterID === 0 ? null : form.shelterID,
    };
    try {
      // await axios.post("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute", dataForSubmission);
      await fakeRequest();
    } catch (error) {
      dispatch(setFormSubmissionError(true));
    }
    dispatch(setFormSubmitting(false));
  };
}

function fakeRequest() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("fake request done!");
      res();
    }, 200);
  });
}
