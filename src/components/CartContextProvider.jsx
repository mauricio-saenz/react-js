import React, { useState, useEffect } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    console.log('cartList:', cartList);
  }, [cartList]);

  const addToCart = async (productIdParam, quantityParam) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productIdParam}`);
  
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
  
      const product = await response.json();
  
      // Verificar si el producto ya está en el carrito
      const existingItemIndex = cartList.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        const updatedCartList = [...cartList];
        updatedCartList[existingItemIndex].quantity+= quantityParam;
        setCartList(updatedCartList);
      } else {
        // Si el producto no está en el carrito, añadirlo con cantidad 1
        setCartList(prevCartList => [
          ...prevCartList,
          {
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: quantityParam
          }
        ]);
      }
    } catch (error) {
      // Manejar errores
      console.error('Error adding product to cart:', error);
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    setCartList(prevCartList => prevCartList.filter(item => item.id !== id));
  };

  const calculateTotalUnit = () => cartList.reduce((total, item) => total + item.quantity, 0);

  const calculateTotalPrice = () => cartList.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <CartContext.Provider value={{ cartList, addToCart, removeList, deleteItem, calculateTotalUnit, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;