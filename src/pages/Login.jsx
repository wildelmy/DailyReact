import React from "react";
import { useHistory } from "react-router-dom";
import "../style/login.css";

const Login = () => {
  return (
    <div id="container" className="alver container pt-5">
      <div id="loader" className="m-auto"></div>
      <div id="login" className="alver text-center">
        <h3 className="m-3"> Iniciar Sesión</h3>

        <div className="d-grid gap-2">
          <button type="button" className="btn btn-danger btn">
            <b>G</b> Ingresar con Google
          </button>
        </div>

        <hr />

        <div>
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <button className="btn btn-primary btn mx-auto">Ingresar</button>
        </div>
        <hr />
        <a href="#" className="text-success">
          ¿Se te olvidó tu contraseña?
        </a>
        <hr />
        <p>
          ¿Aún no tienes cuenta?{" "}
          <a href="main.html" className="text-success">
            Inscribirse
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
