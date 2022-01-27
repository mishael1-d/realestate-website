import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";
function Error() {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="error-container container">
      <div className="error">
        <p>Hmmm. We're having trouble finding this site. </p>
        <h4>
          If that address is correct, here are three other things you can try:
        </h4>
        <ul>
          <li>Try again later.</li>
          <li>Check your network connection.</li>
          <li>
            If you are connected but behind a firewall, check that your browser has
            permission to access the Web.
          </li>
        </ul>
        <button className="primary" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Error;
