import React, { useState } from 'react';
import { Juancho } from '../img/img.js';

const SelectionMultiple = (props) => {
  const question = props.question;
  const [answerIndex, setAnswerIndex] = useState(null);

  // useEffect(()=> {
  //   console.log(156)
  // },[question])

  function check() {
    if (answerIndex !== null) {
      props.processAnswer(answerIndex === question.correct);
    }
  }

  return (
    <div>
       <div className="row">
        <div className="col-4 d-flex justify-content-center m-3">
          <img src={Juancho} alt="characters_1" width="70" />
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
              question.options.map((option, index) => {
                return (
                  <div key={index} className="col-12 mb-3">
                    <span className="radio">
                      <input
                        id={index}
                        type="radio"
                        name="option"
                        className="radio"
                        value={index}
                        onChange={() => setAnswerIndex(index)}
                      />
                      <label htmlFor={index} className="option">{option}</label>
                    </span>
                  </div>
                )
              })
            }
            <div className="col-12 d-flex justify-content-center mt-5">
              <button
                className="btn btn-info col-10"
                onClick={check}
              >Comprobar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectionMultiple

