import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/chooseSeason.css';  // Import the CSS file

export default function ChooseLadiesSeason() {
  const [gentsCollection, setGentsCollection] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/gents/')
      .then(response => response.json())
      .then(data => {
        setGentsCollection(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="content-container">
        <ul className="card-list">
          {gentsCollection.map((season, index) => (
            <li key={index} className="card-item">
              <div className="card-container">
                <a
                  href={`/gents?season=${season.name.toLowerCase()}`}
                  className="card"
                  style={{ backgroundImage: `url(${season.image})` }}
                >
                  <div className="card-overlay"></div>
                  <div className="card-text">{season.name}</div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
