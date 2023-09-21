import React from "react";
import QuantityCounter from "../../components/reusables/QuantityCounter";
import "./productDetail.css";
import { faCircleXmark, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetail = ({ product, setDetail }) => {
  return (
    <div className="detail-container">
      <div className="detail-card">
        <img src={product.image} alt="" />
        <div className="detail-info">
          <div className="detail-button-div">
            <button>
              <FontAwesomeIcon
                className="button-icon"
                onClick={() => setDetail((prev) => !prev)}
                icon={faCircleXmark}
              />
            </button>
          </div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="price-counter-div">
            <QuantityCounter product={product} />
            <span>
              {product.price} <FontAwesomeIcon icon={faEuroSign} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
