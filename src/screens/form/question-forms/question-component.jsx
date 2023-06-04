import { useState } from 'react'
import { ImageComponent } from '../../../components/imageComponent'
import categoriesImagesHash from '../../../../assets/categories'
import transportImg from '../../../../assets/categories/transport.jpg'
import { Button } from '../../../components/button'
// import waterImg from '../../../assets/categories/water.jpg'

const QuestionsForm = (props) => {
  const { category, question } = props;
  const categoryDescription = category.descripcion_catg;
  const questionDescription = question.descripcion_preg;
  const questionKey = question.llavePregunta;
  const questionId = question.id_pregunta;
  const options = question.opciones;

  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const getOptionByCorrelativeId = useGetOptionByCorrelativeId(question);

  const goNextQuestionBb = () => {
    setSelectedOptionId(null);
    const option = getOptionByCorrelativeId(selectedOptionId);
    console.log('PRUEBA BB NEXT QUESTION', option, questionKey, option.peso)
    props.onNext({
      key: questionKey,
      optionId: option.correlative,
      value: option.peso,
    });
  }

  const isEnabled = !!selectedOptionId;

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex h-3/6'>
        <ImageComponent
          src={transportImg}
          hash={categoriesImagesHash[0].blurhash}
          compClassName={'object-cover w-full h-full'}
        />
      </div>
      <div className='self-center text-2xl font-semibold'>
        {categoryDescription}
      </div>
      <form className='flex flex-col h-full items-center justify-around'>
        <label className='text-3xl font-bold'>
          {questionId}-{questionDescription}
        </label>
        <div className='flex flex-col'>
          {
            options.map(option => {
              return <Button buttonType={'button'}
                isEnabled={true}
                buttonState={option.correlative === selectedOptionId}
                onClick={() => { setSelectedOptionId(option.correlative) }}
              >
                {option.correlative}
                -
                {option.descripcion_opcion}
              </Button>;
            })
          }
        </div>
        <Button buttonType={'button'} size={'large'} isEnabled={isEnabled} onClick={goNextQuestionBb}>
          Siguiente
        </Button>
      </form>
    </div>
  )
}

function useGetOptionByCorrelativeId(question) {
  return (correlativeId) => {
    return question.opciones.find(option => option.correlative === correlativeId);
  }
}

export default QuestionsForm;