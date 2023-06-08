import { useState } from 'react'
import { ImageComponent } from '../../../components/imageComponent'
import categoriesImagesHash from '../../../../assets/categories'
import { Button } from '../../../components/button'
import leafBackImg from '../../../../assets/categories/leafBack.avif'
import viviendaImg from '../../../../assets/categories/vivienda.jpg'
import transportImg from '../../../../assets/categories/transport.jpg'
import foodImg from '../../../../assets/categories/food.jpg'
import waterImg from '../../../../assets/categories/water.jpg'
import shoppingImg from '../../../../assets/categories/shopping.jpg'
import recycleImg from '../../../../assets/categories/recycle.jpg'
import energyImg from '../../../../assets/categories/energy.jpg'

const QuestionsForm = (props) => {
  const { category, question } = props
  const categoryDescription = category.descripcion_catg
  const questionDescription = question.descripcion_preg
  const questionKey = question.llavePregunta
  const questionId = question.id_pregunta
  const options = question.opciones

  const categoryImages = {
    Vivienda: viviendaImg,
    Transporte: transportImg,
    Alimentos: foodImg,
    Agua: waterImg,
    Compras: shoppingImg,
    'Produccion de residuos': recycleImg,
    Energía: energyImg
  }

  const [selectedOptionId, setSelectedOptionId] = useState(null)
  const getOptionByCorrelativeId = useGetOptionByCorrelativeId(question)

  const stepsToSkip = () => {
    if (isApartmentUser()) return 1
    if (isWalking()) return 2
    if (isVegetarian()) return 2
    return 0
  }

  const isApartmentUser = () => {
    if (categoryDescription === 'Vivienda') {
      const option = getOptionByCorrelativeId(selectedOptionId)
      if (questionId === 1) {
        if (option.correlative === 1) {
          return true
        }
      }
    }
    return false
  }

  const isWalking = () => {
    if (categoryDescription === 'Transporte') {
      const option = getOptionByCorrelativeId(selectedOptionId)
      if (questionId === 1) {
        if (
          option.correlative === 3 ||
          option.correlative === 4 ||
          option.correlative === 5
        )
          return true
      }
    }
    return false
  }

  const isVegetarian = () => {
    if (categoryDescription === 'Alimentos') {
      const option = getOptionByCorrelativeId(selectedOptionId)
      if (option.correlative === 3 || option.correlative === 4) return true
    }
    return
  }

  const goNextQuestionBb = () => {
    setSelectedOptionId(null)
    const option = getOptionByCorrelativeId(selectedOptionId)

    props.onNext(
      {
        key: questionKey,
        optionId: option.correlative,
        value: option.peso
      },
      { skipSteps: stepsToSkip() }
    )
  }

  const isEnabled = selectedOptionId

  return (
    <div className='flex h-screen items-center'>
      <div
        className='bg-cover w-full h-full flex flex-col md:flex-row-reverse items-center justify-center'
        style={{ backgroundImage: `url(${leafBackImg})` }}
      >
        <div className='flex flex-col h-1/3 w-full md:h-5/6 md:justify-center md:w-4/6 text-center md:pr-4'>
          <div className='flex h-5/6 md:h-5/6'>
            <ImageComponent
              src={categoryImages[categoryDescription]}
              hash={categoriesImagesHash[0].blurhash}
              compClassName={'object-cover w-full h-full md:rounded-full'}
            />
          </div>
          <div className='self-center h-1/6 text-2xl md:text-4xl font-semibold'>
            {categoryDescription}
          </div>
        </div>
        <form className='flex flex-col h-2/3 items-center justify-around text-center w-[95%] md:w-4/5'>
          <label className='text-3xl font-semibold md:mb-8 md:mx-8'>
            {questionDescription}
          </label>
          <div className='flex flex-col md:mb-8'>
            {options.map((option) => {
              return (
                <Button
                  key={option.correlative}
                  buttonType={'button'}
                  isEnabled={true}
                  buttonState={option.correlative === selectedOptionId}
                  onClick={() => {
                    setSelectedOptionId(option.correlative)
                  }}
                  onForm={true}
                  className={'mb-4'}
                  size={'large'}
                >
                  {option.descripcion_opcion}
                </Button>
              )
            })}
          </div>
          <Button
            buttonType={'button'}
            size={'large'}
            isEnabled={isEnabled}
            onClick={goNextQuestionBb}
            onForm={true}
          >
            Siguiente
          </Button>
        </form>
      </div>
    </div>
  )
}

function useGetOptionByCorrelativeId(question) {
  return (correlativeId) => {
    return question.opciones.find(
      (option) => option.correlative === correlativeId
    )
  }
}

export default QuestionsForm
