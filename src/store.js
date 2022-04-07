import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultFormValues } from "./formDefinition";

const LOCAL_STORAGE_FORM = "goodboy-form";
const LOCAL_STORAGE_STEP = "goodboy-step";

const formFromStorageStr = localStorage.getItem(LOCAL_STORAGE_FORM);
const formFromStorage = formFromStorageStr && JSON.parse(formFromStorageStr);

const stepFromStorageStr = localStorage.getItem(LOCAL_STORAGE_STEP);
const stepFromStorage = stepFromStorageStr && JSON.parse(stepFromStorageStr);

const updateLocalStorage = (itemName, value) => {
  localStorage.setItem(itemName, JSON.stringify(value));
};

const clearLocalStorage = (itemName) => {
  localStorage.removeItem(itemName);
};

export const formSlice = createSlice({
  name: "form",
  initialState: formFromStorage || defaultFormValues,
  reducers: {
    updateForm: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
      updateLocalStorage(LOCAL_STORAGE_FORM, state);
    },
    updateFormErrors: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state.errors[key] = action.payload[key];
      });
      updateLocalStorage(LOCAL_STORAGE_FORM, state);
    },
    resetForm: () => {
      clearLocalStorage(LOCAL_STORAGE_FORM);
      return defaultFormValues;
    },
  },
});

export const { updateForm, updateFormErrors, resetForm } = formSlice.actions;

const defaultGlobalValues = {
  currentStep: stepFromStorage || 0,
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
      updateLocalStorage(LOCAL_STORAGE_STEP, action.payload);
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

export function getShelters() {
  return async (dispatch) => {
    dispatch(setSheltersLoading(true));
    try {
      const response = await axios.get("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters");
      const { shelters } = response.data;
      dispatch(setShelters(shelters));
      dispatch(setSheltersLoading(false));
    } catch (error) {
      // TODO: handler error
    }
  };
}

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    global: globalSlice.reducer,
  },
});

export function createContribution() {
  return async (dispatch) => {
    dispatch(setFormSubmitting(true));

    const { form } = store.getState();
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
      await axios.post("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute", dataForSubmission);
    } catch (error) {
      dispatch(setFormSubmissionError(true));
    }
    dispatch(setFormSubmitting(false));
  };
}

// function fakeRequest() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("fake request done!");
//       res();
//     }, 1);
//   });
// }
