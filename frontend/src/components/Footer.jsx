import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      <div className="contact-info">
        <div className="phone-container">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:+9541555555" className="phone-number">+9541555555</a>
        </div>
        <div className="phone-container">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:+9541234567" className="phone-number">+9541234567</a>
        </div>
        <div className="email-container">
          For support, write to us at <a href="mailto:support@firran.com" className="email-link" style={{paddingLeft: '5px'}}>support@firran.com</a>
        </div>
      </div>

      <div className="company-name">
        Firran LLC
      </div>
    </footer>
  );
};

export default Footer;