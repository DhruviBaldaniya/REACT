import React from "react";
import './../../Styles/Hero.css';
import backgroundImage from './../../images/Home/hero.png'; // Replace with your actual image path
import OurServices from "../../Component/Home/OurServices";
import Featured from "../../Component/Home/Featured";
import Leader from "../../Component/Home/Leader";
import TestimonialSlider from "../../Component/Home/Testimonial";

const Home = () => {
  return (
    <>
   
    <div id="home" className="home">
      <div
        className="home-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="home-content">
          <h1 className="home-title">Construction</h1>
          <p className="home-description">
            We manage strong construction business in the UK, US, and South East Asia.
          </p>
          <button className="home-button">Our Services</button>
        </div>
      </div>
    </div>
    <OurServices />
    <Featured />
    <TestimonialSlider />
    <Leader />
    
    </>
    
  );
};

export default Home;
