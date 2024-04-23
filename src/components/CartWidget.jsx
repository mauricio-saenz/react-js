import React from 'react';
import { BiCart } from 'react-icons/bi';

function CartWidget() {

  return (
        <button type="button" className="btn bordered-0" data-bs-toggle="modal" data-bs-target="#cartModal">
            <BiCart size="2em" />
            <p className='bg-danger badge'>3</p>
        </button>
  );
}

export default CartWidget;
