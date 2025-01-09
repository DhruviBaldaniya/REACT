import React from "react";
import '../../Styles/Projects.css';
import OurProject from "../../Component/Project/OurProject";
import ProjectDetails from "../../Component/Project/ProjectDetail";
import ReletedProject from "../../Component/Project/ReletedProject";

const Projects = () => {
  return (
    <>
    <div className="container">
      <section className="project-section">
        <div className="project-content">
          <h2>Projects</h2>
          <p>Home / Projects</p>
        </div>
      </section>
    </div>

    <OurProject />
    <ProjectDetails />
    <ReletedProject />
    </>
    
  );
};

export default Projects;
