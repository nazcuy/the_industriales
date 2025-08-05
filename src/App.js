import React from 'react';
import Navbar from './components/layout/NavBar/NavBar.jsx';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
    </div>
  );
}

export default App;
