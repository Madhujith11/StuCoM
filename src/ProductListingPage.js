import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/actions';
import './ProductListingPage.css'; // Import component-specific CSS

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents' },
  { id: 2, name: 'Fern', price: 15, category: 'Ferns' },
  // Add more products here
];

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-listing-page">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={`/${product.name}.jpg`} alt={product.name} className="product-thumbnail" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            disabled={cartItems.some(item => item.id === product.id)}
            className="add-to-cart-button"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;
