import { useState, useEffect } from 'react'
import clsx from 'clsx'
import careersData from '../../json/careers.json'
import { Button } from '../../components/button'

export const PersonalForm = () => {
  const [name, setName] = useState('')
  const [isStudent, setIsStudent] = useState('unselected')
  const [selectedCampus, setSelectedCampus] = useState('unselected')
  const [selectedCareer, setSelectedCareer] = useState('unselected')
  const [careers, setCareers] = useState([])

  const [isStudentB1, setIsStudentB1] = useState(false)
  const [isStudentB2, setIsStudentB2] = useState(false)
  const [selectedCampusB1, setSelectedCampusB1] = useState(false)
  const [selectedCampusB2, setSelectedCampusB2] = useState(false)
  const [selectedCampusB3, setSelectedCampusB3] = useState(false)

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleIsStudentChange = (event) => {
    setIsStudent(event)
    setIsStudentB1(false)
    setIsStudentB2(false)
  }

  const handleCampusChange = (event) => {
    setSelectedCampus(event)
    setSelectedCampusB1(false)
    setSelectedCampusB2(false)
    setSelectedCampusB3(false)
  }

  const handleCareerChange = (event) => {
    setSelectedCareer(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const useIsEnabledButton = () => {
    if (
      name !== '' &&
      isStudent === 'yes' &&
      selectedCampus !== 'unselected' &&
      selectedCareer !== 'unselected'
    )
      return true
    if (name !== '' && isStudent === 'no') return true
  }
  const isEnabledButton = useIsEnabledButton()

  useEffect(() => {
    setCareers(careersData)
  }, [])

  return (
    <div
      className={clsx(
        'flex flex-col h-screen w-full items-center justify-center'
      )}
    >
      <form
        onSubmit={handleSubmit}
        className={clsx(
          'flex flex-col bg-gray-100 rounded-xl text-black w-3/4 items-center'
        )}
      >
        <label htmlFor='name'>Hola! ¿Cuál es tu nombre?</label>
        <input
          type='text'
          name='name'
          placeholder='Ingresa tu nombre'
          onChange={handleNameChange}
        />
        <section className='flex flex-col items-center py-4'>
          ¿Estudias en la UCAB?
          <div className='flex flex-row pt-2'>
            <Button
              buttonState={isStudentB1}
              setButton={setIsStudentB1}
              onClick={() => handleIsStudentChange('yes')}
              isEnabled={true}
              size={'small'}
              buttonType={'button'}
              className={'mx-1'}
            >
              Si
            </Button>
            <Button
              buttonState={isStudentB2}
              setButton={setIsStudentB2}
              onClick={() => handleIsStudentChange('no')}
              isEnabled={true}
              size={'small'}
              buttonType={'button'}
              className={'mx-1'}
            >
              No
            </Button>
          </div>
        </section>
        <section className='flex flex-col items-center pb-4'>
          Sede en la que estudias
          <div className='flex flex-row pt-2'>
            <Button
              buttonState={selectedCampusB1}
              setButton={setSelectedCampusB1}
              onClick={() => handleCampusChange('caracas')}
              isEnabled={isStudent === 'yes'}
              size={'small'}
              buttonType={'button'}
              className={
                'bg-UCABLogoYellow mx-1 hover:bg-UCABLogoYellow ring-UCABLogoYellow'
              }
            >
              Caracas
            </Button>
            <Button
              buttonState={selectedCampusB2}
              setButton={setSelectedCampusB2}
              onClick={() => handleCampusChange('guayana')}
              isEnabled={isStudent === 'yes'}
              size={'small'}
              buttonType={'button'}
              className={
                'bg-UCABLogoBlue mx-1 hover:bg-UCABLogoBlue ring-UCABLogoBlue'
              }
            >
              Guayana
            </Button>
            <Button
              buttonState={selectedCampusB3}
              setButton={setSelectedCampusB3}
              onClick={() => handleCampusChange('teques')}
              isEnabled={isStudent === 'yes'}
              size={'small'}
              buttonType={'button'}
              className={'bg-UCABLogoGreen mx-1 ring-UCABLogoGreen'}
            >
              Los Teques
            </Button>
          </div>
        </section>
        <section className='flex flex-col items-center pb-2'>
          ¿Qué carrera estudias?
          <select
            id='careers'
            name='careers'
            value={selectedCareer}
            onChange={handleCareerChange}
            disabled={selectedCampus === 'unselected' || isStudent === 'no'}
            className='pb-4'
          >
            {careers
              .filter((career) => career.campus.includes(selectedCampus))
              .map((career) => (
                <option key={career.id} value={career.id}>
                  {career.name}
                </option>
              ))}
          </select>
        </section>
        <Button
          buttonState={null}
          isEnabled={isEnabledButton}
          size={'large'}
          buttonType={'submit'}
        >
          Siguiente
        </Button>
      </form>
    </div>
  )
}
