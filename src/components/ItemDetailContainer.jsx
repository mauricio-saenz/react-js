import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ productId }) => {

  return (
    <div className='row py-3'>
      <ItemDetail productId={'productId'} />
    </div>
  );

};

export default ItemDetailContainer;