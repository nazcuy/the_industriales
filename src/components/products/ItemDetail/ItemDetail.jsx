import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';

const ItemDetail = ({ item }) => (
  <div className="item-detail">
    <img src={item.imagen} alt={item.nombre} />
    <h2>{item.nombre}</h2>
    <p>Categoría: {item.categoria}</p>
    <p className="price">Precio: ${item.price}</p>
    <ItemCount item={item} />
  </div>
);

export default ItemDetail;