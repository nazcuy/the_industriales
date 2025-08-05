import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="welcome-message">{greeting}</h2>
      {/* Futuro catálogo irá aquí */}
    </div>
  );
};

export default ItemListContainer;