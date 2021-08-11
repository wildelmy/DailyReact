import React, { useState } from 'react'

const pregunta = {
  texto: '¿Qué etiqueta es semánticamente correcta para el contenido principal?',
  opciones: [
    'Main',
    'Section',
    'Header'
  ]
}

const SelectionMultiple = () => {

  const [respuesta, setRespuesta] = useState('')

  function seleccionarRespuesta(ev) {
    setRespuesta(ev.target.value)
  }

  function comprobar() {
    if (respuesta === pregunta.opciones[0]) {
      alert('muy bien')
    } else {
      alert('intenta otra vez ')
    }
    console.log(respuesta)
  }

  return (
    <section>
      <div className="row">
        <div className="col-4 d-flex justify-content-center m-3">
          <img src="../../multimedia/characters/Property 1=1.png" alt="characters_1" width="70" />
        </div>
        <div className="col-6 align-self-lefts ms-2">
          <p className="mt-5 text-left ps-2">
            {pregunta.texto}
          </p>
        </div>
      </div>

      <div className="respuestas-posibles mt-3">
        <div className="container">
          <div className="row">
            {
              pregunta.opciones.map((opcion) => {
                return (
                  <div key={opcion} className="col-12 d-flex justify-content-center my-2">
                    <span>
                      <input
                        type="radio"
                        name="option"
                        className="radio"
                        value={opcion}
                        onChange={seleccionarRespuesta}
                      />
                      <label htmlFor="section" className="option">
                        <span className="span_title">{opcion}</span>
                        <img src="../../multimedia/recursos/checkbox.png" />
                      </label>
                    </span>
                  </div>
                )
              })
            }
            <div className="col-12 d-flex justify-content-center mt-5">
              <button
                id="btn-comprobar"
                className="btn btn-info col-10"
                onClick={comprobar}
              >Comprobar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelectionMultiple

