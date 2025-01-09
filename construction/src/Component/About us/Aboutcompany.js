import React, { useState } from 'react';
import '../../Styles/Aboutcompany.css';
import company from '../../images/About Us/company.png';

const AboutCompany = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about-company">
      <div className="about-company-container">
        <div className="about-company-left">
          <img 
            src={company}
            alt="Construction Workers" 
            className="about-company-img" 
          />
          <div className="play-button">
            <i className="bi bi-play-fill"></i>
          </div>
        </div>
        <div className="about-company-right">
          <h1>About Company</h1>
          <div className="accordion">
            {[
              { title: "Something About Us", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut accumsan orci." },
              { title: "Our Mission", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut accumsan orci. Nulla pulvinar sed turpis sit amet ultrices. Praesent mollis maximus ligula ac porttitor." },
              { title: "Company History", content: "Aenean vestibulum porta pellentesque. Pellentesque vel convallis nunc." }
            ].map((item, index) => (
              <div className="accordion-item" key={index}>
                <button 
                  className={`accordion-header ${activeIndex === index ? 'active' : ''}`} 
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <i 
                    className={`bi ${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'} accordion-arrow`}
                  ></i>
                </button>
                {activeIndex === index && (
                  <div className="accordion-body">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
