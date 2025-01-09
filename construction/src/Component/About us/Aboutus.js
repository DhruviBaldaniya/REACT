import React from "react";
import "./../../Styles/Aboutus.css";
import motivation from '../../images/About Us/motivation.png';
import history from '../../images/About Us/history.png';
import certificate from '../../images/About Us/certificate.png';
import Button from "../Button/Button";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="about-us-heading">ABOUT US</h2>
      <div className="underline"></div>
      <div className="about-us-container">
        {/* Card 1 */}
        <div className="about-us-card">
          <div className="icon-container">
            <img className="about-us-icon" src={motivation} alt="motivation-icon"/>
          </div>
          <h3 className="about-us-title">Motivation Company</h3>
          <p className="about-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.
          </p>
          <Button />
        </div>
        {/* Card 2 */}
        <div className="about-us-card">
          <div className="icon-container">
          <img className="about-us-icon" src={history} alt="history-icon"/>
          </div>
          <h3 className="about-us-title">Company History</h3>
          <p className="about-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.  
          </p>
          <Button />
        </div>
        {/* Card 3 */}
        <div className="about-us-card">
          <div className="icon-container">
          <img className="about-us-icon" src={certificate} alt="certificate-icon"/>
          </div>
          <h3 className="about-us-title">Certificates</h3>
          <p className="about-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
