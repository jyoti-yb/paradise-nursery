import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename="/paradise-nursery">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
