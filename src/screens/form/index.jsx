import { useContext, useEffect, useState } from 'react'
import { PersonalForm } from './personalForm'
import { RoleForm } from './roleForm'
import QuestionsForm from './question-forms'
import { formContext } from '../../context/formContext'
import { ResultForm } from './resultsForm'
import { Recomendations } from './recomendations'
import createUser from '../../services/postUsers'
import getAllCareers from '../../services/getAllCareers'
import getAllQuestions from '../../services/getAllQuestions'

const CO2Equivalente = 3.9
const HagEquivalente = 1.5
const TargetHagSustainableRate = 1.6

export const Form = () => {
  const [careers, setCareers] = useState()
  const [questions, setQuestions] = useState()

  const fetchAppInfo = async () => {
    try {
      const careers = await getAllCareers()
      setCareers(careers)
      const questions = await getAllQuestions()
      setQuestions(questions)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAppInfo()
  }, [])

  const {
    name,
    isUcabMember,
    campusId,
    role,
    careerId,
    items,
    setFootprint,
    setUserHagFP,
    setEarthQuantity,
    setHag
  } = useContext(formContext)
  const [screenShow, setScreenShow] = useState('personal-form')
  // const [screenShow, setScreenShow] = useState('result-form')
  const [mood, setMood] = useState(null)

  const goToRoleForm = () => {
    setScreenShow('role-form')
  }

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
    const categoriaViviendaCalculo =
      data['enQueCasaVives'] *
      (data['livingSize'] | 1) *
      data['personasQueHabitan']
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
      categoriaViviendaCalculo +
      categoriaTransporteCalculo +
      categoriaAlimentoCalculo +
      categoriaAguaCalculo +
      categoriaComprasCalculo +
      categoriaReciclaCalculo +
      categoriaEnergiaCalculo

    setFootprint(sumaHuella)

    const conversionHag = (sumaHuella * 0.001 * HagEquivalente) / CO2Equivalente

    setHag(conversionHag)

    const cantidadTierras = conversionHag / TargetHagSustainableRate

    const userCreateData = {
      name,
      isUcabMember,
      footprint: Number((sumaHuella * 0.001).toFixed(2)),
      campusId: isUcabMember ? (campusId === 'guayana' ? 1 : 2) : null,
      role: isUcabMember ? role : null,
      careerId: isUcabMember ? (role === 'T' ? null : Number(careerId)) : null,
      items: items.items
    }
    createUser(userCreateData)
    setUserHagFP(conversionHag)
    setEarthQuantity(cantidadTierras.toFixed(1))
    setScreenShow('result-form')
  }

  const router = {
    'personal-form': (
      <PersonalForm onNext={isUcabMember ? goToRoleForm : goToQuestionForm} />
    ),
    'role-form': <RoleForm onNext={goToQuestionForm} careersData={careers} />,
    'question-form': (
      <QuestionsForm
        onFinalQuestion={onFinalQuestion}
        onNext={goToResultForm}
        questionsData={questions}
      />
    ),
    'result-form': <ResultForm onNext={goToRecomendations} setMood={setMood} />,
    recomendations: <Recomendations status={mood} />
  }

  return <>{router[screenShow]}</>
}
