import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./navbar.css";
import Footer from "./Footer";
import { ProductContext } from "../../context/ProductContextProvider";
import scrollToTop from "../../utils/scrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logoSmall from "../../assets/logo-small.svg";
import BurgerMenu from "../reusables/BurgerMenu";

const Navbar = () => {
  const { numberOfItemsInCart } = useContext(ProductContext);

  const [isSticky, setIsSticky] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");

      // Check if the Navbar is at the top of the window
      const isAtTop = navbar.getBoundingClientRect().top === 0;

      // Set isSticky to true when the Navbar is at the top
      setIsSticky(isAtTop);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let content;
  if (windowWidth < 600) {
    content = (
      <nav>
        <BurgerMenu  />
        {isSticky && (
          <div className="cart-div">
            <NavLink onClick={scrollToTop} to="cart" className="navItem">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> {numberOfItemsInCart}</span>
            </NavLink>
          </div>
        )}
      </nav>
    );
  } else {
    content = (
      <nav>
        {isSticky && (
          <Link to="/" onClick={scrollToTop} className="scrolled-logo">
            <img src={logoSmall} alt="logo small"></img>
          </Link>
        )}
        <div className="nav-div">
          <NavLink to="/" onClick={scrollToTop} className="navItem">
            Home
          </NavLink>
          <NavLink to="shop" onClick={scrollToTop} className="navItem">
            Shop
          </NavLink>
          <NavLink to="about" onClick={scrollToTop} className="navItem">
            About
          </NavLink>
        </div>

        {isSticky && (
          <div className="cart-div">
            <NavLink onClick={scrollToTop} to="cart" className="navItem">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> {numberOfItemsInCart}</span>
            </NavLink>
          </div>
        )}
      </nav>
    );
  }

  return (
    <>
      {content}
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
