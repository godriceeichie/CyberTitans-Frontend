import React, { createContext, useReducer } from 'react'

export const CartContext = createContext()
const CartContextProvider = ({children}) => {
    const cartReducer = (state, action) => {
        switch(action.type){
            case 'ADD':
                return { cart: [action.payload, ...state.cart]}
            case 'DELETE':
                let data = [...state.cart]
                return {
                    cart: (
                        data.filter((items) => {
                            return items.id !== action.payload.id
                        })
                    )
                        
                    
                }
        }
    }
    const [state, dispatch] = useReducer(cartReducer, {
        cart: null
    })
  return (
    <CartContext.Provider value={{...state, dispatch}}>
        {
            children
        }
    </CartContext.Provider>
  )
}

export default CartContextProvider