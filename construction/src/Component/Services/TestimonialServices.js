import React, { useEffect, useState } from 'react';
import '../../Styles/TestimonialServices.css';
import testimonial1 from '../../images/Services/testimonial1.png';
import testimonial2 from '../../images/Services/testimonial2.png';
import testimonial3 from '../../images/Services/testimonial3.png';

const TestimonialCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2); // Cycle between 0 and 1 for two slides
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider-service">
      {/* Heading */}
      <h2 className="testimonial-heading">Testimonials</h2>

      {/* Slider container */}
      <div
        className="testimonial-slider-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide 1: First 3 cards */}
        <div className="testimonial-slide">
          <div className="testimonial-card-service">
            <div className="testimonial-image-service">
              <img className="service-img" src={testimonial1} alt="John Romer" />
            </div>
            <div className="testimonial-content-service">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut accumsan orci."</p>
              <h4>John Romer</h4>
              <span>Designer</span>
            </div>
          </div>
          <div className="testimonial-card-service">
            <div className="testimonial-image-service">
              <img className="service-img" src={testimonial2} alt="Jane Doe" />
            </div>
            <div className="testimonial-content-service">
              <p>"Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada."</p>
              <h4>Jane Doe</h4>
              <span>Artist</span>
            </div>
          </div>
          <div className="testimonial-card-service">
            <div className="testimonial-image-service">
              <img className="service-img" src={testimonial3} alt="Mike Smith" />
            </div>
            <div className="testimonial-content-service">
              <p>"Aliquam erat volutpat. Integer non lacus tincidunt, luctus arcu sed."</p>
              <h4>Mike Smith</h4>
              <span>Developer</span>
            </div>
          </div>
        </div>

        {/* Slide 2: Next 3 cards */}
        <div className="testimonial-slide">
          <div className="testimonial-card-service">
            <div className="testimonial-image-service">
              <img className="service-img" src={testimonial1} alt="Sarah Connor" />
            </div>
            <div className="testimonial-content-service">
              <p>"Nullam vel purus vel nulla suscipit posuere. Lorem ipsum dolor sit amet consectetur."</p>
              <h4>Sarah Connor</h4>
              <span>Engineer</span>
            </div>
          </div>
          <div className="testimonial-card-service">
            <div className="testimonial-image-service">
              <img className="service-img" src={testimonial2} alt="Tom Hardy" />
            </div>
            <div className="testimonial-content-service">
              <p>"Vivamus ut accumsan orci. Nulla pulvinar sed turpis sit amet ultricies."</p>
              <h4>Tom Hardy</h4>
              <span>Actor</span>
            </div>
          </div>
          <div className="testimonial-card-service">
            <div className="testimonial-image-service">
              <img className="service-img" src={testimonial3} alt="Emily Clark" />
            </div>
            <div className="testimonial-content-service">
              <p>"Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus."</p>
              <h4>Emily Clark</h4>
              <span>Writer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="testimonial-dots">
        <span
          className={`dot ${currentSlide === 0 ? 'active' : ''}`}
          onClick={() => setCurrentSlide(0)}
        ></span>
        <span
          className={`dot ${currentSlide === 1 ? 'active' : ''}`}
          onClick={() => setCurrentSlide(1)}
        ></span>
      </div>
    </div>
  );
};

export default TestimonialCard;
