import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BiCart } from 'react-icons/bi';
import CartContext from './CartContext';

function CartWidget({ showModal }) {
  const { cartList, calculateTotalUnit } = useContext(CartContext);
  const [totalUnits, setTotalUnits] = useState(calculateTotalUnit());

  useEffect(() => {
    setTotalUnits(calculateTotalUnit());
  }, [cartList, calculateTotalUnit]);

  return (
    <div>
      <Button variant="" onClick={showModal}>
        <BiCart size="2em" />
        <p className='bg-danger badge'>{totalUnits}</p>
      </Button>
    </div>
  );
}

export default CartWidget;
