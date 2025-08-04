import React from 'react';
import NavBar from './components/layout/NavBar/NavBar';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <ItemListContainer greeting="¡Bienvenido a TechShop!" />
      </main>
    </div>
  );
}

export default App;
