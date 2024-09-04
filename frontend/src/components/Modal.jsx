// Modal.js
import React from 'react';
import '../styles/modal.css'; // Style file for the modal

const Modal = ({ isOpen, product, onClose }) => {
  if (!isOpen) return null;

  const handleButtonClick = () => {
    if (!product.is_soldout) {
      window.location.href = '/appointment'; // Redirect to the appointment page
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{product.title}</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-left">
            <img src={product.image} alt={product.title} className="modal-image" />
          </div>
          <div className="modal-right">
            <p>{product.information}</p>
            {product.is_soldout ? (
              <button className="disabled-btn" disabled>
                Sold Out
              </button>
            ) : (
              <button className="appointment-btn" onClick={handleButtonClick}>
                Book an Appointment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;