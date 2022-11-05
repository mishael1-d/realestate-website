import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
// import Navbar from "./components/Navbar/Navbar";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
