import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import Roots from "./Roots";

ReactDOM.render(
  <Roots>
    <BrowserRouter>
      <Route path="/" component={App} />
      <App />
    </BrowserRouter>
  </Roots>,
  document.querySelector("#root")
);
