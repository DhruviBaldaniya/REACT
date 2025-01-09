import React, { useState, useRef } from "react";
import "../../Styles/Featured.css";
import feature1 from "../../images/Home/feature1.png";
import feature2 from "../../images/Home/feature2.png";
import feature3 from "../../images/Home/feature3.png";

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index
  const containerRef = useRef(null); // Reference for the featured works container

  return (
    <div className="featured-container">
      <div className="header-feature">
        <h1 className="featured-title">FEATURED WORKS</h1>
        
      </div>
      <div className="featured-works" ref={containerRef}>
        <div className="featured-item">
          <img src={feature1} alt="Apartments" className="featured-image" />
        </div>
        <div className="featured-item">
          <img src={feature2} alt="Interior" className="featured-image" />
        </div>
        <div className="featured-item">
          <img src={feature3} alt="Poolside" className="featured-image" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
