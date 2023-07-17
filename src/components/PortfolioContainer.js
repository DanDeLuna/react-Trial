import React, { useState } from 'react';
import NavBar from './Navbar';
import About from './pages/about';
import Portfolio from './pages/projects';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Footer from './footer';
import '../stylesheet/portfilio.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='body text-bg-secondary p-3'>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}