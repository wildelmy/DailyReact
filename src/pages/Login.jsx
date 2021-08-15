import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../style/login.css";
import { UserContext } from "../App";

const Login = () => {
  const user = useContext(UserContext);
  
  console.log(user);
  
  const [email, setEmail] = useState('');
  
  function onChangeEmail(ev) {
    console.log(onChangeEmail)
  }
  
  
  function login() {
    
  }

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
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <button className="btn btn-primary btn mx-auto" onClick={login}>Ingresar</button>
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
