import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import "./productCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuantityCounter from "../../components/reusables/QuantityCounter";
import ProductDetail from "./ProductDetail";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [detail, setDetail] = useState(false);

  return (
    <>
      {detail && <ProductDetail product={product} setDetail={setDetail} />}
      <div className="card" onClick={() => setDetail((prev) => !prev)}>
        <div className="img-div">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-description">
          <span>{product.title}</span>
          <span>
            {product.price} <FontAwesomeIcon icon={faEuroSign} />
          </span>
        </div>
        <QuantityCounter product={product} />
      </div>
    </>
  );
};

export default ProductCard;
