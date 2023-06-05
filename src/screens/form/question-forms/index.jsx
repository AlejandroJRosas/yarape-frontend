import { useState } from 'react'
import QuestionComponent from './question-component'
import preguntasData from '../../../json/preguntas.json'

const QuestionForms = (props) => {
  const categories = preguntasData
  const [categoryId, setCategoryId] = useState(1)
  const [questionId, setQuestionId] = useState(1)
  const [userResponse, setUserResponse] = useState({})

  const category = categories.find(
    (category) => category.id_categoria === categoryId
  )
  const question = category.preguntas.find(
    (question) => question.id_pregunta === questionId
  )

  const onNext = (value, { skipSteps }) => {
    const newUserResponse = {
      ...userResponse,
      [value.key]: value.value
    }
    setUserResponse({
      ...newUserResponse
    })

    const isFinalCategory = category.id_categoria === categories.length
    const isFinalQuestion = question.id_pregunta === category.preguntas.length

    if (isFinalCategory && isFinalQuestion) {
      props.onFinalQuestion(newUserResponse)
      return
    }

    if (isFinalQuestion) {
      setCategoryId((currentCategoryId) => currentCategoryId + 1)
      setQuestionId(1)
    } else {
      if (skipSteps) {
        setQuestionId((currentQuestionId) => currentQuestionId + 1 + skipSteps)
      } else {
        setQuestionId((currentQuestionId) => currentQuestionId + 1)
      }
    }
  }

  return (
    <QuestionComponent
      onNext={onNext}
      category={category}
      question={question}
    />
  )
}

export default QuestionForms
