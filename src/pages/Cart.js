import React from 'react';
import '../styles/Cart.css';
import { Link as RouterLink } from "react-router-dom"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    updatedCartItems[index].totalPrice = updatedCartItems[index].price * newQuantity;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedQuantity = Math.max(1, cartItems[index].quantity - 1);
    handleQuantityChange(index, updatedQuantity);
  };

  const handleIncrement = (index) => {
    const updatedQuantity = cartItems[index].quantity + 1;
    handleQuantityChange(index, updatedQuantity);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

    const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [userName, setUserName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [bankName, setBankName] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePayClick = () => {
    // Handle payment logic here
    // You can use the entered payment information to process the payment
    // For this example, let's just show a success alert
    alert('Payment successful!');
  };

  return (
    <div className='cartContainer'>
      <h2>Your Cart</h2>
        <div className='cartChild'>
            <div className='cartItems'>
                {cartItems.map((item, index) => (
                <div key={index} className='cartItem'>
                    <img src={item.image} alt={item.name} />
                    <div className='cartItemDetails'>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <div className='quantityControls'>
                            <button className='quantityButton' onClick={() => handleDecrement(index)}>-</button>
                            <span className='quantity'>{item.quantity}</span>
                            <button className='quantityButton' onClick={() => handleIncrement(index)}>+</button>
                        </div>
                        <p>Total: ${item.totalPrice}</p>
                        <button className='removeButton' onClick={() => handleRemoveItem(index)}>Remove</button>
                        <Link as={RouterLink} to={'/checkout'}>
                            <button className='checkoutButtonInItem'>Checkout</button>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Cart;
