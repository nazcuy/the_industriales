import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './ItemCount.scss';

const ItemCount = ({ item }) => {
  const [count, setCount] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item, count);
    alert(`¡Agregaste ${count} ${item.nombre} al carrito!`);
  };

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;