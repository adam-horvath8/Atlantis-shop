import React, { useState, useEffect, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css";
import Footer from "./Footer";
import { ProductContext } from "../../context/ProductContextProvider";
import scrollToTop from "../../utils/scrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { numberOfItemsInCart } = useContext(ProductContext);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav"); // Replace with your actual class name

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

  return (
    <>
      <nav>
        <div className="nav-div">
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

        {isSticky && (
          <div className="cart-div">
            <NavLink onClick={scrollToTop} to="cart" className="navItem">
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
            <span> {numberOfItemsInCart > 0 && numberOfItemsInCart}</span>
          </div>
        )}
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
