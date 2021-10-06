import React, { useState } from 'react';
import Nav from '../Nav';
 import Resume from '../pages/Resume';
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';


function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState('About');
  const renderPage = () => {

    switch (currentPage) {
      case "About":
        return <About></About>
      case "Project":
        return <Project></Project>
      case "Contact":
        return <Contact></Contact>
      case "Resume":
        return <Resume></Resume>
      default:
        return <About></About>
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default PortfolioContainer;
