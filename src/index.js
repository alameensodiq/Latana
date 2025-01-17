import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./Store/configureStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={configureStore}>
      <BrowserRouter>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              style: {
                fontSize: "16px",
                marginTop: "14px",
                color: "white",
                background: "#3fb172",
                padding: "10px"
              }
            },
            error: {
              style: {
                fontSize: "16px",
                marginTop: "14px",
                color: "white",
                background: "#ff0000",
                padding: "10px"
              }
            }
          }}
        />
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
