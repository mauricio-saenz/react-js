import React, { useState } from 'react';
import { BiCart } from 'react-icons/bi';

function ItemCount({stock, initial, onAdd}) {
  const initialCount = parseInt(initial);
  const [count, setCount] = useState(initialCount);

  const increaseCount = () => {
    const newCount = count + 1;
    //alert(newCount);
    if (newCount <= stock) {
      setCount(newCount);
    }
  };  

  const decreaseCount = () => {
    const newCount = count - 1;
    //alert(newCount);
    if (newCount > -1)
      setCount(newCount);
  };

  const handleAddToCart = () => {
    if (onAdd && count>0) {
      //alert("Añadimos al carrito: " + count);
      onAdd(count);
    }
  };

  return (
    <div className='d-inline-flex'>
      <button className='btn' onClick={decreaseCount}>-</button>
      <input type='number' className='form-control w-25' value={count} />
      <button className='btn' onClick={increaseCount}>+</button>
      <button className='btn btn-primary' onClick={handleAddToCart} disabled={count === 0}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
