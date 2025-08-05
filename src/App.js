import React from 'react';
import Navbar from './components/layout/NavBar/NavBar.jsx';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a the industriales!" />
    </div>
  );
}

export default App;
