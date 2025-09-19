import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './assets/styles/main.scss';
import { CartProvider } from './components/context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
)
