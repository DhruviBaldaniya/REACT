import React from "react";
import "../../Styles/Leader.css";

const Leader = () => {
  return (
    <div className="leader-container">
      <div className="leader-overlay">
        <div className="leader-content">
          <h3 className="leader-subtitle">WORKING WITH US</h3>
          <h1 className="leader-title">WE ARE LEADER</h1>
          <div className="leader-stats">
            <div className="stat">
              <h2>3214</h2>
              <p>PROJECT COMPLETED</p>
            </div>
            <div className="stat">
              <h2>2234</h2>
              <p>WORKERS EMPLOYED</p>
            </div>
            <div className="stat">
              <h2>379</h2>
              <p>AWARDS WON</p>
            </div>
          </div>
        </div>
      </div>
      <div className="leader-footer">
        <p>IF YOU FIND A HIGH QUALITY CONSTRUCTOR FOR YOUR PROJECT?</p>
        <button className="leader-button">GET A QUOTE</button>
      </div>
    </div>
  );
};

export default Leader;
