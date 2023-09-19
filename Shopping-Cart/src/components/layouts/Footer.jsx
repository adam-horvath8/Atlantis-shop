import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <div className="info-section">
          <h3>Customer Service</h3>
          <ul>
            <li>+421 949 813 914</li>
            <li>atlantis@email.com</li>
          </ul>
        </div>
        <div className="info-section">
          <h3>Terms of service</h3>
          <ul>
            <li>
              <Link>Terms and Conditions</Link>
            </li>
            <li>
              <Link>Shipping and Payment</Link>
            </li>
            <li>
              <Link>Advertising Terms</Link>
            </li>
            <li>
              <Link>Returns and complaints</Link>
            </li>
          </ul>
        </div>
        <div className="info-section">
          <h3>Information for you</h3>
          <ul>
            <li>
              <Link>Protection of personal data</Link>
            </li>
            <li>
              <Link>FAQ - Frequently asked questions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrigth">
        <FontAwesomeIcon icon={faCopyright} /> Adam Horvath, Brno 2023
      </div>
    </footer>
  );
};

export default Footer;
