import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="Carrito">🛒</span>
      <span className="cart-count">0</span>
    </div>
  );
};

export default CartWidget;
