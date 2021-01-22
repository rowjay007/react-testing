import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Roots from "./Roots";

ReactDOM.render(
  <Roots>
    <App />
  </Roots>,
  document.querySelector("#root")
);
