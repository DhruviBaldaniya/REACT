import React, { useState, useRef } from "react";
import "./../../Styles/OurServices.css";
import service1 from "./../../images/Home/service.png"; // Replace with actual image path
import service2 from "./../../images/Home/service.png"; // Replace with actual image path
import service3 from "./../../images/Home/service.png"; // Replace with actual image path
import Button from "../Button/Button";

const OurServices = () => {
  // State to track the current card index
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null); // Reference for the services container

  // Function to go to the next card
  const nextCard = () => {
    const totalCards = 3;
    const newIndex = (currentIndex + 1) % totalCards;
    setCurrentIndex(newIndex);
    // Scroll to the next card
    containerRef.current.scrollTo({
      left: newIndex * containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  // Function to go to the previous card
  const prevCard = () => {
    const totalCards = 3;
    const newIndex = (currentIndex - 1 + totalCards) % totalCards;
    setCurrentIndex(newIndex);
    // Scroll to the previous card
    containerRef.current.scrollTo({
      left: newIndex * containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="our-services">
      <div className="our-header">
        <h1 className="section-header">
          <span>Our Services</span>
        </h1>
        
      </div>
      <div
        className="services-container"
        ref={containerRef}
      >
        <div className="service-card">
          <img src={service1} alt="Service 1" className="service-image" />
          <h2>Design & Build Package</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci. Nulla pulvinar sed turpis sit amet ultricies.
          </p>
          <Button />
        </div>
        <div className="service-card">
          <img src={service2} alt="Service 2" className="service-image" />
          <h2>Reconstruction Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci. Nulla pulvinar sed turpis sit amet ultricies.
          </p>
          <Button />
        </div>
        <div className="service-card">
          <img src={service3} alt="Service 3" className="service-image" />
          <h2>Laminate Flooring</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci. Nulla pulvinar sed turpis sit amet ultricies.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
