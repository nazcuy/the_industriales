import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="welcome-message">{greeting}</h2>
      <p className="welcome-subtext">Explora nuestro catálogo de productos</p>
        <div className="productos-grid">
          <div className="productos"></div>
          <div className="productos"></div>
          <div className="productos"></div>
          <div className="productos"></div>
        </div>
    </div>
  );
};

export default ItemListContainer;