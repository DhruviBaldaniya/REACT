import React from "react";
import '../../Styles/About.css';
import AboutUs from "../../Component/About us/Aboutus"
import AboutCompany from "../../Component/About us/Aboutcompany";
import Team from "../../Component/About us/Team";

const Services = () => {
  return (
    <>
    <div className="container">
      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Home / About Us</p>
        </div>
      </section>
    </div>
    <AboutUs />
    <AboutCompany />
    <Team />
  
    </>
  );
};

export default Services;
