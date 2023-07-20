import { useState, useContext } from 'react'
import clsx from 'clsx'
import { Button } from '../../components/button'
import leafBackImg from '../../../assets/categories/leafBack.avif'
import { formContext } from '../../context/formContext'
// import careersData from '../../json/careers.json'

export const RoleForm = ({ onNext, careersData }) => {
  const { role, setRole, campusId, setCampusId, careerId, setCareerId } =
    useContext(formContext)

  const [roleB1, setRoleB1] = useState(false)
  const [roleB2, setRoleB2] = useState(false)
  const [campusIdB1, setCampusIdB1] = useState(false)
  const [campusIdB2, setCampusIdB2] = useState(false)

  const handleRoleChange = (event) => {
    setRole(event)
    setRoleB1(false)
    setRoleB2(false)
  }

  const handleCampusChange = (event) => {
    setCampusId(event)
    setCampusIdB1(false)
    setCampusIdB2(false)
  }

  const handleCareerChange = (event) => {
    setCareerId(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onNext()
  }

  const useIsEnabledButton = () => {
    if (role === 'E') {
      if (campusId !== null && careerId !== null) return true
    }
    if (role === 'T') {
      if (campusId !== null) return true
    }
  }
  const isEnabledButton = useIsEnabledButton()

  return (
    <div
      className={clsx(
        'flex flex-col h-screen w-screen items-center justify-center'
      )}
    >
      <div
        className='bg-cover w-full h-full flex flex-col items-center justify-center'
        style={{ backgroundImage: `url(${leafBackImg})` }}
      >
        <form
          onSubmit={handleSubmit}
          className={clsx(
            'flex flex-col bg-gray-100 rounded-xl text-black w-3/4 md:w-1/3 items-center text-lg font-medium px-4 py-10'
          )}
        >
          <section className='flex flex-col items-center py-2' hidden={false}>
            ¿Qué rol tienes en la UCAB?
            <div className='flex flex-row'>
              <Button
                buttonState={roleB1}
                setButton={setRoleB1}
                onClick={() => handleRoleChange('E')}
                isEnabled={true}
                size={'small'}
                buttonType={'button'}
                className={'mx-1'}
              >
                Estudiante
              </Button>
              <Button
                buttonState={roleB2}
                setButton={setRoleB2}
                onClick={() => handleRoleChange('T')}
                isEnabled={true}
                size={'small'}
                buttonType={'button'}
                className={'mx-1'}
              >
                Trabajador
              </Button>
            </div>
          </section>
          <section className='flex flex-col items-center pb-4'>
            Sede
            <div className='flex flex-row pt-4'>
              <Button
                buttonState={campusIdB1}
                setButton={setCampusIdB1}
                onClick={() => handleCampusChange('caracas')}
                isEnabled={role !== null}
                size={'small'}
                buttonType={'button'}
                className={
                  'bg-UCABLogoYellow mx-1 hover:bg-UCABLogoYellow ring-UCABLogoYellow'
                }
              >
                Caracas
              </Button>
              <Button
                buttonState={campusIdB2}
                setButton={setCampusIdB2}
                onClick={() => handleCampusChange('guayana')}
                isEnabled={role !== null}
                size={'small'}
                buttonType={'button'}
                className={
                  'bg-UCABLogoBlue mx-1 hover:bg-UCABLogoBlue ring-UCABLogoBlue'
                }
              >
                Guayana
              </Button>
            </div>
          </section>
          <section className='flex flex-col items-center pb-2'>
            ¿Qué carrera estudias?
            <select
              id='careers'
              name='careers'
              value={careerId}
              onChange={handleCareerChange}
              disabled={campusId === null || role === 'T'}
              className='mb-12 mt-4 w-3/4 md:w-auto'
            >
              {careersData
                .filter((career) => career.campus.includes(campusId))
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
            onHome={true}
          >
            Siguiente
          </Button>
        </form>
      </div>
    </div>
  )
}
