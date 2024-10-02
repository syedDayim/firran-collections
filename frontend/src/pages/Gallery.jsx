import React, { useState, useEffect } from 'react';
import loading from '../../public/loading.gif';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch gallery images from backend
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/gallery/')
      .then((response) => {
        setImages(response.data);  // Set fetched images to state
        setIsLoading(false);  // Data loaded, set loading to false
      })
      .catch((error) => {
        console.error('There was an error fetching the gallery images!', error);
        setIsLoading(false);  // Set loading to false even on error
      });
  }, []);  // Empty array ensures this runs once on component mount

  const openModal = (image) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-container">
      {/* Show loading spinner or image while data is being fetched */}
      {isLoading ? (
        <div className="loading-spinner"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

          <img src={loading} alt="Loading..." style={{width: '10%'}}  loading="lazy" />
        </div>
      ) : (
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery__item" onClick={() => openModal(image)}>
              <figure className="gallery__thumb">
                <img src={image.image} alt={image.title} className="gallery__image" />
                <figcaption className="gallery__caption">
                  <span>{image.title}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      )}

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.image} alt={modalImage.title} className="modal__image" />
            <figcaption className="modal__caption">{modalImage.title}</figcaption>
            <button className="modal__close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}

      <style jsx>{`

      
        .gallery-container {
          position: relative;
        }

        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          grid-gap: 1rem;
          max-width: 1800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .gallery__item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery__item::after {
          content: '';
          display: block;
          padding-bottom: 150%; /* 2:3 aspect ratio */
        }

        .gallery__item:hover {
          transform: scale(1.03);
        }

        .gallery__thumb {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin: 0;
        }

        .gallery__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .gallery__item:hover .gallery__image {
          transform: scale(1.1);
        }

        .gallery__caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
          color: white;
          font-size: 1rem;
          text-align: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery__item:hover .gallery__caption {
          opacity: 1;
        }

        .gallery__caption span {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: rgba(0,0,0,0.5);
          border-radius: 20px;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal__content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          opacity: 0;
          transform: scale(0.9);
          animation: zoomIn 0.3s ease forwards;
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal__image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
        }

        .modal__caption {
          color: white;
          text-align: center;
          padding: 1rem;
          font-size: 1.2rem;
          font-weight: 300;
        }

        .modal__close {
          position: absolute;
          top: -2rem;
          right: -2rem;
          background: transparent;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .modal__close:hover {
          transform: rotate(90deg);
        }

        @media (max-width: 768px) {
          .gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1.5rem;
            padding: 1.5rem;
          }

          .modal__close {
            top: 1rem;
            right: 1rem;
          }
        }

        
      `}</style>
    </div>
  );
};

export default Gallery;
