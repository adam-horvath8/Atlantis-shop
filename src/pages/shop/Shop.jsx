import "./shop.css";
import ProductCard from "./ProductCard";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import Banner from "../../components/reusables/Banner";
import shopPage from "../../assets/shop-page.jpg";
import UpButton from "../../components/reusables/UpButton";
import ReactPaginate from "react-paginate";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = () => {
  const { productsData, error, isLoading } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const filteredData = () => {
    // Use the filter method and return the filtered array
    return productsData.filter((product) => {
      if (searchTerm === "") {
        return true; // Include all products if searchTerm is empty
      } else if (
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true; // Include products that match the search term
      }
      return false; // Exclude products that don't match the search term
    });
  };

  const displayProducts = filteredData()
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => (
      <ProductCard key={product.id} product={product}></ProductCard>
    ));

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    setPageNumber(0);
  };

  const pageCount = Math.ceil(filteredData().length / productsPerPage);

  const scrollToSearch = () => {
    window.scrollTo({
      top: 555,
      behavior: "auto",
    });
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    scrollToSearch();
  };

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
            onChange={(e) => handleSearchChange(e)}
            placeholder={"Search..."}
          />
        </div>
        <div className="shop-grid">{displayProducts}</div>
        <ReactPaginate
          previousLabel={<FontAwesomeIcon icon={faForward} rotation={180} />}
          nextLabel={<FontAwesomeIcon icon={faForward} />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination-buttons"
          previousLinkClassName="next-previous"
          nextLinkClassName="next-previous"
          activeClassName="pagination-active"
          pageClassName="pagination-pages"
        />
        <UpButton />
      </div>
    </>
  );
};

export default Shop;
