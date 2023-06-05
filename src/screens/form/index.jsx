import { useContext, useState } from 'react'
import { PersonalForm } from './personalForm'
import QuestionsForm from './question-forms'
import { formContext } from '../../context/formContext'
import { ResultForm } from './resultsForm'
import { Recomendations } from './recomendations'

export const Form = () => {
  const { setUserFootprint } = useContext(formContext)
  const [screenShow, setScreenShow] = useState('personal-form')
  const [mood, setMood] = useState(null)

  const goToQuestionForm = () => {
    setScreenShow('question-form')
  }

  const goToResultForm = () => {
    setScreenShow('result-form')
  }

  const goToRecomendations = () => {
    setScreenShow('recomendations')
  }

  const onFinalQuestion = (data) => {
    const categoriaTransporteCalculo =
      data['transportMethod'] *
        (data['isElectrical'] | 1) *
        (data['quantityPeopleTransport'] | 1) *
        data['distanceHouse'] +
      data['fliesYear']
    const categoriaAlimentoCalculo =
      data['enQueSeBasaTuDieta'] *
        (data['tipoDeCarneFrecuente'] | 1) *
        (data['consumesCarneDiario'] | 1) +
      data['consumesComidaImportada']
    const categoriaAguaCalculo =
      data['usasLosBanosDeUniversidad'] + data['usasLosFiltrosDeLaUniversidad']
    const categoriaComprasCalculo =
      data['vestimentaComun'] + data['tuRopaEsImportada']
    const categoriaReciclaCalculo =
      data['usasCuadernosReciclados'] +
      data['comprasProductosQueVenganEnPlastico'] +
      data['tuReutilizasLosProductos']
    const categoriaEnergiaCalculo =
      data['tienesBombillosAhorradoresEnCasa'] + data['cuantasHorasUsasElAire']

    const sumaHuella =
      categoriaTransporteCalculo +
      categoriaAlimentoCalculo +
      categoriaAguaCalculo +
      categoriaComprasCalculo +
      categoriaReciclaCalculo +
      categoriaEnergiaCalculo

    setUserFootprint(sumaHuella)
    setScreenShow('result-form')
  }

  const router = {
    'personal-form': <PersonalForm onNext={goToQuestionForm} />,
    'question-form': (
      <QuestionsForm
        onFinalQuestion={onFinalQuestion}
        onNext={goToResultForm}
      />
    ),
    'result-form': <ResultForm onNext={goToRecomendations} setMood={setMood} />,
    recomendations: <Recomendations status={mood} />
  }

  return <>{router[screenShow]}</>
}
