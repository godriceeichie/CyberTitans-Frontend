import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fonts = {
  body: "Poppins, sans-serif",
  heading: "Poppins, sans-serif",
  mono: "Poppins, sans-serif", 
  cursive: "Lobster Two, cursive;"
}

const colors = {
  brand: {
    500: "#47AD97"
  }
}
const theme = extendTheme({colors, fonts})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

