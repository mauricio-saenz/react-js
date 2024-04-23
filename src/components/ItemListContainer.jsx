import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ category }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productsIdArray, setProductsIdArray] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('No se pudo obtener los productos');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    setProductsIdArray(products.map((product) => product.id));
  }, [products]);

  if (loading) {
    return <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <ItemList numbersArray={productsIdArray} />
    </div>
  );
};

export default ItemListContainer;
