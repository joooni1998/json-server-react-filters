import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import {ThemeContextProvider, ThemeContextConsumer} from "./context/ThemeContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </BrowserRouter>
);
