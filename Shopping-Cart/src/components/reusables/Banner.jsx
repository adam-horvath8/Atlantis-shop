import React from "react";
import "./banner.css";

const Banner = ({ bannerTitle, bannerDescription, imgSrc, imgAlt }) => {
  return (
    <>
      <div className="banner">
        <div className="banner-description">
          <h3>{bannerTitle}</h3>
          <p>{bannerDescription}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </>
  );
};

export default Banner;
