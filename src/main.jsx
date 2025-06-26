import React from "react";
import ReactDOM from "react-dom/client";
import { toast,ToastContainer } from "react-toastify";


import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="bottom-left" />
  </React.StrictMode>
);
