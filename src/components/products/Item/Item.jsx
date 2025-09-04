import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imagen} alt={item.nombre} />
      <p>{item.nombre}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;