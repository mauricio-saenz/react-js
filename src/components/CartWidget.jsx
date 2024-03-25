import React from 'react';
import { BiCart } from 'react-icons/bi';

function CartWidget(props) {

  return (
        <div>
            <BiCart size="2em" />
            <p className='bg-danger badge'>3</p>
        </div>
  );
}

export default CartWidget;
