import React from "react";
import scrollToTop from "../../utils/scrollToTop";
import "./upButton.css";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpButton = () => {
  return (
    <button className="up-btn" onClick={scrollToTop}>
      <FontAwesomeIcon icon={faAngleUp} beat />
    </button>
  );
};

export default UpButton;
