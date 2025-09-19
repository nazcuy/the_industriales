import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/products/ItemDetailContainer.jsx';
import Cart from './components/cart/cart.jsx';
import CheckoutForm from './components/checkoutForm/checkoutForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <ItemListContainer saludo="¡Bienvenido a the industriales!" /> },
      { path: '/categoria/:categoryId', element: <ItemListContainer saludo="¡Bienvenido a the industriales!" /> },
      { path: '/item/:itemId', element: <ItemDetailContainer /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <CheckoutForm /> },
    ],
  },
]);

export default router;