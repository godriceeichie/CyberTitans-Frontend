import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { cartItems: [action.payload, ...state.cart] };
      case "DELETE":
        let data = [...state.cartItems];
        return {
          cartItems: data.filter((items) => {
            return items.id !== action.payload.id;
          }),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: null,
  });
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
