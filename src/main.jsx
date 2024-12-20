import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./appStore";
import App from "./App";
import "./index.css";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);
