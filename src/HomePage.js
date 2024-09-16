import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import component-specific CSS

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <img src="background.webp" alt="Background" className="background-image" />
      </header>
      <h1 className="company-name">StuCoM</h1>
      <p className="company-description">Welcome to our plant store!</p>
      <Link to="/products">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
}

export default HomePage;
