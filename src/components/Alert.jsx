import React from "react";

const Alert = (props) => {
  if (props.hide) {
    return <div></div>
  }
  return props.isCorrect ? (
    <div className="alert alert-success d-flex flex-column py-3 m-0">
      <span className="mb-3">¡Buen trabajo!</span>
      <button className="btn btn-info" onClick={props.next}>
        Continuar
      </button>
    </div>
  ) : (
    <div className="alert alert-danger d-flex flex-column py-3 m-0">
      <span className="mb-3">Respuesta incorrecta</span>
      <button className="btn btn-danger" onClick={props.next}>
        Continuar
      </button>
    </div>
  );
};

export default Alert;
