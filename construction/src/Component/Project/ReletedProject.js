import React from "react";
import '../../Styles/ReletedProject.css';
import releted1 from '../../images/Project/releted1.png';
import releted2 from '../../images/Project/releted2.png';
import releted3 from '../../images/Project/releted3.png';

const ReletedProjects = () => {
  return (
    <div className="releted-section">
      <div className="releted-header">
        <h1><span>Releted </span>Projects</h1>
      </div>
      <div className="releted-container">
          <div className="releted-card">
            <div className="releted-image-container">
              <img src={releted1} alt="member-img" className="releted-image" />
            </div>
          </div>

          <div className="releted-card">
            <div className="releted-image-container">
              <img src={releted2} alt="member-img"className="releted-image" />
            </div>
          </div>

          <div className="releted-card">
            <div className="releted-image-container">
              <img src={releted3} alt="member-img" className="releted-image" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default ReletedProjects;