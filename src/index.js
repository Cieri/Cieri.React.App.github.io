import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import TopApp from "./TopApp";

ReactDOM.render(
  <>
    <TopApp />
    <App />
  </>,
  document.getElementById("root")
);

reportWebVitals();
