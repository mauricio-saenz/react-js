import React, { useState, useEffect } from 'react';
import CartContainer from './CartContextProvider';
import Cart from './Cart';

function NavBar(props) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/categories`);
        if (!response.ok) {
          throw new Error('No se pudo obtener las categorías');
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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
    <nav className="navbar navbar-expand-md navbar-light bg-light navbar-fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((category, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href={`/category/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>
        <CartContainer>
          <Cart />
        </CartContainer>
      </div>
    </nav>
  );
}

export default NavBar;
