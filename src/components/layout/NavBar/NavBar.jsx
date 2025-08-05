import React from 'react';
import CartWidget from '../../common/CartWidget/CartWidget.jsx';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo the_industriales" style={{ height: '120px' }} />
        </a>
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