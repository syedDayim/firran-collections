import React from 'react';
import '../styles/noProduct.css'; // Import the CSS file for styling
import outofstock from '/outofstock.png';

export default function NoProduct() {
  return (
    <div className="no-product-container">
      <img 
        src={outofstock} 
        alt="No Products Available" 
        className="no-product-image" 
      />
      {/* <p className="no-product-text">No products available</p> */}
    </div>
  );
}
