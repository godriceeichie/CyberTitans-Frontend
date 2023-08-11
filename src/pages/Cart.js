import React from 'react';
import '../styles/Cart.css';
import Swal from 'sweetalert2';
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

   const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleCheckoutClick = () => {
    setShowCheckoutModal(true);
  };

  const handleCheckoutSubmit = () => {
    if (!cardNumber || !bankAccountNumber || !address) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the fields!',
      });
      return;
    }

    // Handle submission logic here
    // You can collect input data from the user and perform necessary actions
    // For this example, let's just show a success alert
    Swal.fire({
      icon: 'success',
      title: 'Checkout Successful!',
      text: 'Thank you for your purchase!',
    });

    // Reset cart after successful checkout
    setCartItems([]);
    setShowCheckoutModal(false);
  };

  const handleCloseModal = () => {
    setShowCheckoutModal(false);
  };

  return (
    <div className='cartContainer'>
      <h2>Your Cart</h2>
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
            </div>
          </div>
        ))}
      </div>
      
      <button className='checkoutButton' onClick={handleCheckoutClick}>
        Checkout
      </button>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className='checkoutModal'>
          <div className='modalContent'>
            <h3>Checkout</h3>
            <input
              type='text'
              placeholder='Card Number'
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type='text'
              placeholder='Bank Account Number'
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
            />
            <input
              type='text'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className='modalButtons'>
              <button onClick={handleCheckoutSubmit}>Submit</button>
              <button onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
