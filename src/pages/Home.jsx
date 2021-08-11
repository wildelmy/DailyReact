import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section class="container text-center  pt-3">
      <h4> Practica tus conocimientos en la categoría que prefieras. </h4>

      <div class="row mt-5">
        <div class="col-12 d-flex justify-content-center">
          <Link to="/cursohtml">
            <img id="icon_html" src="multimedia/logos/html.png" alt="icon_html"/>
          </Link>
        </div>
      </div>
    </section>
  
      )
}
      export default Home
