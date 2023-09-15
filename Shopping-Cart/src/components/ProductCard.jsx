import "./productCard.css";
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="img-div">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-description">
        <span>{product.title}</span>
        <span>{product.price + " EUR"}</span>
      </div>
      <QuantityCounter product={product} />
    </div>
  );
};

export default ProductCard;
