import React from "react";
import "../../Styles/OurProject.css";
import projectimg from "../../images/Project/project-img.png";
import project2 from "../../images/Project/project2.png";
import project3 from "../../images/Project/project3.png";
import project5 from "../../images/Project/project5.png";

const OurProject = () => {
  return (
    <div className="ourproject-section">
      <div className="main-image">
        <img src={projectimg} alt="Main project view" />
      </div>
      <div className="side-images">
        <div className="side-image">
          <img src={project2} alt="Bedroom view" />
        </div>
        <div className="side-image">
          <img src={project5} alt="Living room view" />
        </div>
        <div className="side-image">
          <img src={project3} alt="Patio view" />
        </div>
      </div>
    </div>
  );
};

export default OurProject;