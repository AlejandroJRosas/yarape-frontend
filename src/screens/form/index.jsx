import { useState } from 'react'
// Own
// import { PersonalForm } from './personalForm'
import QuestionsForm from './question-forms';

export const Form = () => {
  const [screenShow, setScreenShow] = useState('personal-form'); // personal-form | question-form;

  const goToQuestionForm = () => {
    setScreenShow('question-form');
  };

  const onFinalQuestion = (data) => {
    console.log('!!!!!!!!!este men acabo todas las preguntas :D', data);

    const categoriaTransporteCalculo = data["transportMethod"] * data["distanceHouse"] * data["isElectrical"] * data["quantityPeopleTransport"];
    const categoriaAlimentoCalculo = data["enQueSeBasaTuDieta"] * data["tipoDeCarneFrecuente"] * data["consumesCarneDiario"] * data["consumesComidaImportada"];
    const categoriaAwaCalculo = data["usasLosBanosDeUniversidad"] + data["usasLosFiltrosDeLaUniversidad"];
    const categoriaComprasCalculo = data["vestimentaComun"] * data["tuRopaEsImportada"] * data["isElectrical"];
    const categoriaReciclaCalculo = (data["usasCuadernosReciclados"] * data["comprasProductosQueVenganEnPlastico"]) + data["tuReutilizasLosProductos"];
    const categoriaEnergiaCalculo = data["tienesBombillosAhorradoresEnCasa"] + data["cuantasHorasUsasElAire"];

    console.log('-->', categoriaTransporteCalculo,
      categoriaAlimentoCalculo,
      categoriaAwaCalculo,
      categoriaComprasCalculo,
      categoriaReciclaCalculo,
      categoriaEnergiaCalculo);

    const sumaHuella = categoriaTransporteCalculo +
      categoriaAlimentoCalculo +
      categoriaAwaCalculo +
      categoriaComprasCalculo +
      categoriaReciclaCalculo +
      categoriaEnergiaCalculo;

    console.log('--->------------>', sumaHuella);
  };

  return (
    <>
      {/* <PersonalForm/ onNext={goToQuestionForm} > */}
      <QuestionsForm onFinalQuestion={onFinalQuestion} />
    </>
  )
}
