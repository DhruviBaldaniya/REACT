import React from "react";
import '../../Styles/Service.css';
import Servicesicon from "../../Component/Services/Servicesicon";
import Slider from "../../Component/Services/Slider";
import TestimonialSlider from "../../Component/Services/TestimonialServices";

const Services = () => {
  return (
    <>
    <div className="container">
      <section className="services-section">
        <div className="services-content">
          <h2>Services</h2>
          <p>Home / Services</p>
        </div>
      </section>
    </div>
    <Servicesicon />
    <Slider />
    <TestimonialSlider />
  
    </>
  );
};

export default Services;
