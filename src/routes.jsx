import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/products/ItemDetailContainer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <ItemListContainer saludo="¡Bienvenido a the industriales!" /> },
      { path: '/categoria/:categoryId', element: <ItemListContainer saludo="¡Bienvenido a the industriales!" /> },
      { path: '/item/:itemId', element: <ItemDetailContainer /> },
    ],
  },
]);

export default router;