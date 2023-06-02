import { useState, useEffect } from 'react'
import clsx from 'clsx'
import careersData from '../../json/careers.json'
import CustomButton from './button'

const PersonalForm = () => {
  const [careers, setCareers] = useState([])
  const [selectedCareer, setSelectedCareer] = useState()
  const [campus, setCampus] = useState(false)

  const handleCampusChange = (event) => {
    console.log('handleCampus ', event.target.value)
    setCampus(event.target.value)
    if (campus) {
      console.log('hola')
    } else console.log('chao')
  }

  const handleCareerChange = (event) => {
    setSelectedCareer(event.target.value)
  }

  useEffect(() => {
    console.log('useEffect')
    if (campus === true) {
      setCareers(careersData)
      console.log('dentro de car')
    } else {
      const filteredCareers = careersData.filter(
        (career) => career.soloCcs === false
      )
      setCareers(filteredCareers)
    }
  }, [campus])

  return (
    <div className={clsx('flex flex-col h-screen items-center justify-center')}>
      <form
        className={clsx(
          'flex flex-col bg-gray-100 rounded-xl text-black w-3/4 items-center'
        )}
      >
        <label htmlFor='name'>Hola! ¿Cuál es tu nombre?</label>
        <input type='text' name='name' placeholder='Ingresa tu nombre' />
        <div>
          ¿Estudias en la UCAB?
          <label>
            <input
              type='radio'
              name='opcion'
              value={true}
              // onChange={handleCampusChange}
            />
            Si
          </label>
          <label>
            <input
              type='radio'
              name='opcion'
              value={false}
              // onChange={handleCampusChange}
            />
            No
          </label>
        </div>
        <label hidden={false} className='flex flex-col'>
          Sede
          <CustomButton>Caracas</CustomButton>
          <CustomButton>Caracas</CustomButton>
          <label>
            Caracas
            <input
              type='radio'
              name='isStudent'
              value={true}
              onChange={handleCampusChange}
            />
          </label>
          <label>
            Guayana
            <input
              type='radio'
              name='isStudent'
              value={false}
              onChange={handleCampusChange}
            />
          </label>
        </label>
        <label hidden={false}>
          ¿Qué carrera estudias?
          <select
            id='careers'
            name='careers'
            value={selectedCareer}
            onChange={handleCareerChange}
          >
            {careers.map((career) => (
              <option key={career.id} value={career.id}>
                {career.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  )
}

export default PersonalForm
