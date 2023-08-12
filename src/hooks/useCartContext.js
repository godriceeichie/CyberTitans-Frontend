import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const useCartContext = () => {
  const context = useContext(CartContext)
  if(!context){
    throw Error("useContext must be used inside an CartContextProvider")
  }
  return context
}

export default useCartContext