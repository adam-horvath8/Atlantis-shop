import React, { useState } from "react";
import "./slider.css";
import sliderData from "../../data/sliderData";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = ({ sliderTitle, sliderDescription }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toNextImg = () => {
    const isLastIndex = currentIndex === sliderData.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const toPreviousImg = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imgIndex) => {
    setCurrentIndex(imgIndex);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-description">
          <h3>{sliderTitle}</h3>
          <p>{sliderDescription}</p>
        </div>
        <div
          className="slider-img-container"
          style={{ backgroundImage: `url(${sliderData[currentIndex].url})` }}
        >
          <div className="arrow-div">
            <button onClick={toPreviousImg}>
              <FontAwesomeIcon icon={faAnglesRight} rotation={180} />
            </button>
            <button onClick={toNextImg}>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
          <div className="current-img-signifier">
            {sliderData.map((img, imgIndex) => (
              <div
                className={`dot ${
                  imgIndex === currentIndex ? "selected-dot" : ""
                }`}
                key={imgIndex}
                onClick={() => goToSlide(imgIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
