import { configureStore, createSlice } from "@reduxjs/toolkit";
import { DEFAULT_VALUES } from "./constants";

export const formSlice = createSlice({
  name: "form",
  initialState: {
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
  },
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
  },
});

export const { updateForm, updateFormErrors } = formSlice.actions;

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    shelters: [],
    sheltersLoading: false,
  },
  reducers: {
    setShelters: (state, action) => {
      state.shelters = action.payload;
    },
    setSheltersLoading: (state, action) => {
      state.sheltersLoading = action.payload;
    },
  },
});

export const { setShelters, setSheltersLoading } = globalSlice.actions;

export function fetchShelters() {
  return async (dispatch) => {
    dispatch(setSheltersLoading(true));
    try {
      const response = await fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters");
      const data = await response.json();
      const { shelters } = data;
      dispatch(setShelters(shelters));
      dispatch(setSheltersLoading(false));
    } catch (error) {
      // dispatch(getSheltersFailure());
    }
  };
}

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    global: globalSlice.reducer,
  },
});
