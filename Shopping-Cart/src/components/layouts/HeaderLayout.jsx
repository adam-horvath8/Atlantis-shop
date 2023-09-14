import React from "react";
import Navbar from "../Navbar";
import { Outlet, NavLink } from "react-router-dom";
import "./headerLayout.css";

const HeaderLayout = () => {
  return (
    <>
      <header>
        <div className="heading-div">
          <h1>Trendy Shop</h1>

          <div className="heading-nav">
            <button>Search</button>
            <NavLink to="cart">Cart</NavLink>
          </div>
        </div>

        <Navbar />
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default HeaderLayout;
