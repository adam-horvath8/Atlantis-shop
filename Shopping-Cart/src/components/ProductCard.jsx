import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="product-description">
        <span>{product.title}</span>
        <span>{product.price + " EUR"}</span>
      </div>
      <div className="toCart">
        <button>-</button>
        <input type="number" />
        <button >+</button>
      </div>
    </div>
  );
};

export default ProductCard;
