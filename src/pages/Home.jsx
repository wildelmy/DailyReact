import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'
import { logoCss, logoHtml, logoUx, logoJs, logoFigma } from '../img/img.js';

const Home = () => {
  return (
    <>
      <section className="container text-center  pt-3">
        <h4> Practica tus conocimientos en la categoría que prefieras. </h4>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img src={logoHtml} alt="icon_html"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img src={logoCss} alt="icon_css"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img src={logoJs} alt="icon_js"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img src={logoFigma} alt="icon_figma"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img src={logoUx} alt="icon_ux"/>
            </Link>
          </div>
        </div>
      </section>
      <NavBar />
    </>
  )
}

export default Home;
