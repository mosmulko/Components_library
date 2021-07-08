import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.hydrate(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
