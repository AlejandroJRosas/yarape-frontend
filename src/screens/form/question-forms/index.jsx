import { useState, useContext } from 'react'
import { formContext } from '../../../context/formContext'
import QuestionComponent from './question-component'

const QuestionForms = (props) => {
  const categories = props.questionsData
  const [categoryId, setCategoryId] = useState(1)
  const [questionId, setQuestionId] = useState(1)
  const [userResponse, setUserResponse] = useState({})

  const { items, setItems } = useContext(formContext)

  const category = categories.find(
    (category) => category.categoryId === categoryId
  )
  const question = category.questions.find(
    (question) => question.questionId === questionId
  )

  const onNext = (value, { skipSteps }) => {
    const newUserResponse = {
      ...userResponse,
      [value.key]: value.value
    }
    setUserResponse({
      ...newUserResponse
    })

    const newItems = {
      ...items,
      items: [
        ...(items.items ?? []),
        {
          categoryId: value.categoryId,
          questionId: value.questionId,
          optionId: value.optionId
        }
      ]
    }
    setItems({
      ...newItems
    })

    const isFinalCategory = category.categoryId === categories.length
    const isFinalQuestion = question.questionId === category.questions.length

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
