import React from 'react';
import { useLocation } from 'react-router-dom';
import Calendly from '../../components/Calendly'; // Import the Calendly component';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BookAppointment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // Access the URL query parameters
  const productTitle = searchParams.get('product'); // Extract 'product' parameter from the URL

  return (
    <div>
      <Header/>
      <Calendly/>
      <Footer/>
    </div>
  );
};

export default BookAppointment;
