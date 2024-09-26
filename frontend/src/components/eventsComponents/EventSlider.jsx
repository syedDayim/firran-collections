import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EventSlider() {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Fetch events data from the API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/events/');
        setEvents(response.data); // Assuming response.data is an array of events
      } catch (error) {
        console.error("Error fetching events data", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const nextEvent = () => {
    setIsAnimating(true);
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setIsAnimating(true);
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
  };

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="events-container">
      <button className="nav-button prev" onClick={prevEvent}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="event-slider">
        <div className={`event-image ${isAnimating ? 'fade' : ''}`}>
          <img src={events[currentEvent].image} alt={events[currentEvent].title} />
        </div>
      </div>
      <button className="nav-button next" onClick={nextEvent}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`event-info ${isAnimating ? 'fade' : ''}`}>
        <p className="event-date">{events[currentEvent].date}</p>
        <h2 className="event-title">{events[currentEvent].title}</h2>
        <p className="event-location">{events[currentEvent].location}</p>
        <button className="register-button">REGISTER NOW</button>
      </div>

      {/* Navigation Dots */}
      <div className="dots-container">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`dot ${currentEvent === index ? 'active' : ''}`}
            onClick={() => setCurrentEvent(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .events-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          background-color: #101010;
          font-family: 'Arial', sans-serif;
          color: #debe6b;
          min-height: 100vh;
          position: relative;
        }

        .event-slider {
          width: 100%;
          max-width: 600px;
          margin-bottom: 30px;
        }

        .event-image {
          width: 100%;
          height: 300px;
          background-color: #1a1a1a;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          overflow: hidden;
          transition: opacity 0.5s ease;
        }

        .event-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .nav-button {
          position: fixed; /* Fixed positioning for extreme left and right */
          top: 50%;
          transform: translateY(-50%);
          background-color: transparent; /* Transparent initially */
          color: #ffffff; /* White arrow */
          border: none;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .nav-button:hover {
          background-color: transparent; /* White box on hover */
          color: #101010 !important; /* Black arrow on hover */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
         
        }

        .prev {
          left: 0; /* Extreme left */
        }

        .next {
          right: 0; /* Extreme right */
        }

        .nav-button svg {
          transition: stroke 0.3s ease; /* Smooth color transition */
        }

        .nav-button:hover svg {
          stroke: #101010; /* Change arrow color to black on hover */
        }

        .event-info {
          text-align: center;
          max-width: 400px;
          transition: opacity 0.5s ease;
        }

        .event-date {
          margin: 0;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .event-title {
          margin: 20px 0;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 1px;
          line-height: 1.2;
        }

        .event-location {
          margin: 0 0 30px 0;
          font-size: 16px;
          opacity: 0.8;
        }

        .register-button {
          background-color: #debe6b;
          color: #101010;
          border: none;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .register-button:hover {
          background-color: #e5d090;
          transform: translateY(-2px);
        }

        .fade {
          opacity: 0;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          position: absolute;
          bottom: 20px; /* Position at the bottom of the section */
          width: 100%;
        }

        .dot {
          width: 12px;
          height: 12px;
          background-color: rgba(222, 190, 107, 0.4); /* Inactive dot color */
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .dot.active {
          background-color: #debe6b; /* Active dot color */
        }

        @media (min-width: 768px) {
          .events-container {
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          .event-slider {
            margin-right: 40px;
            margin-bottom: 0;
          }

          .event-info {
            text-align: left;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .event-image, .event-info {
          animation: fadeIn 0.5s ease-out;
        }

        .event-title, .event-location, .register-button {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
