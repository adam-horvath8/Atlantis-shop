import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="error-div">
      <h2>Page not Found</h2>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default Error;
