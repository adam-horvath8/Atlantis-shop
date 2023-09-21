import "./shop.css";
import ProductCard from "./ProductCard";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import Banner from "../../components/reusables/Banner";
import shopPage from "../../assets/shop-page.jpg";
import UpButton from "../../components/reusables/UpButton";

const Shop = () => {
  const { productsData, error, isLoading } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");

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
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={"Search..."}
          />
        </div>
        <div className="shop-grid">
          {productsData
            .filter((product) => {
              if (searchTerm === "") {
                return product;
              } else if (
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
        <UpButton />
      </div>
    </>
  );
};

export default Shop;
