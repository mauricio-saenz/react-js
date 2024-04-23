import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <>
      <Router>
        <div className='w-100 container-fluid px-0'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/itemdetail/:productId" element={<ItemDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));