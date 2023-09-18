import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link component
import CartTable from "./CartTable";
import { ProductContext } from "../../context/ProductContextProvider";
import "./cart.css";

const Cart = () => {
  const { cartItems } = useContext(ProductContext);

  const hasValueGreaterThanZero = Object.values(cartItems).some(
    (value) => value > 0
  );

  return (
    <>
      <div className="cart-container">
        {!hasValueGreaterThanZero ? (
          <>
            <h2>Your cart is empty</h2>
            <Link to="/shop">Shop now!</Link>
          </>
        ) : (
          <>
            <h2>Your Cart</h2>
            <CartTable />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
