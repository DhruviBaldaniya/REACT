import React, { useState, useRef } from "react";
import "../../Styles/Slider.css";
import slider1 from "../../images/Services/slider1.png";
import slider2 from "../../images/Services/slider4.png";
import slider3 from "../../images/Services/slider1.png";
import slider4 from "../../images/Services/slider4.png";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
  const containerRef = useRef(null); // Reference for the slider works container

  const nextSlide = () => {
    const totalSlides = 4;
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
    containerRef.current.scrollTo({
      left: newIndex * containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    const totalSlides = 4;
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    containerRef.current.scrollTo({
      left: newIndex * containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-container">
      <div className="header-slider">
        <div className="slider-buttons">
          <button className="slider-btn service-prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <button className="slider-btn service-next-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
      <div className="slider-works" ref={containerRef}>
        <div className="slider-item">
          <img src={slider1} alt="Apartments" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={slider2} alt="Interior" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={slider3} alt="Poolside" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={slider4} alt="Modern House" className="slider-image" />
        </div>
      </div>
      <div className="leader-footer">
        <p>IF YOU FIND A HIGH QUALITY CONSTRUCTOR FOR YOUR PROJECT?</p>
        <button className="leader-button">GET A QUOTE</button>
      </div>
    </div>
  );
};

export default Slider;
