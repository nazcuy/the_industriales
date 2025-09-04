import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';

const ItemDetail = ({ item }) => (
  <div className="item-detail">
    <img src={item.imagen} alt={item.nombre} />
    <h2>{item.nombre}</h2>
    <p>Categoria: {item.categoria}</p>
    <ItemCount />
  </div>
);

export default ItemDetail;