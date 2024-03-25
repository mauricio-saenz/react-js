import React from 'react';
import CartWidget from 'CartWidget';

function NavBar(props) {

  return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Categoria 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Categoria 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Categoria 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Categoria 4</a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
  );
}

export default NavBar;
