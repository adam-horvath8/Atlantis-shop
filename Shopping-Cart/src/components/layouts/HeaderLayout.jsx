import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet, NavLink } from "react-router-dom";
import "./headerLayout.css";
import { ProductContext } from "../../context/ProductContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const HeaderLayout = () => {
  const { numberOfItemsInCart } = useContext(ProductContext);

  console.log(numberOfItemsInCart);

  return (
    <>
      <header>
        <div className="heading-div">
          <h1>Trendy Shop</h1>

          <NavLink className="link" to="cart">
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            <span> {numberOfItemsInCart > 0 && numberOfItemsInCart}</span>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout;
