import "./shop.css";
import ProductCard from "../../components/ProductCard";

const Shop = ({ productsData, error, isLoading }) => {
  return (
    <>
      {error && <h4>A network error was encountered!</h4>}
      {isLoading && <h1>Loading...</h1>}
      <div className="shop-grid">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
