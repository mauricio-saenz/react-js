import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import BackButton from './BackButton';
import { useParams } from 'react-router-dom';

function ItemDetail() { 
  const { productId } = useParams();

  const [cartQuantity, setCartQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(productId);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  async function getProductById(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const data = await response.json();
    return data;
  }

  const handleAddToCart = (quantity) => {
    setCartQuantity(quantity);
  };

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

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-12 text-end">
          <BackButton/>
        </div>
      </div>
      <div className='row py-3 text-center'>
        <div className="col-12 col-md-6">      
            <img className='w-75' src={product.image} alt={product.title} />
        </div>
        <div className="col-12 col-md-6 p-3">
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>Price: <span className='fw-bold'>${product.price}</span></p>
            <ItemCount
                productId={productId}
                stock={10}
                initial={1}
                onAdd={(count) => handleAddToCart(count)}
                onFinish={() => console.log('Finish shopping clicked')}
              />
            <p className='mt-5'>{product.stock} Units available</p>
        </div>
    </div>
    </div>
  );
}

export default ItemDetail;
