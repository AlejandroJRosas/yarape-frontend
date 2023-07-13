import leafBackImg from '../../../assets/categories/leafBack.avif'
import { RecomendationComponent } from './recomendations-components'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button'
import { useContext } from 'react'
import { formContext } from '../../context/formContext'

export const Recomendations = ({ status }) => {
  const { resetStateValues } = useContext(formContext)
  const ayuda = () => {
    if (status === 'bad') {
      return (
        <>
          <RecomendationComponent status={status} number={0} />
          <RecomendationComponent status={status} number={1} />
          <RecomendationComponent status={status} number={2} />
        </>
      )
    }
    if (status === 'normal') {
      return (
        <>
          <RecomendationComponent status={status} number={0} />
          <RecomendationComponent status={status} number={1} />
          <RecomendationComponent status={status} number={2} />
        </>
      )
    }
    if (status === 'good') {
      return <RecomendationComponent status={status} number={0} />
    }
  }

  return (
    <>
      <div className='flex flex-col h-screen text-center'>
        <div
          className='bg-cover h-full w-full flex flex-col items-center justify-around text-center'
          style={{ backgroundImage: `url(${leafBackImg})` }}
        >
          <label className='text-4xl font-semibold'>Recomendaciones</label>
          <label className='text-2xl font-medium'>
            Cómo puedes reducir tu huella:
          </label>
          <div className='flex flex-col w-4/5 md:flex-row'>{ayuda()}</div>
          <Link to={'/'} tabIndex={-1}>
            <Button
              size={'large'}
              isEnabled={true}
              buttonType={'button'}
              onHome={true}
              onClick={resetStateValues()}
            >
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
