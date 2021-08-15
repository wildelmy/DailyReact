import React, { useState } from "react";
import SelectionMultiple from "../components/SelectionMultiple";
import ProgressBar from "../components/ProgressBar";
import Alert from "../components/Alert";
import htmlQuestions from '../questions/htmlQuestions'

// htmlQuestions.sort(() => Math.random - 0.5)
const CursoHtml = () => {
  const totalQuestions = htmlQuestions.length;
  const progressStep = totalQuestions / 100;

  const [progress, setProgress] = useState(0);
  const [life, setLife] = useState(4);
  const [currentQuestion, setCurrentQuestion] = useState(htmlQuestions[0]);
  const [hideAlert, setHideAlert] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);

  function processAnswer(correct) {
    setIsCorrect(correct);
    if (!correct) {
      setLife((life) => life - 1)
      console.log(life)
    }
    if (life === 0) {
      alert('Juego terminado')
    }
    setHideAlert(false);
  }
  
  function next() {
    const nextQuestion = htmlQuestions.indexOf(currentQuestion) + 1
    setIsCorrect(false);
    setHideAlert(true);
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(htmlQuestions[nextQuestion]);
    }else {
      alert('Fin de la lección')
    }
  }

  return (
    <section className="pt-3" style={{height: "100vh"}}>
      <ProgressBar
        progress={progress}
        life={life}
      />

      <SelectionMultiple
        question={currentQuestion}
        processAnswer={processAnswer}
      />

      <Alert
        hide={hideAlert}
        isCorrect={isCorrect}
        next={next}
      />
    </section>
  );
};
export default CursoHtml;