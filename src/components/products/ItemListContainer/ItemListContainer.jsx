import React from 'react';
import pedidos1 from '../../../assets/images/pedidos/1.jpg';
import pedidos2 from '../../../assets/images/pedidos/2.jpg';
import pedidos3 from '../../../assets/images/pedidos/3.jpg';
import tasas1 from '../../../assets/images/tasas/1.jpg';
import tasas2 from '../../../assets/images/tasas/2.jpg';
import tasas3 from '../../../assets/images/tasas/3.jpg';
import remeras1 from '../../../assets/images/remeras/1.jpg';
import remeras2 from '../../../assets/images/remeras/2.jpg';
import remeras3 from '../../../assets/images/remeras/3.jpg';
import './ItemListContainer.scss';

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="item-list-container">
      <h2 className="bienvenida">{saludo}</h2>
      <p className="bienvenida-subtit">Explorá nuestro catálogo de productos</p>

      <div className="fila fila-3">
        <img src={pedidos1} alt="Pedidos 1" />
        <img src={pedidos2} alt="Pedidos 2" />
        <img src={pedidos3} alt="Pedidos 3" />
      </div>

      <div className="fila fila-2">
        <img src={tasas1} alt="Tasas 1" />
        <img src={tasas2} alt="Tasas 2" />
        <img src={tasas3} alt="Tasas 3" />
      </div>

      <div className="fila fila-3">
        <img src={remeras1} alt="Remeras 1" />
        <img src={remeras2} alt="Remeras 2" />
        <img src={remeras3} alt="Remeras 3" />
      </div>
    </div>
  );
};

export default ItemListContainer;