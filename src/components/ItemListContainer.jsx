import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <p>Este es el contenedor del Item List.</p>
    </div>
  );
};

export default ItemListContainer;