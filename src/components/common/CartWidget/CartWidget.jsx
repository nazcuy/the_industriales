import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import './CartWidget.scss';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <TiShoppingCart className="cart-icon" />
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;
