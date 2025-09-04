import React from 'react';
import Item from '../Item/Item';
import './ItemList.scss';

const ItemList = ({ items }) => {
  return (
    <div className="fila">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;