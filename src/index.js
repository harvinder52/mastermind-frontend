import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import MainBoard from "./main";

ReactDOM.render(
  <Provider store={store}>
    <MainBoard />
  </Provider>,
  document.getElementById("root")
);
