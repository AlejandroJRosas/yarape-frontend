import { useContext } from 'react'
import { formContext } from '../../context/formContext'
import { Button } from '../../components/button'
import leafBackImg from '../../../assets/categories/leafBack.avif'
import earthImg from '../../../assets/results/world.png'
import clsx from 'clsx'

export const ResultForm = ({ onNext, setMood }) => {
  const { footprint, earthQuantity, hag } = useContext(formContext)

  const range = () => {
    const value = Number((footprint * 0.001).toFixed(2))
    if (value > 9) {
      setMood('bad')
      return 'bad'
    }
    if (value >= 6 && value <= 9) {
      setMood('normal')
      return 'normal'
    }
    if (value < 6) {
      setMood('good')
      return 'good'
    }
  }

  const useRange = range()

  const handleSubmit = (event) => {
    event.preventDefault()
    onNext()
  }

  return (
    <>
      <div className='flex flex-col h-screen items-center justify-center'>
        <div
          className='bg-cover h-full w-full flex flex-col items-center justify-around text-center'
          style={{ backgroundImage: `url(${leafBackImg})` }}
        >
          <div className='flex flex-col text-2xl md:text-3xl font-semibold w-3/5'>
            <label>Tu Huella Ecológica es de:</label>
            <label>{Number((footprint * 0.001).toFixed(2))} Ton de CO2</label>
            <label>{Number(hag).toFixed(2)} hectáreas equivalentes</label>
          </div>
          <div
            className={clsx(
              'flex flex-col bg-opacity-60 rounded-3xl w-11/12 md:w-3/5',
              {
                'bg-red-600': useRange === 'bad',
                'bg-yellow-600': useRange === 'normal',
                'bg-GreenPalette': useRange === 'good'
              }
            )}
          >
            <label className='text-2xl md:text-3xl mt-4 mb-8 font-medium'>
              Si todas las personas en el mundo consumieran lo mismo que tú se
              necesitarían
            </label>
            <div className='flex flex-row justify-center items-center'>
              <label className='text-4xl md:text-5xl font-bold mr-4'>
                {earthQuantity} x
              </label>
              <img
                src={earthImg}
                className='object-contain w-40 h-40 md:w-48 md:h-48'
              />
            </div>
            <label className='text-2xl md:text-3xl mb-4 mt-8 font-medium'>
              para mitigar tu huella
            </label>
          </div>
          <form onSubmit={handleSubmit}>
            <Button
              buttonState={null}
              isEnabled={true}
              size={'large'}
              buttonType={'submit'}
              onHome={true}
            >
              Siguiente
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
