import React from "react";
import '../../Styles/Team.css';
import member1 from '../../images/About Us/member1.png';
import member2 from '../../images/About Us/member2.png';
import member3 from '../../images/About Us/member3.png';

const Team = () => {
  return (
    <div className="team-section">
      <div className="team-header">
        <h1><span>Meet </span>Our Team</h1>
      </div>
      <div className="team-container">
          <div className="team-card">
            <div className="image-container">
              <img src={member1} alt="member-img" className="team-image" />
              <div className="social-icons-about">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
            <div className="team-info">
              <h3>Jane Smith</h3>
              <p>Senior Designer</p>
            </div>
          </div>

          <div className="team-card">
            <div className="image-container">
              <img src={member2} alt="member-img"className="team-image" />
              <div className="social-icons-about">
              <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
            <div className="team-info">
              <h3>John Doe</h3>
              <p>Lead Designer</p>
            </div>
          </div>

          <div className="team-card">
            <div className="image-container">
              <img src={member3} alt="member-img" className="team-image" />
              <div className="social-icons-about">
              <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
            <div className="team-info">
              <h3>Michael Brown</h3>
              <p>UI/UX Designer</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Team;