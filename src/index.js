import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { store } from "./redux";
import { Provider } from "react-redux";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
