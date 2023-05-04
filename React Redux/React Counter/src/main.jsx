import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Reducer";
const store = createStore(Reducer);
//to access entire state useSelector and to dispatch action useDispatch

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
