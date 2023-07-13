import { useContext, useState } from 'react'
import { PersonalForm } from './personalForm'
import { RoleForm } from './roleForm'
import QuestionsForm from './question-forms'
import { formContext } from '../../context/formContext'
import { ResultForm } from './resultsForm'
import { Recomendations } from './recomendations'
import createUser from '../../services/postUsers'

const CO2Equivalente = 3.9
const HagEquivalente = 1.5
const TargetHagSustainableRate = 1.6

export const Form = () => {
  const {
    name,
    isUcabMember,
    footprint,
    campusId,
    role,
    careerId,
    items,
    setFootprint,
    setUserHagFP,
    setEarthQuantity
  } = useContext(formContext)
  const [screenShow, setScreenShow] = useState('personal-form')
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
    console.log('onFinalQuestions')
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

    const conversionHag = (sumaHuella * 0.001 * HagEquivalente) / CO2Equivalente

    const cantidadTierras = conversionHag / TargetHagSustainableRate

    const userCreateData = {
      name,
      isUcabMember,
      footprint: Number((footprint * 0.001).toFixed(2)),
      campusId: campusId === 'guayana' ? 1 : 2,
      role,
      careerId: Number(careerId),
      items: items.items
    }
    createUser(userCreateData)
    setFootprint(sumaHuella)
    setUserHagFP(conversionHag)
    setEarthQuantity(cantidadTierras)
    setScreenShow('result-form')
  }

  const router = {
    'personal-form': (
      <PersonalForm onNext={isUcabMember ? goToRoleForm : goToQuestionForm} />
    ),
    'role-form': <RoleForm onNext={goToQuestionForm} />,
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
