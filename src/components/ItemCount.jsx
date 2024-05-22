import React, { useState, useContext } from 'react';
import CartContext from './CartContext';

function ItemCount({ productId, stock, initial, onAdd, onFinish }) {
  const initialCount = parseInt(initial, 10);
  const [count, setCount] = useState(initialCount);
  const { addToCart } = useContext(CartContext);

  const increaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (onAdd && count > 0) {
      //onAdd(count);
      addToCart(productId, count);
      //alert("handleAddToCart");
    }
  };

  const handleFinishShopping = () => {
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <div className='d-inline-flex'>
      <button className='btn' onClick={decreaseCount}>-</button>
      <input
        type='number'
        className='form-control w-25'
        value={count}
        readOnly
      />
      <button className='btn' onClick={increaseCount}>+</button>
      <button
        className='btn btn-primary mx-1'
        onClick={handleAddToCart}
        disabled={count === 0}
      >
        Add to cart
      </button>
      <button
        className='btn btn-primary mx-1'
        onClick={handleFinishShopping}
        disabled={count === 0}
      >
        Finish shopping
      </button>
    </div>
  );
}

export default ItemCount;
