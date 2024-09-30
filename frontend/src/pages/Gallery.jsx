import React, { useState } from 'react';

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e", alt: "Portrait by Jessica Felicio", caption: "Jessica Felicio" },
    { src: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06", alt: "Portrait by Oladimeji Odunsi", caption: "Oladimeji Odunsi" },
    { src: "https://images.unsplash.com/photo-1542513217-0b0eedf7005d", alt: "Portrait by Alex Perez", caption: "Alex Perez" },
    { src: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b", alt: "Portrait by Aiony Haust", caption: "Aiony Haust" },
    { src: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5", alt: "Portrait by Ivana Cajina", caption: "Ivana Cajina" },
    { src: "https://images.unsplash.com/photo-1505151228723-18d0f726f3b1", alt: "Portrait by Jeffery Erhunse", caption: "Jeffery Erhunse" },
    { src: "https://images.unsplash.com/photo-1495649904698-0f3670bdf61f", alt: "Portrait by Mari Lezhava", caption: "Mari Lezhava" },
    { src: "https://images.unsplash.com/photo-1627388020481-4330ab86d091", alt: "Portrait by Suad Kamardeen", caption: "Suad Kamardeen" },
    { src: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b", alt: "Portrait by Ethan Haddox", caption: "Ethan Haddox" },
    { src: "https://images.unsplash.com/photo-1593501273289-354b4fcf3add", alt: "Portrait by Tyler Nix", caption: "Tyler Nix" },
    { src: "https://images.unsplash.com/photo-1619378607926-710cb2d2f9a3", alt: "Portrait by Jasmin Chew", caption: "Jasmin Chew" },
    { src: "https://images.unsplash.com/photo-1586245895595-395fb6ffd945", alt: "Portrait by Dima DallAcqua", caption: "Dima DallAcqua" },
  ];

  const openModal = (image) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery__item" onClick={() => openModal(image)}>
          <figure className="gallery__thumb">
            <img src={image.src} alt={image.alt} className="gallery__image" />
            <figcaption className="gallery__caption">
              <span>{image.caption}</span>
            </figcaption>
          </figure>
        </div>
      ))}

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.src} alt={modalImage.alt} className="modal__image" />
            <figcaption className="modal__caption">{modalImage.caption}</figcaption>
            <button className="modal__close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}

      <style jsx>{`
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