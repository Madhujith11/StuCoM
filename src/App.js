import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductListingPage from './ProductListingPage';
import ShoppingCartPage from './ShoppingCartPage';
import Header from './Header';
import './App.css'; // Import the global CSS file

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

