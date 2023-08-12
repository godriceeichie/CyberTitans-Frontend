import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import CartContextProvider from './context/CartContext';
import ProductsContextProvider from './context/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fonts = {
  body: "Plus Jakarta Sans, sans-serif",
  heading: "Plus Jakarta Sans, sans-serif",
  mono: "Plus Jakarta Sans, sans-serif", 
  cursive: "Lobster Two, cursive;"
}

const colors = {
  brand: {
    500: "#659e38",
    600: "#23856D"
  },
  textColor:{
    400: "#252B42"
  },
  secondTextColor: {
    400: "#737373"
  }

}
const theme = extendTheme({colors, fonts})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CartContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </CartContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

