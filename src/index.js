import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ProductsContextProvider from './context/ProductsContext';
import { RecoilRoot } from 'recoil';

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
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

