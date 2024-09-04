import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/productPage.css'; // Adjust the path according to your project structure
import NoProduct from '../../components/NoProduct';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Modal from '../../components/Modal'; // Import Modal component

const Gents = () => {
  const [gentsProducts, setGentsProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Products:', data);

        // Extract the 'season' query parameter from the URL
        const searchParams = new URLSearchParams(location.search);
        const season = searchParams.get('season');
        console.log('Season from URL:', season);

        // Filter products by gender and season
        const filteredProducts = data.filter(product => 
          product.gender === 'Male' && 
          (!season || product.category.toLowerCase() === season.toLowerCase())
        );
        console.log('Filtered Gents Products:', filteredProducts);
        setGentsProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [location]);

  const handleKnowMore = (product) => {
    setSelectedProduct(product); // Open modal with selected product
  };

  const closeModal = () => {
    setSelectedProduct(null); // Close modal
  };

  return (
    <div className="gents-container">
      <Header/>

      {gentsProducts.length === 0 ? (
        <NoProduct />
      ) : (
        <div className="gents-grid">
          {gentsProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <div className="product-actions">
                  <a
                    href="#"
                    className="know-more"
                    onClick={() => handleKnowMore(product)} // Trigger modal on click
                  >
                    Know More
                  </a>
                  {product.is_soldout && <span className="sold-out">Sold Out</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Component */}
      <Modal isOpen={!!selectedProduct} product={selectedProduct} onClose={closeModal} />

    </div>
  );
};

export default Gents;
