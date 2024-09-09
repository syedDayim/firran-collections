import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; // Import swipeable hook
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/slider.css';

// Import images at the top
import img1 from '/assets/pic1.jpg';
import img2 from '/assets/pic2.jpg';
import img3 from '/assets/pic3.jpg';

// Define the slides array with image and text
const slides = [
  {
    img: img1,
    text: 'Slide 1',
  },
  {
    img: img2,
    text: 'Slide 2',
  },
  {
    img: img3,
    text: 'Slide 3',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Handle swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPreviousSlide,
  });

  return (
    <div className="slider" {...swipeHandlers}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <h2>{slide.text}</h2>
        </div>
      ))}
      <button className="slider-arrow slider-arrow-left" onClick={goToPreviousSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={goToNextSlide}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Slider;
