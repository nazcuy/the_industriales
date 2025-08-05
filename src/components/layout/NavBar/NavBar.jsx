import React from 'react';
import CartWidget from '../../common/CartWidget/CartWidget.jsx';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">MiTienda</a>
      </div>
      
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/ofertas">Ofertas</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      
      <CartWidget />
    </nav>
  );
};

export default Navbar;