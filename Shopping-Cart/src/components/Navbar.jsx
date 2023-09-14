import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="navItem">
        Home
      </NavLink>
      <NavLink to="shop" className="navItem">
        Shop
      </NavLink>
      <NavLink to="about" className="navItem">
        About
      </NavLink>
      
    </nav>
  );
};

export default Navbar;
