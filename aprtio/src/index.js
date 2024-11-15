import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import AppProvider from "./context/AppProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
