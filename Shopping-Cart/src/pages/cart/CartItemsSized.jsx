import React from "react";
import QuantityCounter from "../../components/reusables/QuantityCounter";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cartItemsSized.css";
import CheckOut from "./CheckOut";

const CartItemsSized = ({
  handleRemoveBtn,
  cartProducts,
  getTotalPrice,
  cartItems,
}) => {
  return (
    <div className="cart-items-sized-container">
      {cartProducts.map((product) => (
        <div className="cart-item" key={product.id}>
          <div className="cart-img-div">
            <img src={product.image} alt="" />
            <div className="cart-item-description">
              <span>{product.title}</span>
              <span>
                {product.price}{" "}
                <FontAwesomeIcon className="icon" icon={faEuroSign} />
              </span>
            </div>
          </div>
          <div className="cart-counter-div">
            <QuantityCounter product={product} />
            <span>
              {Number(
                (Number(cartItems[product.id]) * product.price).toFixed(2)
              )}
              <FontAwesomeIcon className="icon" icon={faEuroSign} />
            </span>
            <button onClick={() => handleRemoveBtn(product.id)}>Remove</button>
          </div>
        </div>
      ))}
      <CheckOut getTotalPrice={getTotalPrice} />
    </div>
  );
};

export default CartItemsSized;
