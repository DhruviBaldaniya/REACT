import React, { useRef, useState } from "react";
import "./../../Styles/Recent News.css";
import news1 from "./../../images/Home/news1.png"; // Replace with actual image path
import news2 from "./../../images/Home/news2.png"; // Replace with actual image path
import news3 from "./../../images/Home/news3.png"; // Replace with actual image path
import Button from "../Button/Button";

const RecentNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current card index
  const containerRef = useRef(null); // Reference for the news container

  return (
    <div className="recent-news">
      <div className="header-and-slider">
        <h1 className="section-header">
          <span>Recent News</span>
        </h1>
        
      </div>
      <div className="news-container" ref={containerRef}>
        <div className="news-card">
          <img src={news1} alt="news 1" className="news-image" />
          <h2>Future Smart Houses</h2>
          <div className="news-meta">
            <span>
              <i className="bi bi-person-fill"></i> Post by John Doe
            </span>
            <span>
              <i className="bi bi-clock"></i> April 6, 2015
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci. Nulla pulvinar sed turpis sit amet ultricies.
          </p>
          <Button />
        </div>
        <div className="news-card">
          <img src={news2} alt="news 2" className="news-image" />
          <h2>Together We Build</h2>
          <div className="news-meta">
            <span>
              <i className="bi bi-person-fill"></i> Post by John Doe
            </span>
            <span>
              <i className="bi bi-clock"></i> April 6, 2015
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci. Nulla pulvinar sed turpis sit amet ultricies.
          </p>
          <Button />
        </div>
        <div className="news-card">
          <img src={news3} alt="news 3" className="news-image" />
          <h2>Construction Management</h2>
          <div className="news-meta">
            <span>
              <i className="bi bi-person-fill"></i> Post by John Doe
            </span>
            <span>
              <i className="bi bi-clock"></i> April 6, 2015
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            accumsan orci. Nulla pulvinar sed turpis sit amet ultricies.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
