import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'
import htmlLogo from '../img/iconos/html.png';
import cssLogo from '../img/iconos/css.png';
import jsLogo from '../img/iconos/js.png';
import figmaLogo from '../img/iconos/figma.png';
import uxLogo from '../img/iconos/ux.png';

const Home = () => {
  return (
    <>
      <section className="container text-center  pt-3">
        <h4> Practica tus conocimientos en la categoría que prefieras. </h4>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={htmlLogo} alt="icon_html"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={cssLogo} alt="icon_css"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={jsLogo} alt="icon_js"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={figmaLogo} alt="icon_figma"/>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link to="/cursohtml">
              <img id="icon_html" src={uxLogo} alt="icon_ux"/>
            </Link>
          </div>
        </div>
      </section>
      <NavBar />
    </>
  )
}

export default Home;
