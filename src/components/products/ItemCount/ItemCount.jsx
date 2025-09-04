import React, { useState } from 'react';
import './ItemCount.scss';

const ItemCount = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;