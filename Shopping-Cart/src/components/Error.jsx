import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Page not Found</h2>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default Error;
