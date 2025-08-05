import React from 'react';
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = ({ cantItems }) => {
  return (
    <div className="cart-widget">
      <TiShoppingCart className="cart-icon" />
      {cantItems > 0 && (
        <span className="cart-count">{cantItems}</span>
      )}
    </div>
  );
};

export default CartWidget;
