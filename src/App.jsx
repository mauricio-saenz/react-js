import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContextProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className='w-100 container-fluid px-0'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/itemdetail/:productId" element={<ItemDetail />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
