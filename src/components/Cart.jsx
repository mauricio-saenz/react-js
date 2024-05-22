import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CartContext from './CartContext';
import CartWidget from './CartWidget';
import { BiTrash } from 'react-icons/bi';

function Cart() {
  const [showModal, setShowModal] = useState(false);
  const [totalUnit, setTotalUnit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cartList, addToCart, removeList, deleteItem, calculateTotalUnit, calculateTotalPrice } = useContext(CartContext);

  useEffect(() => {
    setTotalUnit(calculateTotalUnit());
  }, [cartList, calculateTotalUnit]);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cartList, calculateTotalPrice]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleRemoveList = () => {
    removeList();
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  return (
    <div>
      <CartWidget showModal={handleShowModal} />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton className='text-center'>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <div className="row">
            <div className="offset-1 col-2">
              <p>Name</p>
            </div>
            <div className="col-2">
              <p>Price Unit</p>
            </div>
            <div className="col-2">
              <p>Subtotal</p>
            </div>
            <div className="col-2">
              <p>Quantity</p>
            </div>
            <div className="col-2">
              <p>Delete</p>
            </div>
          </div>
          {cartList && cartList.length > 0 ? (
            cartList.map((item, index) => (
              <div className="row my-1" key={index}>
                <div className="offset-1 col-2">
                  {item.name}
                </div>
                <div className="col-2">
                  ${item.price}
                </div>
                <div className="col-2">
                  ${item.price * item.quantity}
                </div>
                <div className="col-2">
                  {item.quantity}
                </div>
                <div className="col-2">
                  <Button variant="secondary text-start" onClick={() => handleDeleteItem(item.id)}>
                    <BiTrash />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No items in the cart</p>
            </div>
          )}
          <div className="row mt-4">
            <div className="offset-1 col-2"></div>
            <div className="col-2">Total:</div>
            <div className="col-2">${totalPrice.toFixed(2)}</div>
            <div className="col-2"></div>
            <div className="col-2"></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary text-start" onClick={handleRemoveList}>
            <BiTrash />
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
