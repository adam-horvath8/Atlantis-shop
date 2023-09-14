import "./shop.css";
import ProductCard from "../../components/ProductCard";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContextProvider";

const Shop = () => {
  const { productsData, error, isLoading } = useContext(ProductContext);

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
