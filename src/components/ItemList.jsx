import React from 'react';
import Item from './Item';

function ItemList({ numbersArray }) {

  return (
    <div>
      <ul className="list-group list-group-flush">
        {numbersArray.map((number, index) => (
          <li key={index} className="list-group-item">
            <Item productId={number} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
