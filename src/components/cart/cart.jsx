import React from 'react';
import { useCart } from '../../components/context/CartContext';
import './cart.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos!</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu Carrito de Compras</h2>
      
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.imagen} alt={item.nombre} width="60" />
          <div className="item-info">
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.price || 0}</p>
            <p>Cantidad: {item.quantity}</p>
            <button 
              onClick={() => removeItem(item.id)}
              className="remove-btn"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      
      <div className="cart-total">
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
      
      <div className="cart-actions">
        <button onClick={clearCart} className="clear-btn">
            Vaciar Carrito
        </button>
      </div>
      <div className="cart-actions">
        <Link to="/checkout" className="checkout-btn">
            Finalizar Compra
        </Link>
      </div>

    </div>
  );
};

export default Cart;