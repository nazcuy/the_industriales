import React, { useState } from 'react';
import { useCart } from '../../components/context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../services/firebase';
import './checkoutForm.scss';

const CheckoutForm = () => {
  const { cart, clearCart, getTotalPrice } = useCart();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        buyer: userData,
        items: cart,
        total: getTotalPrice(),
        date: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Hubo un error al procesar tu compra. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="order-success">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <p>Te enviaremos un email con los detalles de tu pedido.</p>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar Compra</h2>
      
      <div className="order-summary">
        <h3>Resumen de tu pedido</h3>
        {cart.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.nombre} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="order-total">
          <strong>Total: ${getTotalPrice()}</strong>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="user-form">
        <h3>Datos de envío</h3>
        
        <div className="form-group">
          <label>Nombre completo</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Procesando...' : 'Confirmar Compra'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;