import React from "react";
import Banner from "../../components/reusables/Banner";
import homeImg from "../../assets/home-page.jpg";
import "./about.css";
import friends from "../../assets/friends.jpg";
import working from "../../assets/working.jpg";
import handShake from "../../assets/hand-shake.jpg";
import UpButton from "../../components/reusables/UpButton";

const About = () => {
  return (
    <div className="about-container">
      <Banner
        bannerTitle="Who are we?"
        bannerDescription="Welcome to our vibrant and diverse e-shop, where we celebrate the joy of discovery and the beauty of diversity. At our core, we are more than just an online retailer; we are a community of like-minded individuals who believe that shopping should be an experience filled with wonder and possibilities."
        imgSrc={homeImg}
        imgAlt="Friends siting on the bench holding hands with shopping bags around them"
      />

      <div className="about-item">
        <img src={friends} alt="Group of people taking a photo" />
        <div className="about-item-description">
          <h3>Our Journey</h3>
          <p>
            Our journey began with a simple idea: to create a space where
            customers could find a wide array of products, from everyday
            necessities to unique and handcrafted treasures. Founded by a group
            of passionate individuals, our e-shop was born out of a desire to
            make shopping not just convenient, but also delightful. Over the
            years, we've grown and evolved, expanding our offerings to encompass
            an eclectic mix of goods that cater to various tastes, lifestyles,
            and needs. We've scoured the globe to curate a collection that
            reflects the rich tapestry of our world, supporting local artisans
            and small businesses along the way.
          </p>
        </div>
      </div>
      <div className="about-item colored">
        <div className="about-item-description">
          <h3>Our Philosophy</h3>
          <p>
            At the core of our ethos lies a strong commitment to work ethic and
            dedication. We believe that success is built on the foundation of
            hard work, determination, and a relentless pursuit of excellence.
            Our e-shop is a testament to these values, as we strive to provide
            you with products that reflect the highest standards of quality and
            craftsmanship.
          </p>
        </div>
        <img src={working} alt="Man working on the laptop" />
      </div>
      <div className="about-item">
        <img src={handShake} alt="handshake" />
        <div className="about-item-description">
          <h3>Our Commitment</h3>
          <ul>
            <li>
              We are dedicated to providing you with high-quality products that
              are a result of meticulous attention to detail and unwavering
              commitment to excellence.
            </li>
            <li>
              Your satisfaction is our top priority. We are here to assist you
              every step of the way and ensure that your shopping experience
              exceeds your expectations.
            </li>
            <li>
              We believe in ethical production and responsible sourcing. Our
              commitment to work ethic extends to the way we conduct our
              business, ensuring fairness and integrity in all our dealings.
            </li>
          </ul>
        </div>
      </div>
      <UpButton />
    </div>
  );
};

export default About;

<p></p>;
