import React, { useState, useEffect } from "react";
import '../../Styles/Testimonial.css';
import testimonial1 from '../../images/Home/testimonial1.png';
import testimonial2 from '../../images/Home/testimonial2.png';
import testimonial3 from '../../images/Home/testimonial3.png';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1 // Loop through 3 testimonials
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial-header">
        <h1 className="testimonial-title">Testimonial</h1>
      </div>

      {/* Slide 1 */}
      <div className={`testimonial-card ${currentIndex === 0 ? "active" : ""}`}>
        <div className="testimonial-profile">
          <img
            src={testimonial1}
            alt="John Romer"
            className="testimonial-image"
          />
          <div className="testimonial-details">
            <h4 className="testimonial-name">John Romer</h4>
            <p className="testimonial-role">Designer</p>
          </div>
        </div>
        <p className="testimonial-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
          accumsan orci. Nulla pulvinar sed turpis sit amet ultricies. Praesent
          mollis maximus ligula ac porttitor. Aenean vestibulum porta
          pellentesque."
        </p>
      </div>

      {/* Slide 2 */}
      <div className={`testimonial-card ${currentIndex === 1 ? "active" : ""}`}>
        <div className="testimonial-profile">
          <img
            src={testimonial2}
            alt="Jane Doe"
            className="testimonial-image"
          />
          <div className="testimonial-details">
            <h4 className="testimonial-name">Jane Doe</h4>
            <p className="testimonial-role">Engineer</p>
          </div>
        </div>
        <p className="testimonial-text">
          "Curabitur sit amet justo sed libero facilisis sollicitudin. Morbi fermentum orci ut est dapibus, 
          ac varius turpis auctor. Proin fringilla libero eget urna aliquet
          volutpat. Donec vehicula ipsum a nulla posuere, eu efficitur metus cursus. Integer dictum erat."
        </p>
      </div>

      {/* Slide 3 */}
      <div className={`testimonial-card ${currentIndex === 2 ? "active" : ""}`}>
        <div className="testimonial-profile">
          <img
            src={testimonial3}
            alt="Michael Smith"
            className="testimonial-image"
          />
          <div className="testimonial-details">
            <h4 className="testimonial-name">Michael Smith</h4>
            <p className="testimonial-role">Developer</p>
          </div>
        </div>
        <p className="testimonial-text">
          "Sed vehicula lorem at nibh aliquet, vel consequat purus ultricies. Ut sed sem sit amet urna 
          volutpat convallis. Suspendisse tempor sem a 
          nisl vulputate, non sollicitudin lacus porttitor. Mauris nec justo sed ipsum sodales luctus in ut nulla."
        </p>
      </div>

      <div className="testimonial-buttons">
        <button
          className={`testimonial-button ${currentIndex === 0 ? 'active' : ''}`}
          onClick={() => goToSlide(0)}
        >
          1
        </button>
        <button
          className={`testimonial-button ${currentIndex === 1 ? 'active' : ''}`}
          onClick={() => goToSlide(1)}
        >
          2
        </button>
        <button
          className={`testimonial-button ${currentIndex === 2 ? 'active' : ''}`}
          onClick={() => goToSlide(2)}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
