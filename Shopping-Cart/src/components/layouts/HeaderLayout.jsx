import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./headerLayout.css";
import { ProductContext } from "../../context/ProductContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logoBig from "../../assets/logo-big.svg";

const HeaderLayout = () => {
  const { numberOfItemsInCart } = useContext(ProductContext);

  console.log(numberOfItemsInCart);

  return (
    <>
      <header>
        <div className="heading-div">
          <img src={logoBig} alt="logo" />

          <Link className="link" to="cart">
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            <span> {numberOfItemsInCart}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout;
