import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from '../../context/CartContext';
import './CartWidget.scss';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();

  return (
    <div className="cart-widget">
      <TiShoppingCart className="cart-icon" />
      {totalQuantity > 0 && (
      <span className="cart-count">{totalQuantity}</span>
      )}
    </div>
  );
};

export default CartWidget;
