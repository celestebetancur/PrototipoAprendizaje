import React from 'react';
import logo from './assets/logo.png';

const Header = ()=> {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src={logo} className="img-fluid" width="150" height="150" alt="Emerger"></img>
          </div>
          <div id="canvas" className="col-sm">
          </div>
          <div className="col-1">
            <p><br></br>Un viaje de aprendizaje</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
