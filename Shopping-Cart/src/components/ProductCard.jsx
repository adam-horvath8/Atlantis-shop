import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(ProductContext);

  // console.log(product.id);

  return (
    <div className="card">
      <div className="img-div">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-description">
        <span>{product.title}</span>
        <span>{product.price + " EUR"}</span>
      </div>
      <div className="toCart">
        <button onClick={() => removeFromCart(product.id)}>-</button>
        <input type="number" />
        <button onClick={() => addToCart(product.id)}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
