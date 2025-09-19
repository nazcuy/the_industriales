import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../../common/CartWidget/CartWidget';
import logo from '../../../assets/images/logo.png';


const Navbar = () => {
    const categorias = [
        { id: 'tazas', name: 'Tazas' },
        { id: 'pedidos', name: 'Pedidos' },
        { id: 'remeras', name: 'Remeras' },
    ];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo the_industriales" style={{ height: '120px' }} />
        </Link>
      </div>
      
      <ul className="nav-links">
        {categorias.map((categoria) => (
            <li key={categoria.id}>
                <Link to={`/categoria/${categoria.id}`}>{categoria.name}</Link>
            </li>
        ))
        }
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;