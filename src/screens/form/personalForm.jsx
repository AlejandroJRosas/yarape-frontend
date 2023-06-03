import { useState, useEffect } from 'react'
import clsx from 'clsx'
import careersData from '../../json/careers.json'
// import CustomButton from './button'

const PersonalForm = () => {
  const [name, setName] = useState('')
  const [isStudent, setIsStudent] = useState('unselected')
  const [selectedCampus, setSelectedCampus] = useState('unselected')
  const [selectedCareer, setSelectedCareer] = useState('unselected')
  const [careers, setCareers] = useState([])

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleIsStudentChange = (event) => {
    setIsStudent(event.target.value)
  }

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value)
  }

  const handleCareerChange = (event) => {
    setSelectedCareer(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const isEnabledButton = () => {
    if (
      name !== '' &&
      isStudent === 'yes' &&
      selectedCampus !== 'unselected' &&
      selectedCareer !== 'unselected'
    )
      return true
    if (name !== '' && isStudent === 'no') return true
  }

  useEffect(() => {
    setCareers(careersData)
  }, [])

  return (
    <div className={clsx('flex flex-col h-screen items-center justify-center')}>
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
        <section>
          ¿Estudias en la UCAB?
          <label>
            <input
              type='radio'
              name='isStudent'
              value={'yes'}
              onChange={handleIsStudentChange}
            />
            Si
          </label>
          <label>
            <input
              type='radio'
              name='isStudent'
              value={'no'}
              onChange={handleIsStudentChange}
            />
            No
          </label>
        </section>
        <section className='flex flex-col'>
          Sede
          <label>
            Caracas
            <input
              type='radio'
              name='campus'
              value={'caracas'}
              onChange={handleCampusChange}
              disabled={!(isStudent === 'yes')}
            />
          </label>
          <label>
            Guayana
            <input
              type='radio'
              name='campus'
              value={'guayana'}
              onChange={handleCampusChange}
              disabled={!(isStudent === 'yes')}
            />
          </label>
          <label>
            Los Teques
            <input
              type='radio'
              name='campus'
              value={'teques'}
              onChange={handleCampusChange}
              disabled={!(isStudent === 'yes')}
            />
          </label>
        </section>
        <section>
          ¿Qué carrera estudias?
          <select
            id='careers'
            name='careers'
            value={selectedCareer}
            onChange={handleCareerChange}
            disabled={selectedCampus === 'unselected' || isStudent === 'no'}
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
        <button
          className={clsx(
            'text-white py-2 px-8 rounded-xl text-2xl font-semibold tracking-wide bg-GreenPalette cursor-pointer inline-flex items-center justify-center transition ',
            'hover:bg-[#2db946] hover:shadow-xl outline-none ring-GreenPalette ring-offset-2 focus-visible:ring-2 focus:scale-[0.95]',
            'disabled:bg-green-500/50 disabled:cursor-not-allowed disabled:shadow'
          )}
          type='submit'
          disabled={!isEnabledButton()}
        >
          Siguiente
        </button>
      </form>
    </div>
  )
}

export default PersonalForm
