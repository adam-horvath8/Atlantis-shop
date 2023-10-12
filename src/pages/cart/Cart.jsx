import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component
import CartTable from "./CartTable";
import { ProductContext } from "../../context/ProductContextProvider";
import "./cart.css";
import scrollToTop from "../../utils/scrollToTop";
import CartItemsSized from "./CartItemsSized";

const Cart = () => {
  const { cartProducts, setCartItems, cartItems } = useContext(ProductContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const hasValueGreaterThanZero = Object.values(cartItems).some(
    (value) => value > 0
  );

  const handleRemoveBtn = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: 0 };
    });
  };

  const getTotalPrice = () => {
    const arrayOfPrices = cartProducts.map((product) => {
      return Number((cartItems[product.id] * product.price).toFixed(2));
    });

    const totalPrice = arrayOfPrices
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
      .toFixed(2);

   

    return totalPrice;
  };

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
  if (windowWidth < 1025) {
    content = (
      <CartItemsSized
        handleRemoveBtn={handleRemoveBtn}
        cartProducts={cartProducts}
        getTotalPrice={getTotalPrice}
        cartItems={cartItems}
      />
    );
  } else {
    content = (
      <CartTable
        handleRemoveBtn={handleRemoveBtn}
        cartItems={cartItems}
        cartProducts={cartProducts}
        getTotalPrice={getTotalPrice}
      />
    );
  }

  return (
    <>
      <div className="cart-container">
        {!hasValueGreaterThanZero ? (
          <>
            <h2>Your cart is empty</h2>
            <Link to="/shop" onClick={scrollToTop} className="nav-item">
              Shop now!
            </Link>
          </>
        ) : (
          <>
            <h2>Your Cart</h2>
            {content}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
