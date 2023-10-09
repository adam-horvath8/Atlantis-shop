import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./burgerMenu.css";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState("burger-menu");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-menu active");
    } else {
      setBurgerClass("burger-menu");
    }
  };

  return (
    <>
      <div
        className={`navItem burger ${isMenuClicked && "active"}`}
        onClick={(() => updateMenu, () => setIsMenuClicked((prev) => !prev))}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      {isMenuClicked && (
        <div className={burgerClass}>
          <NavLink to="/" className="navItem">
            Home
          </NavLink>
          <NavLink to="shop" className="navItem">
            Shop
          </NavLink>
          <NavLink to="about" className="navItem">
            About
          </NavLink>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
