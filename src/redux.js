import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DEFAULT_VALUES } from "./constants";

const defaultFormValues = {
  // user form values
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  phonePrefix: "+421",
  value: DEFAULT_VALUES[0],
  shelterID: 0,
  consent: false,

  // logic values
  useShelterID: true,
  useCustomValue: false,

  // form errors
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    value: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState: { ...defaultFormValues },
  reducers: {
    updateForm: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
    updateFormErrors: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state.errors[key] = action.payload[key];
      });
    },
    resetForm: () => defaultFormValues,
  },
});

export const { updateForm, updateFormErrors, resetForm } = formSlice.actions;

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    shelters: [],
    sheltersLoading: false,
    formSubmitting: true,
    formSubmissionError: null,
  },
  reducers: {
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
  },
});

export const { setShelters, setSheltersLoading, setFormSubmitting, setFormSubmissionError } = globalSlice.actions;

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
    }, 1);
  });
}
