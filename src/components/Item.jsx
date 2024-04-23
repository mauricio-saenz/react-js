import React, { useState, useEffect } from 'react';

function Item({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener el producto');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

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
    <a className="nav-link" href={`/itemdetail/${productId}`}>
      <div className='row py-3'>
          <div className="col-6 col-md-4">      
              <img width={100} src={product.image} alt={product.title} />
          </div>
          <div className="col-6 col-md-8">
              <div className="row">
                  <div className="col-12 col-md-6 my-auto">
                      <h4>{product.title}</h4>
                  </div>
                  <div className="col-12 col-md-6 my-auto">
                      <h5>${product.price}</h5>
                  </div>
              </div> 
          </div>
      </div>
    </a>
  );
}

export default Item;
