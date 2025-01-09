import React from "react";
import '../../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-column">
          <h3 className="footer-title">
            About Us <span className="footer-underline"></span>
          </h3>
          <p>
            Our clients range from FTSE companies to large organisations and
            some small local businesses who are striving to expand.
          </p>
          <p>
            To see a detailed list of our works and the progress please see our
            project page.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-skype"></i>
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="footer-column">
          <h3 className="footer-title">
            Navigation <span className="footer-underline"></span>
          </h3>
          <div className="footer-links-container">
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Partners</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Company History</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Team</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="footer-column">
          <h3 className="footer-title">
            Contact Us <span className="footer-underline"></span>
          </h3>
          <p>
            We are available more than 10 hours a day for your service. You can
            contact or visit us in our office from 7:00 - 17:00.
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> Call Us: +1 718-955-2838
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i> 123 N Randolph Street, Virginia,
            United States
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i> Contact@construction.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
