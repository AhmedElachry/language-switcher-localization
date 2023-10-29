import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import I18n from "./i18n/I18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18n>
      <App />
    </I18n>
  </React.StrictMode>
);
