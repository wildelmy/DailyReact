import React, { useState } from "react";
import SelectionMultiple from "../components/SelectionMultiple";
import ProgressBar from "../components/ProgressBar";
import Alert from "../components/Alert";

const htmlQuestions = [
  {
    text: '¿Qué etiqueta es semánticamente correcta para el contenido principal?',
    options: [
      'Main',
      'Section',
      'Header'
    ]
  },
  {
    text: '¿Qué etiqueta HTML nos sirve para incluir archivos en JavaScript?',
    options: [
      '<br>',
      '<script>',
      '<styles>'
    ]
  }
]

// htmlQuestions.sort(() => Math.random - 0.5)
const CursoHtml = () => {
  const progressStep = htmlQuestions.length / 100

  const [progress, setProgress] = useState(0);
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [hideAlert, setHideAlert] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);

  function processAnswer(value) {
    setIsCorrect(value);
    setHideAlert(false);
  }
  
  function next() {
    setHideAlert(true);
    setCurrentQuestionPosition(currentQuestionPosition + 1);
  }

  return (
    <section>
      <ProgressBar progress={progress} />

      <SelectionMultiple
        question={htmlQuestions[currentQuestionPosition]}
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
