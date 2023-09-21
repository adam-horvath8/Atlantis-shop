import React from "react";
import "./home.css";

import homeImg from "../../assets/home-page.jpg";
import budget from "../../assets/budget.jpg";
import dress from "../../assets/dress.jpg";
import electro from "../../assets/electro.jpg";
import jewelry from "../../assets/jewelry.jpg";
import laptop from "../../assets/laptop.jpg";
import mobile from "../../assets/mobile.jpg";
import UpButton from "../../components/reusables/UpButton";
import Slider from "../../components/reusables/Slider";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Slider
          sliderTitle="Welcome!"
          sliderDescription="
          Welcome to our eclectic emporium of mixed goods! At our one-stop shop, we pride ourselves on offering a diverse and delightful selection of products that cater to a wide range of tastes and needs. Whether you're searching for everyday essentials, unique treasures, or thoughtful gifts, you've come to the right place."
        />

        <div className="home-item">
          <img src={mobile} alt="" />
          <div className="e-shop-description">
            <img src={laptop} alt="" />
            <p>
              " Browse our website, discover hidden gems, and experience the joy
              of finding the unexpected. With new arrivals and special
              promotions regularly, there's always something exciting to explore
              at our mixed goods store. Thank you for visiting, and happy
              shopping! "
            </p>
          </div>
        </div>
        <div className="home-item colored">
          <p>
            " Our shop is designed to cater to all tastes and budgets, making it
            easy to find the perfect item for any occasion. With our commitment
            to quality and customer satisfaction, we aim to be your go-to
            destination for shopping online. "
          </p>
          <img src={budget} alt="" />
        </div>
        <div className="home-item">
          <div className="home-info-cards">
            <img src={electro} alt="" />
            <h3>Tech Gadgets</h3>
            <p>
              Explore the latest in technology, from gadgets and accessories to
              keep you connected and organized.
            </p>
          </div>
          <div className="home-info-cards">
            <img src={jewelry} alt="" />
            <h3>Jewelry and Accessories</h3>
            <p>
              Adorn yourself with stunning pieces of jewelry, from elegant
              necklaces and bracelets to sparkling earrings, adding a touch of
              glamour to your style.
            </p>
          </div>
          <div className="home-info-cards">
            <img src={dress} alt="" />
            <h3>Fashion</h3>
            <p>
              Stay on trend with our diverse selection of clothing for all ages
              and occasions.
            </p>
          </div>
        </div>
        <UpButton>Up</UpButton>
      </div>
    </>
  );
};

export default Home;
