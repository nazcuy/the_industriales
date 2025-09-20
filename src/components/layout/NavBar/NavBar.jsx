import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../../common/CartWidget/CartWidget';
import './NavBar.scss';


const Navbar = () => {
    const categorias = [
        { id: 'tazas', name: 'Tazas' },
        { id: 'pedidos', name: 'Pedidos' },
        { id: 'remeras', name: 'Remeras' },
    ];

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="/images/logo.png" alt="Logo the_industriales" style={{ height: '120px' }} />
        </NavLink>
      </div>
      
      <ul className="nav-links">
            {categorias.map((categoria) => (
            <li key={categoria.id}>
                <NavLink 
                  to={`/categoria/${categoria.id}`}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {categoria.name}
                </NavLink>
            </li>
        ))}
      </ul>

      <NavLink to="/cart"
      className={({ isActive }) => isActive ? 'cart-link active' : 'cart-link'}
      >
        <CartWidget />
      </NavLink>
    </nav>
  );
};

export default Navbar;