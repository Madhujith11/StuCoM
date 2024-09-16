import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from './redux/actions';
import './ShoppingCartPage.css'; // Import component-specific CSS

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));
  const handleRemove = (id) => dispatch(removeFromCart(id));

  const totalCost = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="shopping-cart-page">
      <h2>Total Plants: {cart.items.length}</h2>
      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
      <button className="checkout-button">Checkout (Coming Soon)</button>
      <button className="continue-shopping-button" onClick={() => window.location.href = '/products'}>Continue Shopping</button>

      {cart.items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={`/${item.name}.jpg`} alt={item.name} className="cart-item-thumbnail" />
          <h3 className="cart-item-name">{item.name}</h3>
          <p className="cart-item-price">${item.price}</p>
          <button onClick={() => handleIncrease(item.id)} className="cart-item-button">+</button>
          <span className="cart-item-quantity">{item.quantity}</span>
          <button onClick={() => handleDecrease(item.id)} className="cart-item-button">-</button>
          <button onClick={() => handleRemove(item.id)} className="cart-item-delete-button">Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCartPage;
