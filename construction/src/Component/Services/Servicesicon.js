import React from "react";
import '../../Styles/Servicesicon.css';
import Button from "../Button/Button";
import design from '../../images/Services/design.png';
import support from '../../images/Services/support.png';
import paint from '../../images/Services/paint.png';
import solar from '../../images/Services/solar.png';
import renovation from '../../images/Services/renovation.png';
import electrical from '../../images/Services/electrical.png';

const Servicesicon = () => {
  return (
    <section className="services">
      <div className="container-servicesicon">
        <div className="service-card-icon">
          <img className="service-icon" src={design} alt="design-icon" />
          <h3>Design & Build Package</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.
          </p>
          <Button />
        </div>

        <div className="service-card-icon">
          <img className="service-icon" src={support} alt="support-icon" />
          <h3>Reconstruction Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.
          </p>
          <Button />
        </div>

        <div className="service-card-icon">
          <img className="service-icon" src={paint} alt="paint-icon" />
          <h3>Tiling and Painting</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.
          </p>
          <Button />
        </div>

        <div className="service-card-icon">
          <img className="service-icon" src={solar} alt="solar-icon" />
          <h3>Solar Installation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.
          </p>
          <Button />
        </div>

        <div className="service-card-icon">
          <img className="service-icon" src={renovation} alt="renovation-icon" />
          <h3>House Renovation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.
          </p>
          <Button />
        </div>

        <div className="service-card-icon">
          <img className="service-icon" src={electrical} alt="electrical-icon" />
          <h3>Electrical Systems</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Servicesicon;
