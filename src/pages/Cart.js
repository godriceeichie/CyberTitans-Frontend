import React from 'react'
import '../styles/Cart.css'


const Cart = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <div className='cartI'>
      <h2>Your Cart</h2>
      <div className='cartItems'>
        {cartItems.map((item, index) => (
          <div key={index} className='cartItem'>
            <img src={item.image} alt={item.name} />
            <div className='cartItemDetails'>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <input
                type='number'
                value={item.quantity || 1}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              />
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <button className='checkoutButton'>Checkout</button>
    </div>
  );
};

export default Cart;