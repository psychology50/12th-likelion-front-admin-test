import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://49.50.164.193:8080/";
//<React.StrictMode></React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
