import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./redux/formSlice";
import globalReducer from "./redux/globalSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    global: globalReducer,
  },
});
