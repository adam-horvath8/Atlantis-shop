import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";
import "./checkOut.css";

const CheckOut = ({ getTotalPrice }) => {
  return (
    <div className="check-out">
      <span>
        {getTotalPrice()} <FontAwesomeIcon icon={faEuroSign} />
      </span>
      <button type="button">Checkout</button>
      <Link to="/shop" onClick={scrollToTop} className="check-out-link">
        Keep Shopping!
      </Link>
    </div>
  );
};

export default CheckOut;
