import React, { useState } from 'react'


const SelectionImg = (props) => {

  const question = props.question;


  const [answer, setAnswer] = useState('')

  function selectOption(ev) {
    setAnswer(ev.target.value)
  }

  function check() {
    props.processAnswer(answer === question.options[0]);
  }

  return (
    <section>
     <div className="container text-center m-3 pt-2">
        <h4> ¿Qué tecnologías pertenece al MEVN Stack? </h4>
    </div>

    <div className="row mt-5">
        <div className="col-6 d-flex justify-content-center">
            <input type="radio" id="angular" name="option" className="radio" value="angular" />
            <label for="angular" className="option" >
                <img id="angular" src="../../multimedia/selection/angular.png" alt="angular" />
            </label>
        </div>
        <div className="col-6 d-flex justify-content-center">
            <input type="radio" id="vue" name="option" className="radio" value="vue" />
            <label for="vue" className="option">
                <img id="vue" src="../../multimedia/selection/vue.png" alt="vue" />
            </label>
        </div>
        <div className="col-6 d-flex justify-content-center">
            <input type="radio" id="windows" name="option" className="radio" value="windows" />
            <label for="windows" className="option">
                <img src="../../multimedia/selection/windows.png" alt="windows" />
            </label>
        </div>
        <div className="col-6 d-flex justify-content-center">
            <input type="radio" id="kotlin" name="option" className="radio" value="kotlin" />
            <label for="kotlin" className="option">
                <img src="../../multimedia/selection/kotlin.png" alt="kotlin" />
            </label>
        </div>
    </div>
    
    <button onclick="comprobar()">comprobar</button>
    </section>
  )
}

export default SelectionImg