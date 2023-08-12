import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

const useProductsContext = () => {
  const context = useContext(ProductsContext)
  if(!context){
    throw Error("useContext must be used inside an ProductsContextProvider")
  }
  return context
}

export default useProductsContext