import "./shop.css";
import ProductCard from "../../components/ProductCard";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import Banner from "../../components/Banner";
import shopPage from "../../assets/shop-page.jpg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = () => {
  const { productsData, error, isLoading } = useContext(ProductContext);

  return (
    <>
      {error && <h4>A network error was encountered!</h4>}
      {isLoading && <h1>Loading...</h1>}
      <Banner
        bannerTitle="Let's Shop!"
        bannerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam nisi quia? Exercitationem harum enim doloremque explicabo incidunt sed, labore nesciunt porro tempora maxime sequi vitae amet nam quisquam veritatis."
        imgSrc={shopPage}
        imgAlt="Beautifull woman standing in white dress on the beach"
      />
      <div className="shop-container">
        <h2>Find your desired product:</h2>
        <div className="search-bar-container">
          <input type="text" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="shop-grid">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
