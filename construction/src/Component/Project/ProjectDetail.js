import React from "react";
import "../../Styles/ProjectDetail.css";

const ProjectDetails = () => {
  return (
    <div className="project-details-section">
      <div className="content-container">
        {/* Project Overview Section */}
        <div className="project-overview">
          <h2>
            Project Overview <span className="underline"></span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan,
            nisl quis finibus volutpat, urna velit lacinia neque, quis hendrerit
            sem odio vitae eros. Phasellus laoreet libero lectus, a tempus mauris
            lobortis a. Phasellus id maximus nisl. Aenean et lectus efficitur,
            blandit dolor et, ultrices justo. Vivamus dapibus erat cursus,
            facilisis lacus id, pharetra augue. Cras vestibulum justo ac lacus
            rhoncus, ac laoreet neque hendrerit.
          </p>
        </div>

        {/* Project Details Section */}
        <div className="project-details">
          <h2>
            Project Details <span className="underline"></span>
          </h2>
          <table className="details-table">
            <tbody>
              <tr>
                <td>Client</td>
                <td>New York, USA</td>
              </tr>
              <tr>
                <td>Construction Date</td>
                <td>January 2016</td>
              </tr>
              <tr>
                <td>Completion Date</td>
                <td>October 2016</td>
              </tr>
              <tr>
                <td>Value</td>
                <td>$2,509,525</td>
              </tr>
              <tr>
                <td>Project Type</td>
                <td>Office Building</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;