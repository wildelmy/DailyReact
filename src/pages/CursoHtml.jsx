import React from 'react'
import SelectionMultiple from '../components/SelectionMultiple'

const questions = [{
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

const CursoHtml = () => {
  function processAnswer(isCorrect) {
    console.log(isCorrect)
  }
  return (
    <div>
      <SelectionMultiple question={questions[0]} processAnswer={processAnswer} />
    </div>
  )
}
export default CursoHtml