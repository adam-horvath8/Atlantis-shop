import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./headerLayout.css";
import { ProductContext } from "../../context/ProductContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logoBig from "../../assets/logo-big.svg";
import logoSmall from "../../assets/logo-small.svg";
import dress from "../../assets/dress.jpg"

const HeaderLayout = () => {
  const { numberOfItemsInCart } = useContext(ProductContext);

  console.log(numberOfItemsInCart);

  return (
    <>
      <header>
        <div className="heading-div">
          <img
            srcSet={`${dress} 400w, ${logoBig} 800w`}
            sizes="(max-width: 600px) 400px, 800px"
            src={logoBig}
            alt="logo"
          />

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
