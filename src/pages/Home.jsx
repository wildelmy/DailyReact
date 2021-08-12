import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'
import img from '../img/img.js';

const Home = () => {
  return (
    <>
      <section className="container text-center  pt-3">
        <h4> Practica tus conocimientos en la categoría que prefieras. </h4>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={img['logo-html']} alt="icon_html"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={img['logo-css']} alt="icon_css"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={img['logo-js']} alt="icon_js"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={img['logo-figma']} alt="icon_figma"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={img['logo-ux']} alt="icon_ux"/>
            </Link>
          </div>
        </div>
      </section>
      <NavBar />
    </>
  )
}

export default Home;
