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
    shelterID: 1,
    // logic values
    useShelterId: true,
  },
  reducers: {
    updateForm: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { updateForm } = formSlice.actions;

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});
