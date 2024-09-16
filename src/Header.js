import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'; // Import component-specific CSS

function Header() {
  const cartItems = useSelector(state => state.cart.items.length);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/products">Product Listing</Link>
        <Link to="/cart">Shopping Cart ({cartItems})</Link>
      </nav>
    </header>
  );
}

export default Header;

