import { configureStore, createSlice } from "@reduxjs/toolkit";
import { DEFAULT_VALUES } from "./components/RowButtons";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    // user form values
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    value: DEFAULT_VALUES[0],
    shelterID: 0,
    // logic values
    useShelterID: true,
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

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});
