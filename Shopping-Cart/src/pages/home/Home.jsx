import React from "react";
import "./home.css";
import Banner from "../../components/Banner";
import homeImg from "../../assets/home-page.jpg";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Banner
          bannerTitle="Welcome!"
          bannerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam nisi quia? Exercitationem harum enim doloremque explicabo incidunt sed, labore nesciunt porro tempora maxime sequi vitae amet nam quisquam veritatis."
          imgSrc={homeImg}
          imgAlt="Friends siting on the bench holding hands with shopping bags around them"
        />
        <div className="home-item"></div>
        <div className="home-item"></div>
        <div className="home-item"></div>
      </div>
    </>
  );
};

export default Home;
