import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around">
      <Link to="/home" className="icon d-flex flex-column align-items-center">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link to="" className="icon d-flex flex-column align-items-center">
        <i className="fas fa-chart-line"></i>
        <span>Estadisticas</span>
      </Link>
      <Link to="" className="icon d-flex flex-column align-items-center">
        <i className="fas fa-user"></i>
        <span>Perfil</span>
      </Link>
    </nav>
  )
}

export default NavBar;
