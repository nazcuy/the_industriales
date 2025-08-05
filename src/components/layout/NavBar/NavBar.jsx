import React from 'react';
import CartWidget from '../../common/CartWidget/CartWidget.jsx';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
    const categorias = [
        { id: 'tasas', name: 'Tasas' },
        { id: 'pedidos', name: 'Pedidos' },
        { id: 'remeras', name: 'Remeras' },
    ];

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo the_industriales" style={{ height: '120px' }} />
        </a>
      </div>
      
      <ul className="nav-links">
        {categorias.map((categoria) => (
            <li key={categoria.id}>
                <a href={`/categoria/${categoria.id}`}>{categoria.name}</a>
            </li>
        ))
        }
      </ul>      
      <CartWidget />
    </nav>
  );
};

export default Navbar;