import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import "./quantityCounter.css";

const QuantityCounter = ({ product }) => {
  const { cartItems, removeFromCart, addToCart } = useContext(ProductContext);

  return (
    <div className="to-cart">
      <button onClick={() => removeFromCart(product.id)}>-</button>
      <span>{isNaN(cartItems[product.id]) ? 0 : cartItems[product.id]}</span>
      <button onClick={() => addToCart(product.id)}>+</button>
    </div>
  );
};

export default QuantityCounter;
