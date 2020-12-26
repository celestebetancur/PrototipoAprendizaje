import React from 'react';

const Navigation = ()=> {
  return (
    <nav>
      <div className="container">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
          <b>Juego Educativo - Quest</b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <b>¿Qué es?</b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <b>¿Quiénes somos?</b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
          <b>¿Cómo es?</b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabIndex="1" aria-disabled="true">
          <b>Contacto</b>
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navigation;
