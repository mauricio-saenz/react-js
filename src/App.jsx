import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemlistcontainer';

function App() {
  return (
    <div className='w-100 container-fluid px-0'>
      <Header />
      <main className='text-center'>
        <h2>Bienvenido</h2>
        <ItemListContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));