import React, { useState } from 'react'


const SelectionMultiple = (props) => {
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
       <div className="row">
        <div className="col-4 d-flex justify-content-center m-3">
          <img src="../../multimedia/characters/Property 1=1.png" alt="characters_1" width="70" />
        </div>
        <div className="col-6 align-self-lefts ms-2">
          <p className="mt-5 text-left ps-2">
            {question.text}
          </p>
        </div>
      </div>

      <div className="respuestas-posibles mt-3">
        <div className="container">
          <div className="row">
            {
              question.options.map((option) => {
                return (
                  <div key={option} className="col-12 d-flex justify-content-center my-2">
                    <span>
                      <input
                        type="radio"
                        name="option"
                        className="radio"
                        value={option}
                        onChange={selectOption}
                      />
                      <label htmlFor="section" className="option">
                        <span className="span_title">{option}</span>
                        <img src="../../multimedia/recursos/checkbox.png" />
                      </label>
                    </span>
                  </div>
                )
              })
            }
            <div className="col-12 d-flex justify-content-center mt-5">
              <button
                id="btn-check"
                className="btn btn-info col-10"
                onClick={check}
              >Comprobar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelectionMultiple

